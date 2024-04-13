import useCustomizationStore from "../store/customizationStore";
import Heading from "./Heading";
import FontChanger from "./FontChanger";
import Slider from "./Slider";
import ColorPicker from "./ColorPicker";

const sliderData = [
  {
    label: "Font Size",
    id: "fontSize",
    name: "fontSize",
    min: 12,
    max: 16,
    step: 1,
  },
  {
    label: "Icon Size",
    id: "iconSize",
    name: "iconSize",
    min: 16,
    max: 20,
    step: 1,
  },
  {
    label: "Image Size",
    id: "imageSize",
    name: "imageSize",
    min: 100,
    max: 120,
    step: 1,
  },
];
const colorPickerData = [
  {
    label: "Name Color",
    id: "nameColor",
    name: "nameColor",
  },
  {
    label: "Text Color",
    id: "textColor",
    name: "textColor",
  },
  {
    label: "Email Color",
    id: "emailColor",
    name: "emailColor",
  },
  {
    label: "Link Color",
    id: "linkColor",
    name: "linkColor",
  },
];

const Customization = () => {
  const {
    fontName,
    fontSize,
    iconSize,
    imageSize,
    nameColor,
    textColor,
    linkColor,
    handleChange,
  } = useCustomizationStore();

  return (
    <>
      <div className="m-8">
        <div className="w-full p-4 border-b border-background">
          <Heading
            primary="Customization"
            secondary="Customize the styling of your email signature"
          />
        </div>

        <div>
          <p className="mt-4 px-4" style={{ fontFamily: fontName }}>
            Select a custom font
          </p>
          <FontChanger />
        </div>

        <div className="w-full p-4">
          {sliderData.map(({ label, id, name, min, max, step }) => {
            let value;
            switch (name) {
              case "fontSize":
                value = fontSize;
                break;
              case "iconSize":
                value = iconSize;
                break;
              case "imageSize":
                value = imageSize;
                break;
              default:
                value = 0;
            }
            return (
              <Slider
                key={id}
                label={label}
                id={id}
                name={name}
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
              />
            );
          })}
        </div>

        {colorPickerData.map(({ label, id, name }) => (
          <ColorPicker
            key={id}
            label={label}
            id={id}
            name={name}
            value={
              name === "nameColor"
                ? nameColor
                : name === "textColor"
                ? textColor
                : name === "emailColor"
                ? textColor
                : name === "linkColor"
                ? linkColor
                : ""
            }
            onChange={handleChange}
          />
        ))}
      </div>
    </>
  );
};

export default Customization;
