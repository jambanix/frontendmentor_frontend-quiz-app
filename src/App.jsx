import { useScreenWidth } from "./components/hooks/useScreenWidth";
import { useState, useEffect } from "react";
import { useQuiz } from "./components/hooks/useQuiz";
import {Main} from "./components/display/Main";
import {Grid} from "./components/display/Grid";
import {Welcome} from "./components/display/left/Welcome";
import { Block } from "./components/display/right/Block";
import { Topic } from "./components/display/Topic";
import {Question} from "./components/display/left/Question";
import {Answer} from "./components/ui/Answer";

function App() {
  
  const { quizDispatch, getCurrentQuestionText, getCurrentQuestionOptions, getOptionLetter, getAvailableTopics, getQuizStatus } = useQuiz();

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        return quizDispatch({ type: "SET_QUIZ_DATA", payload: data.map((topic, ix) => {
          return {
            ...topic,
            id: ix
          }
        }) });
      })}, []);

  // decide which components to show based on the current state of the quiz
  const renderApp = () => {
    switch (getQuizStatus()) {
      case "pending":
        return (
          <>
            <Welcome />
            {getAvailableTopics().map((topic) => <Block key={topic.id} onClick={() => quizDispatch({ type: "SET_TOPIC", payload: topic.id })}><Topic {...topic}></Topic></Block>)}
          </>
        )

      case "in progress":
        return (
          <>
            <Question question={getCurrentQuestionText()} />
            {getCurrentQuestionOptions().map((option, ix) => <Answer key={ix} {...option}/>)}
          </>
        )

      case "finished":
        return (
          <div>Finished</div>
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
