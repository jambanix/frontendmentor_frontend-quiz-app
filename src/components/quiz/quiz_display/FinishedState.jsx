import { Button } from "../../ui/Button";
import { Finish } from "../Finish";

export const FinishedState = ({ score, maxScore, onPlayAgain, topic }) => {
  return (
    <>
      <div className="flex flex-col gap-2 text-heading-l">
        <h1 className="font-thin text-navy">Quiz completed</h1>
        <p className="font-semibold text-dark-navy">You scored...</p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col bg-pure-white rounded-xl px-14 py-6">
          <Finish score={score} maxScore={maxScore} topic={topic} />
        </div>
        
        <Button onClick={onPlayAgain}>Play again</Button>
      </div>
    </>
  );
};
