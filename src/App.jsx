import { useEffect } from "react";
import { useQuiz } from "./components/hooks/useQuiz";
import { Main } from "./components/layout/Main";
import { Grid } from "./components/layout/Grid";
import { ThemeProvider } from "./components/context/ThemeProvider";
import { WelcomeState } from "./components/quiz/quiz_display/WelcomeState";
import { InProgressState } from "./components/quiz/quiz_display/InProgressState";
import { FinishedState } from "./components/quiz/quiz_display/FinishedState";

function App() {
  const {
    currentQuestion,
    answers,
    quiz,
    setQuizData,
    setSelectedTopic,
    setSelectedAnswer,
    submitAnswer,
    setNextQuestion,
    reset,
  } = useQuiz();

  // load data on first render
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setQuizData(data));
  }, []);

  // event handlers
  const handleSelectTopic = (topic_id) => setSelectedTopic(topic_id);
  const handleSelectAnswer = (answer_id) => !answers.submitted && setSelectedAnswer(answer_id);
  const handleNextQuestion = () => setNextQuestion();
  const handleSubmitAnswer = () => submitAnswer();
  const handlePlayAgain = () => reset();

  // decide which components to show based on the current state of the quiz
  const renderApp = () => {
    switch (quiz.status) {
      case "pending":
        return (
          <WelcomeState
            availableTopics={quiz.availableTopics}
            onSelectTopic={handleSelectTopic}
          />
        );

      case "in progress":
        return (
          <InProgressState
            currentQuestionText={currentQuestion.text}
            currentQuestionNumber={currentQuestion.number}
            maxQuestionNumber={quiz.maxQuestionNumber}
            currentQuestionOptions={currentQuestion.options}
            selectedAnswer={answers.selected}
            correctAnswer={answers.correct}
            submittedAnswer={answers.submitted}
            onSelectAnswer={handleSelectAnswer}
            onSubmitAnswer={handleSubmitAnswer}
            onNextQuestion={handleNextQuestion}
          />
        );

      case "finished":
        return (
          <FinishedState
            onPlayAgain={handlePlayAgain}
            topic={quiz.chosenTopic}
            score={quiz.score}
            maxScore={quiz.maxQuestionNumber}
          />
        );
    }
  };

  return (
    <ThemeProvider>
      <Main chosenTopic={quiz.chosenTopic}>
        <Grid>{renderApp()}</Grid>
      </Main>
    </ThemeProvider>
  );
}

export default App;
