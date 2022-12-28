export type FormState = {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export interface FirstStep {
  nextStep: () => void;
  formState: FormState;
}

export interface MiddleStep extends FirstStep {
  previousStep: () => void;
}
