import { ProgressBar } from "./ProgressBar"

export const Question = ({question, currentQuestionNumber, maxQuestionNumber}) => {
  return (
    <section className="flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-6">
        <h2 className="italic text-grey-navy">Question {currentQuestionNumber} of {maxQuestionNumber}</h2>
        <p className="font-bold text-3xl md:text-4xl lg:text-5xl text-navy">{question}</p>
      </div>

      <ProgressBar currentQuestionNumber={currentQuestionNumber} maxQuestionNumber={maxQuestionNumber} />
    </section>
  )
}