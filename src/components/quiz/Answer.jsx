import { Block } from "../layout/Block";
import { useState } from "react";

export const Answer = ({
  letter,
  text,
  id,
  onClick,
  selectedAnswer,
  correctAnswer,
  submittedAnswer
}) => {

  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => onClick(id);
  const isSelected = selectedAnswer === id;
  const isSubmitted = submittedAnswer === id;
  const hasBeenChosenCorrect = isSubmitted && correctAnswer === id;
  const hasBeenChosenIncorrect = isSubmitted && correctAnswer !== id;
  const showCorrect = submittedAnswer !== null && correctAnswer === id;

  //TODO - Refactor this as it's messy

  const bodyClassName = () => {
    // answer selected but no answer submitted yet
    if (isSelected && !isSubmitted) {
      return "border border-purple";
    }

    // answer selected and submitted
    else if (hasBeenChosenCorrect) {
      return "border border-green";
    }

    // answer selected and submitted but incorrect
    else if (hasBeenChosenIncorrect) {
      return "border border-red";
    }

    // show correct answer
    else if (showCorrect) {
      return "border border-green";
    }
  }

  const letterClassName = () => {

    if (isHovering && !submittedAnswer && !isSelected) {
      return "bg-purple/20 text-purple";
    }

    if (isSelected && !isSubmitted) {
      return "bg-purple text-pure-white";
    }

    // answer selected and submitted
    else if (hasBeenChosenCorrect) {
      return "bg-green text-pure-white";
    }

    // answer selected and submitted but incorrect
    else if (hasBeenChosenIncorrect) {
      return "bg-red text-pure-white";
    }

    // show correct answer
    else if (showCorrect) {
      return "bg-green text-pure-white";
    }
    else {
      return "bg-light-grey";
    }
  }
  return (
    <Block onClick={handleClick} className={`${bodyClassName()}`} onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">

          {/* Letter */}
          <div className={`${letterClassName()} w-10 h-10 p-2 rounded-xl transition-colors flex items-center justify-center font-bold`}>{letter}</div>

          {/* Answer */}
          <div>{text}</div>
        </div>

        {/* Correct/Incorrect icon */}
        <div className="flex items-center">
          {hasBeenChosenCorrect && <img src="images/icon-correct.svg" alt="correct" className="w-5 h-5"></img>}
          {hasBeenChosenIncorrect && <img src="images/icon-incorrect.svg" alt="incorect" className="w-5 h-5"></img>}
        </div>
      </div>
    </Block>
  );
};
