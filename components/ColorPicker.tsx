import React, { ChangeEvent, useMemo, useCallback } from "react";
import clsx from "clsx";

import useCustomizationStore from "../store/customizationStore";
import ColorButton from "./ColorButton";

interface ColorPickerProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const HEX_COLOR_REGEX = /^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/;

function getContrast(hexcolor: string) {
  if (hexcolor.length === 4) {
    hexcolor = `#${hexcolor[1]}${hexcolor[1]}${hexcolor[2]}${hexcolor[2]}${hexcolor[3]}${hexcolor[3]}`;
  }

  const r = parseInt(hexcolor.slice(1, 3), 16);
  const g = parseInt(hexcolor.slice(3, 5), 16);
  const b = parseInt(hexcolor.slice(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? "black" : "white";
}

const ColorPicker = ({ label, id, name }: ColorPickerProps) => {
  const { setCustomizationOutput } = useCustomizationStore();
  const color = useCustomizationStore(
    (state) => state[name as keyof typeof state],
  ) as string;

  const isValidHex = color ? HEX_COLOR_REGEX.test(color.toString()) : null;

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (!value) {
        setCustomizationOutput({ [name]: "#" });
      } else {
        setCustomizationOutput({ [name]: value.toUpperCase() });
      }
    },
    [name, setCustomizationOutput],
  );

  const handleDefaultColorClick = useCallback(
    (defaultColor: string) => {
      setCustomizationOutput({ [name]: defaultColor });
    },
    [name, setCustomizationOutput],
  );

  const textColor = useMemo(
    () => (isValidHex ? getContrast(color) : "black"),
    [isValidHex, color],
  );

  const defaultColors = useMemo(
    () => [
      "#F6F158",
      "#FFC300",
      "#88F353",
      "#4DA000",
      "#006B20",
      "#3B82F6",
      "#808DFF",
      "#FF5733",
      "#FF604B",
      "#900C22",
      "#000000",
    ],
    [],
  );

  return (
    <>
      <div className="m-2">
        <div className="flex items-center justify-center">
          <label className="block pb-2 font-semibold text-default" htmlFor={id}>
            {label}
          </label>
        </div>

        <div className="flex items-center">
          <div className="relative">
            <input
              style={{
                width: "80px",
                backgroundColor: color as string,
                color: textColor,
              }}
              className={clsx(
                "w-full h-[40px] px-2 border-2 rounded-md focus:outline-none placeholder-fade",
                isValidHex === null
                  ? ""
                  : isValidHex
                  ? "" // a color indicating a valid input can be used here, such as border-valid
                  : "border-invalid",
              )}
              placeholder="#"
              type="text"
              id={id}
              name={name}
              value={color}
              onChange={handleInputChange}
              onClick={(e) => {
                if (!e.currentTarget.value) {
                  setCustomizationOutput({ [name]: "#" });
                }
              }}
            />
          </div>

          <div className="ml-4">
            {defaultColors.map((color) => (
              <ColorButton
                key={color}
                color={color}
                onClick={handleDefaultColorClick}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorPicker;
