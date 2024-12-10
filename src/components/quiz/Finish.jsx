import { Topic } from "./Topic"

export const Finish = ({ score, maxScore, topic }) => {
  return (  
    <div className="flex flex-col items-center gap-28 text-3xl">
      <Topic {...topic} />
      <h1 className="text-[140px] font-semibold text-navy">{score}</h1>
      <p className="text-2xl text-grey-navy">out of {maxScore}</p>
    </div>
  )
}