import React from "react";

interface ColorButtonProps {
  color: string;
  onClick: (color: string) => void;
}

const ColorButton: React.FC<ColorButtonProps> = ({ color, onClick }) => {
  const handleClick = () => {
    onClick(color);
  };

  return (
    <button
      className="my-2 mr-2 p-4 rounded-full"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></button>
  );
};

export default ColorButton;
