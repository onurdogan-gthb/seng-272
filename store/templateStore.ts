import { create } from "zustand";

export interface TemplateStoreState {
  template: {
    id:
      | "plainText"
      | "template1Left"
      | "template1Right"
      | "template2Left"
      | "template2Right"
      | "template3Top"
      | "template3Bottom"
      | "initial";

    label: string;
  };
  setTemplate: (
    id:
      | "plainText"
      | "template1Left"
      | "template1Right"
      | "template2Left"
      | "template2Right"
      | "template3Top"
      | "template3Bottom"
      | "initial",
  ) => void;
}

export const useTemplateStore = create<TemplateStoreState>((set) => ({
  template: {
    id: "initial",
    label: "",
  },
  setTemplate: (newId) => {
    set((state) => ({
      template: {
        ...state.template,
        id: newId,
      },
    }));
  },
}));
