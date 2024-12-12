export const ProgressBar = ({ currentQuestionNumber, maxQuestionNumber }) => {
  return (
    <div>
      <progress value={currentQuestionNumber} max={maxQuestionNumber} className="bg-pure-white dark:bg-navy w-full rounded-lg progress"/>
    </div>
  );
};
