import { Button } from "../../ui/Button";
import { Finish } from "../Finish";

export const FinishedState = ({ score, maxScore, onPlayAgain, topic }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin text-navy">Quiz completed</h1>
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-navy">You scored...</p>
      </div>

      <div className="flex flex-col bg-pure-white rounded-xl p-14 gap-10">
        <Finish score={score} maxScore={maxScore} topic={topic} />
        <Button onClick={onPlayAgain}>Play again</Button>
      </div>
    </>
  );
};
