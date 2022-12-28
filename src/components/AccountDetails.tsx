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
        />
        <PasswordInput
          label="Password"
          name="password"
          defaultValue={formState.password}
          onChange={(e) => handleChange(e)}
        />
        <PasswordInput
          label="Confirm Password"
          name="password"
          defaultValue={formState.passwordConfirmation}
          onChange={(e) => handleChange(e)}
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
