import { create } from "zustand";
import { ChangeEvent } from "react";

type ChangeOrMouseEvent =
  | ChangeEvent<HTMLInputElement>
  | React.MouseEvent<HTMLButtonElement>;

type State = {
  fontName: string;
  fontSize: number;
  iconSize: number;
  imageSize: number;
  nameColor: string;
  textColor: string;
  emailColor: string;
  linkColor: string;
};

type CustomizationStore = State & {
  setCustomizationOutput: (newCustomizationOutput: Partial<State>) => void;
  handleChange: (event: ChangeOrMouseEvent) => void;
};

const useCustomizationStore = create<CustomizationStore>((set) => ({
  fontName: "",
  fontSize: 12,
  iconSize: 16,
  imageSize: 100,
  nameColor: "",
  textColor: "",
  emailColor: "",
  linkColor: "",
  setCustomizationOutput(newCustomizationOutput) {
    set((state) => ({ ...state, ...newCustomizationOutput }));
  },
  handleChange(event) {
    if ("target" in event) {
      const { name, value } = event.target as HTMLInputElement;
      set((state) => ({
        ...state,
        [name]: value,
      }));
    }
  },
}));

export default useCustomizationStore;
