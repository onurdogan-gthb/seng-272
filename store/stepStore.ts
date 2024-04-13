import { create } from "zustand";

interface StepStoreState {
  step: number;
  setStep: (status: number) => void;
}

export const useStepStore = create<StepStoreState>((set) => ({
  step: 0,
  setStep: (status) => set(() => ({ step: status })),
}));
