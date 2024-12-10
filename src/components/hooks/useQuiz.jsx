import { useReducer } from "react";

const initialState = {
  quizData: [],
  chosenTopic: null,
  currentQuestion: 1,
  selectedAnswer: null,
  submittedAnswer: null,
  score: 0,
  quizStatus: "pending",
};

const getOptionLetter = (index) => ["A", "B", "C", "D"].at(index);

const quizReducer = (state, action) => {
  switch (action.type) {

    // the base data from data.json
    case "SET_QUIZ_DATA":
      return { ...state, quizData: action.payload };

    // set the chosen topic to the object for it inside data.json
    case "SET_TOPIC":
      return {
        ...state,
        chosenTopic: state.quizData.find(
          (topic) => topic.id === action.payload
        ),
        quizStatus: "in progress",
      };

    // set the currently selected answer - used to highlight the selected answer in purple
    case "SET_SELECTED_ANSWER":
      return { ...state, selectedAnswer: action.payload };

    // set the submitted answer and check if it's correct
    case "SET_SUBMITTED_ANSWER":
      if (state.selectedAnswer === action.payload) {
        return { 
          ...state,
          submittedAnswer: state.selectedAnswer,
          score: state.score + 1,
        };
      }
      else {
        return { ...state, submittedAnswer: state.selectedAnswer };
      }

    // set the current question based on ID's. if end of quiz, set back to 1 and set status to finished
    case "SET_CURRENT_QUESTION":

      // quiz still ongoing, reset selected answer and submitted answer
      if (state.currentQuestion < action.payload) {
        return {
          ...state,
          currentQuestion: state.currentQuestion + 1,
          selectedAnswer: null,
          submittedAnswer: null
        }
      }

      // quiz finished, reset score and set status to finished
      else {
        return {
          ...state,
          quizStatus: "finished",
          currentQuestion: 1,
        }
      }

    case "RESET":
      return {
        ...initialState,
        quizData: state.quizData
      }
  }
};

export const useQuiz = () => {
  
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);

  const currentQuestionObj = quizState.chosenTopic?.questions.find(question => question.id === quizState.currentQuestion);

  const currentQuestion = {
    number: quizState.currentQuestion,
    text: currentQuestionObj?.question,
    options: currentQuestionObj?.options,
  }

  const answers = {
    selected: quizState.selectedAnswer,
    submitted: quizState.submittedAnswer,
    correct: currentQuestionObj?.options.find(option => option.correct).id,
  }

  const quiz = {
    status: quizState.quizStatus,
    availableTopics: quizState.quizData,
    chosenTopic: quizState.chosenTopic,
    score: quizState.score,
    maxQuestionNumber: quizState.chosenTopic?.questions.length,
  }

  // load the data from the json file and set IDs for each topic, question, answer
  // id's used for control over whole quiz state. add correct property to each option based on answer
  // for easier checking later. start from 1 to avoid falsey values at choice 0 causing issues
  const setQuizData = (data) => {
    quizDispatch({
      type: "SET_QUIZ_DATA",
      payload: data.map((topic, ix) => ({
        ...topic,
        id: ix + 1,
        questions: topic.questions.map((question, ix) => ({
          ...question,
          id: ix + 1,
          options: question.options.map((option, ix) => ({
            text: option,
            letter: getOptionLetter(ix),
            id: ix + 1,
            correct: question.answer === option
          })),
        })),
      })),
    });
  };

  const setSelectedTopic = (id) => quizDispatch({ type: "SET_TOPIC", payload: id });
  const setSelectedAnswer = (id) => quizDispatch({ type: "SET_SELECTED_ANSWER", payload: id });
  const submitAnswer = () => quizDispatch({ type: "SET_SUBMITTED_ANSWER", payload: answers.correct});
  const setNextQuestion = () => quizDispatch({ type: "SET_CURRENT_QUESTION", payload: quiz.maxQuestionNumber });
  const reset = () => quizDispatch({ type: "RESET" });
  

  console.log(quiz.score, quiz.maxQuestionNumber)
  return {
    currentQuestion,
    answers,
    quiz,
    setQuizData,
    setSelectedTopic,
    setSelectedAnswer,
    submitAnswer,
    setNextQuestion,
    reset
  };
};
