import { useEffect } from "react";
import { useQuiz } from "./components/hooks/useQuiz";
import {Main} from "./components/display/Main";
import {Grid} from "./components/display/Grid";
import {Welcome} from "./components/display/left/Welcome";
import { Block } from "./components/display/right/Block";
import { Topic } from "./components/display/Topic";
import {Question} from "./components/display/left/Question";
import {Answer} from "./components/ui/Answer";
import {Button} from "./components/display/Button";

function App() {
  
  const {
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
  } = useQuiz();

  // load data on first render
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then(data => setQuizData(data))}, []);

  // event handlers
  const handleSelectTopic = (topic_id) => setSelectedTopic(topic_id);
  const handleSelectAnswer = (answer_id) => setSelectedAnswer(answer_id);
  const handleNextQuestion = () => null;
  const handleSubmitAnswer = () => submitAnswer();

  // decide which components to show based on the current state of the quiz
  const renderApp = () => {
    switch (quizStatus) {
      case "pending":
        return (
          <>
            <Welcome />
            {availableTopics.map(topic => <Block key={topic.id} onClick={() => handleSelectTopic(topic.id)}><Topic {...topic} /></Block>)}
          </>
        )

      case "in progress":
        return (
          <>
            <Question question={currentQuestionText} />
            {currentQuestionOptions.map((option, ix) => <Answer key={ix} {...{selectedAnswer, correctAnswer, submittedAnswer}} {...option} onClick={handleSelectAnswer}/>)}
            {
              selectedAnswer
              ? submittedAnswer
                ? <Button onClick={handleNextQuestion}>Next question</Button>
                : <Button onClick={handleSubmitAnswer}>Submit answer</Button>
              : <Button disabled>Select an answer</Button>
            }
          </>
        )

      case "finished":
        return (
          <>
            <div>Finished</div>
            <Button>Play again</Button>
          </>
        )
    }
  }

  return (
    <Main>
      <Grid>
        {console.log("Rendered")}
        {renderApp()}
      </Grid>
    </Main>
  );
}

export default App;
