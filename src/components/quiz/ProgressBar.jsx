export const ProgressBar = ({ currentQuestionNumber, maxQuestionNumber }) => {
  return (
    <div>
      <progress value={currentQuestionNumber} max={maxQuestionNumber} className="bg-white w-full rounded-lg accent-red"/>
    </div>
  );
};
