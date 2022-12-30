import { Box, Typography, Button } from "@mui/material";
import { TextInput, PasswordInput } from "./FormInputs";

import { MiddleStep } from "../types";

interface Props extends MiddleStep {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function AccountDetails({
  nextStep,
  previousStep,
  formState,
  handleChange,
}: Props) {
  function stepForward() {
    nextStep();
  }

  function validateEmail(email: string) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    return !!email.match(pattern);
  }

  function validatePassword(password: string) {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    return !!password.match(pattern);
  }

  function validatePasswordConfirmation(password: string) {
    return password === formState.password;
  }

  return (
    <Box display="grid" gap="1.5rem">
      <Box>
        <Typography variant="h4" component="h2" fontWeight={600}>
          Account details
        </Typography>
        <Typography paragraph sx={{ opacity: "0.75" }}>
          Please enter your email address and create a password.
        </Typography>
      </Box>

      <Box display="grid" gap="1rem">
        <TextInput
          required
          label="Email"
          name="email"
          defaultValue={formState.email}
          onChange={(e) => handleChange(e)}
          validate={validateEmail}
          helperText="Please enter a valid email address."
        />
        <PasswordInput
          label="Password"
          name="password"
          defaultValue={formState.password}
          onChange={(e) => handleChange(e)}
          validate={validatePassword}
          helperText="Must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter and 1 number. Special characters are optional."
          showHelperText
        />
        <PasswordInput
          label="Confirm Password"
          name="passwordConfirmation"
          defaultValue={formState.passwordConfirmation}
          onChange={(e) => handleChange(e)}
          validate={validatePasswordConfirmation}
          helperText="Passwords don't match."
        />
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Button size="small" onClick={previousStep}>
          Go Back
        </Button>

        <Button size="small" variant="contained" onClick={stepForward}>
          Next Step
        </Button>
      </Box>
    </Box>
  );
}
