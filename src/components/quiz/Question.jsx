import { ProgressBar } from "./ProgressBar"

export const Question = ({question, currentQuestionNumber, maxQuestionNumber}) => {
  return (
    <section className="flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-6">
        <h2 className="italic text-grey-navy dark:text-light-bluish text-body-s">Question {currentQuestionNumber} of {maxQuestionNumber}</h2>
        <p className="font-bold text-heading-m text-navy dark:text-pure-white ">{question}</p>
      </div>

      <ProgressBar currentQuestionNumber={currentQuestionNumber} maxQuestionNumber={maxQuestionNumber} />
    </section>
  )
}