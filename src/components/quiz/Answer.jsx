import { Block } from "../layout/Block";
import { useState } from "react";

export const Answer = ({
  letter,
  text,
  id,
  onClick,
  selectedAnswer,
  correctAnswer,
  submittedAnswer,
  tabIndex
}) => {

  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => onClick(id);
  const isSelected = selectedAnswer === id;
  const isSubmitted = submittedAnswer === id;
  const hasBeenChosenCorrect = isSubmitted && correctAnswer === id;
  const hasBeenChosenIncorrect = isSubmitted && correctAnswer !== id;
  const showCorrect = submittedAnswer !== null && correctAnswer === id;

  const bodyClassName = () => {
    // answer selected but no answer submitted yet
    if (isSelected && !isSubmitted) {
      return "border border-purple";
    }

    // show correct answer
    else if (hasBeenChosenCorrect || showCorrect) {
      return "border border-green";
    }

    // answer selected and submitted but incorrect
    else if (hasBeenChosenIncorrect) {
      return "border border-red";
    }
  }

  const letterClassName = () => {

    if (isHovering && !submittedAnswer && !isSelected) {
      return "bg-purple/20 dark:bg-purple/50 text-purple dark:text-pure-white";
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
      return "bg-light-grey text-navy";
    }
  }
  return (
    <Block onClick={handleClick} className={`${bodyClassName()}`} onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
      <div className="flex justify-between w-full text-heading-sm">
        <div className="flex gap-5 items-center">

          {/* Letter */}
          <div className={`${letterClassName()} w-10 h-10 p-4 rounded-xl transition-colors flex items-center justify-center font-semibold text-heading-sm`}>{letter}</div>

          {/* Answer */}
          <div className="text-dark-navy dark:text-pure-white">{text}</div>
        </div>

        {/* Correct/Incorrect icon */}
        <div className="flex items-center">
          {(hasBeenChosenCorrect || showCorrect) && <img src="images/icon-correct.svg" alt="correct" className="w-8 h-8"></img>}
          {hasBeenChosenIncorrect && <img src="images/icon-incorrect.svg" alt="incorect" className="w-8 h-8"></img>}
        </div>
      </div>
    </Block>
  );
};
