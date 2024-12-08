import { useReducer } from "react";

const initialState = {
  quizData: [],
  chosenTopic: null,
  currentQuestion: 0,
  selectedAnswer: null,
  score: 0,
  isCorrect: null,
  isFinished: false,
  quizStatus: "pending"
}

const getOptionLetter = (index) => ["A", "B", "C", "D"].at(index);

const quizReducer = (state, action) => {

  switch (action.type) {
    case "SET_QUIZ_DATA":
      return {...state, quizData: action.payload};
    case "SET_TOPIC":
      return {
        ...state,
        chosenTopic: state.quizData.find((topic) => topic.id === action.payload),
        quizStatus: "in progress"
      }
    case "SET_SELECTED_ANSWER":
      return {...state, selectedANSWER: action.payload};
    case "SET_CURRENT_QUESTION":
      return {...state, currentQuestion: action.payload};
    case "SET_SCORE":
      return {...state, score: action.payload};
    case "SET_IS_CORRECT":
      return {...state, isCorrect: action.payload};
    case "SET_QUIZ_STATUS":
      return {...state, quizStatus: action.payload};
    default:
      return state;
  }
}

export const useQuiz = () => {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);

  const getCurrentQuestionInfo = () => quizState.chosenTopic.questions.at(quizState.currentQuestion);
  const getCurrentQuestionText = () => getCurrentQuestionInfo().question;
  const getCurrentQuestionOptions = () => getCurrentQuestionInfo().options.map((option, ix) => {
    return {
      text: option,
      letter: getOptionLetter(ix)
    }
  });
  
  const getAvailableTopics = () => quizState.quizData;
  const getQuizStatus = () => quizState.quizStatus;

  return {
    getCurrentQuestionText,
    getCurrentQuestionOptions,
    getAvailableTopics,
    getQuizStatus,
    quizDispatch
  };
}