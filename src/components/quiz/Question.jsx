import { ProgressBar } from "./ProgressBar"

export const Question = ({question, currentQuestionNumber, maxQuestionNumber}) => {
  return (
    <section className="flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <h2 className="">Question {currentQuestionNumber} of {maxQuestionNumber}</h2>
        <p className="font-extrabold">{question}</p>
      </div>

      <ProgressBar currentQuestionNumber={currentQuestionNumber} maxQuestionNumber={maxQuestionNumber} />
    </section>
  )
}