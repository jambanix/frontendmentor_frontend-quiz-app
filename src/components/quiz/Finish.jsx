import { Topic } from "./Topic"

export const Finish = ({ score, maxScore, topic }) => {
  return (  
    <div className="flex flex-col items-center gap-10">
      <Topic {...topic} />
      <h1 className="text-display font-semibold text-navy">{score}</h1>
      <p className="text-body-m text-grey-navy">out of {maxScore}</p>
    </div>
  )
}