import { Button } from "../../ui/Button";

export const FinishedState = ({ score, onPlayAgain }) => {
  return (
    <div>
      <h3>Finished</h3>
      <Button onClick={onPlayAgain}>Play again</Button>
    </div>
  );
};
