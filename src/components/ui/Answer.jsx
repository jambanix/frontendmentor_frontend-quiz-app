import { Block } from "../layout/Block";

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
    <Block onClick={handleClick} className={`${bodyClassName()} relative`}>
      <div className="flex gap-4 items-center">
        <div className={`${letterClassName()} w-10 h-10 p-2 rounded-xl transition-colors flex items-center justify-center font-semibold`}>{letter}</div>
        <div>{text}</div>
      </div>
      {/* {hasBeenChosenIncorrect &&
        <div className="absolute right-0 top-1/2 -translate-y-1/2">

        </div>
      } */}
    </Block>
  );
};
