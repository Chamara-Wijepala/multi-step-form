export interface FirstStep {
  nextStep: () => void;
}

export interface MiddleStep extends FirstStep {
  previousStep: () => void;
}
