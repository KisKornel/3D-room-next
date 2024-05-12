type TooltipProps = {
  currentStage: number;
};

const Tooltip = ({ currentStage }: TooltipProps) => {
  if (currentStage === 1) {
    return (
      <div className="flex flex-col text-slate-950 font-poppins font-normal text-xs leading-none">
        <span>Book</span>
        <span>page</span>
      </div>
    );
  }

  return null;
};

export default Tooltip;
