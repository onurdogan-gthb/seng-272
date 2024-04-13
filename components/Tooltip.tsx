import React, { useState } from "react";

interface TooltipProps {
  tooltipText: string;
}

const Tooltip: React.FC<TooltipProps> = ({ tooltipText }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };
  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="flex items-center justify-center absolute top-2 right-0 bg-background border border-highlight text-highlight cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        background: "linear-gradient(to bottom left, #F8F9FA, #FFFFFF)",
      }}
    >
      <span className="">?</span>
      {showTooltip && (
        <div
          className="absolute bottom-0 right-full p-2 px-4 transform translate-x-[35px] translate-y-1 bg-background border border-highlight rounded-full text-sm text-fade"
          style={{
            width: "251px",
            background: "linear-gradient(to bottom left, #F8F9FA, #FFFFFF)",
          }}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
