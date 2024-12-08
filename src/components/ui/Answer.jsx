import { Block } from "../display/right/Block";

export const Answer = ({
  letter,
  text,
  id,
  onClick,
  selectedAnswer,
  correctAnswer,
  submittedAnswer
}) => {

  const handleClick = () => onClick(id);
  const isSelected = selectedAnswer === id;
  const isSubmitted = submittedAnswer === id;

  const createClassName = () => {

    // TODO: refactor this 
    // answer selected but no answer submitted yet
    if (isSelected && !isSubmitted) {
      return "border border-purple";
    }

    // answer selected and submitted
    else if (isSubmitted && correctAnswer === id) {
      return "border border-green";
    }

    // answer selected and submitted but incorrect
    else if (isSubmitted && correctAnswer !== id) {
      return "border border-red";
    }

    // show correct answer
    else if (submittedAnswer !== null && correctAnswer === id) {
      return "border border-green";
    }
  }

  console.log("Answer ID: ", id, "Selected Answer: ", selectedAnswer, "Submitted Answer: ", submittedAnswer, "Correct Answer: ", correctAnswer);
  return (
    
    <Block onClick={handleClick} className={createClassName()}>
      <div className="flex gap-4">
        <div className="">{letter}</div>
        <div>{text}</div>
        {console.log(id, selectedAnswer, isSelected)}
      </div>
    </Block>
  );
};
