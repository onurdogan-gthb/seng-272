import React, { ChangeEvent } from "react";

import useCustomizationStore from "../store/customizationStore";

const FontChanger = () => {
  const fonts = [
    "",
    "Quicksand",
    "Roboto",
    "Poppins",
    "Open Sans",
    "Verdana",
    "Georgia",
    "Arial",
    "Courier New",
    "Times New Roman",
  ];

  const { fontName, setCustomizationOutput } = useCustomizationStore();

  const handleFontChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCustomizationOutput({ fontName: event.target.value });
  };

  return (
    <div className="w-full p-4">
      <select
        id="fontChanger"
        name="fontChanger"
        value={fontName}
        onChange={handleFontChange}
        className="block w-full py-2 pl-2 pr-8 bg-window rounded-md border-2 border-highlight focus:outline-none"
      >
        {fonts.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontChanger;
