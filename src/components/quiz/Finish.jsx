import { Topic } from "./Topic"

export const Finish = ({ score, maxScore, topic }) => {
  return (  
    <div className="flex flex-col items-center gap-10">
      <Topic {...topic} />
      <h1 className="text-display font-semibold text-navy dark:text-pure-white">{score}</h1>
      <p className="text-body-m text-grey-navy dark:text-pure-white">out of {maxScore}</p>
    </div>
  )
}