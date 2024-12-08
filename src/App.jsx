import { useEffect } from "react";
import { useQuiz } from "./components/hooks/useQuiz";
import {Main} from "./components/layout/Main";
import {Grid} from "./components/layout/Grid";
import {Welcome} from "./components/quiz/Welcome";
import { Block } from "./components/layout/Block";
import { Topic } from "./components/quiz/Topic";
import {Question} from "./components/quiz/Question";
import {Answer} from "./components/quiz/Answer";
import {Button} from "./components/ui/Button";
import {Header} from "./components/layout/Header";
import { ThemmeToggler } from "./components/ui/ThemeToggler";
import { ThemeProvider } from "./components/context/ThemeProvider";

function App() {
  
  const {
    currentQuestionText,
    chosenTopic,
    currentQuestionOptions,
    availableTopics,
    quizStatus,
    selectedAnswer,
    submittedAnswer,
    correctAnswer,
    setQuizData,
    setSelectedTopic,
    setSelectedAnswer,
    setNextQuestion,
    submitAnswer,
    reset
  } = useQuiz();

  // load data on first render
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then(data => setQuizData(data))}, []);

  // event handlers
  const handleSelectTopic = (topic_id) => setSelectedTopic(topic_id);
  const handleSelectAnswer = (answer_id) => !submittedAnswer && setSelectedAnswer(answer_id);
  const handleNextQuestion = () => setNextQuestion();
  const handleSubmitAnswer = () => submitAnswer();
  const handlePlayAgain = () => reset();

  // decide which components to show based on the current state of the quiz
  const renderApp = () => {
    switch (quizStatus) {
      case "pending":
        return (
          <>
            <Welcome />
            <div className="flex flex-col gap-3">
              {availableTopics.map(topic => <Block key={topic.id} onClick={() => handleSelectTopic(topic.id)}><Topic {...topic} /></Block>)}
            </div>
          </>
        )

      case "in progress":
        return (
          <>
          {/* Left side */}
            <Question question={currentQuestionText} />

            {/* Right side */}
            <div className="flex flex-col gap-3">
              {currentQuestionOptions.map((option, ix) => <Answer key={ix} {...{selectedAnswer, correctAnswer, submittedAnswer}} {...option} disabled={submittedAnswer !== null} onClick={handleSelectAnswer}/>)}
              {
                selectedAnswer
                ? submittedAnswer
                  ? <Button onClick={handleNextQuestion}>Next question</Button>
                  : <Button onClick={handleSubmitAnswer}>Submit answer</Button>
                : <Button disabled>Select an answer</Button>
              }
            </div>
          </>
        )

      case "finished":
        return (
          <>
            <div>Finished</div>
            <Button onClick={handlePlayAgain}>Play again</Button>
          </>
        )
    }
  }

  return (
    <ThemeProvider>
      <Main>
        <Header>
          {chosenTopic && <Topic {...chosenTopic} /> || <div></div>}
          <ThemmeToggler />
        </Header>
        <Grid>
          {renderApp()}
        </Grid>
      </Main>
    </ThemeProvider>
  );
}

export default App;
