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
      return {
        ...state,
        submittedAnswer: state.selectedAnswer
      }
    case "SET_CURRENT_QUESTION":
      return {
        ...state,
        currentQuestion: action.payload,
      };
    case "SET_SCORE":
      return { ...state, score: action.payload };
    case "SET_IS_CORRECT":
      return { ...state, selectedAnswerCorrect: action.payload };
    case "SET_QUIZ_STATUS":
      return { ...state, quizStatus: action.payload };
    default:
      return state;
  }
};

export const useQuiz = () => {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);

  const currentQuestionInfo = quizState.chosenTopic?.questions.find(question => question.id === quizState.currentQuestion);
  const currentQuestionText = currentQuestionInfo?.question;
  const currentQuestionOptions = currentQuestionInfo?.options;
  const availableTopics = quizState.quizData;
  const quizStatus = quizState.quizStatus;
  const selectedAnswer = quizState.selectedAnswer;
  const submittedAnswer = quizState.submittedAnswer;
  const correctAnswer = currentQuestionInfo?.options.find(option => option.correct).id;

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
  const submitAnswer = () => quizDispatch({ type: "SET_SUBMITTED_ANSWER", payload: null });

  console.log(quizState.quizData);
  return {
    currentQuestionText,
    currentQuestionOptions,
    availableTopics,
    quizStatus,
    selectedAnswer,
    submittedAnswer,
    correctAnswer,
    setQuizData,
    setSelectedTopic,
    setSelectedAnswer,
    submitAnswer
  };
};
