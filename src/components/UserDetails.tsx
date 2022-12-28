import { Box, Typography, Button } from "@mui/material";
import { TextInput } from "./FormInputs";

import { FirstStep } from "../types";

interface Props extends FirstStep {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function UserDetails({
  nextStep,
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
          Personal info
        </Typography>
        <Typography paragraph sx={{ opacity: "0.75" }}>
          Please provide your first name, last name and gender.
        </Typography>
      </Box>

      <Box>
        <TextInput
          required
          label="First Name"
          name="firstName"
          defaultValue={formState.firstName}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          required
          label="Last Name"
          name="lastName"
          defaultValue={formState.lastName}
          onChange={(e) => handleChange(e)}
        />
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Button size="small" variant="contained" onClick={stepForward}>
          Next Step
        </Button>
      </Box>
    </Box>
  );
}
