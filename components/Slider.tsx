import React from "react";

interface SliderProps {
  label: string;
  id: string;
  name: string;
  min: number;
  max: number;
  value: number;
  step: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider: React.FC<SliderProps> = ({
  label,
  id,
  name,
  min,
  max,
  value,
  step,
  onChange,
}) => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <label className="block mt-2 font-semibold text-default" htmlFor={id}>
            {label}
          </label>
        </div>

        <input
          className="appearance-none w-full h-2 rounded-lg bg-background cursor-pointer"
          type="range"
          id={id}
          name={name}
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={onChange}
        />
        <output
          className="pb-2 border-b border-background text-default"
          htmlFor={id}
        >
          {value}
        </output>
      </div>
    </>
  );
};

export default Slider;
