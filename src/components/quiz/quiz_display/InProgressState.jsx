import { Button } from "../../ui/Button";
import { Question } from "../Question";
import { Answer } from "../Answer";

export const InProgressState = ({
  currentQuestionText,
  currentQuestionNumber,
  maxQuestionNumber,
  currentQuestionOptions,
  selectedAnswer,
  correctAnswer,
  submittedAnswer,
  onSelectAnswer,
  onSubmitAnswer,
  onNextQuestion
}) => {

  return (
    <>
      {/* Left side */}
      <Question
        question={currentQuestionText}
        currentQuestionNumber={currentQuestionNumber}
        maxQuestionNumber={maxQuestionNumber}
      />

      {/* Right side */}
      <div className="flex flex-col gap-6 md:gap-5 lg:gap-6">
        {currentQuestionOptions.map((option, ix) => (
          <Answer
            key={ix}
            {...{ selectedAnswer, correctAnswer, submittedAnswer }}
            {...option}
            disabled={submittedAnswer !== null}
            onClick={onSelectAnswer}
          />
        ))}
        {selectedAnswer ? (
          submittedAnswer ? (
            <Button onClick={onNextQuestion}>Next question</Button>
          ) : (
            <Button onClick={onSubmitAnswer}>Submit answer</Button>
          )
        ) : (
          <Button disabled>Select an answer</Button>
        )}
      </div>
    </>
  );
};
