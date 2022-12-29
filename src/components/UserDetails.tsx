import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from "@mui/material";
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

      <Box display="grid" gap="1.5rem">
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

        <FormControl>
          <FormLabel id="gender-selection">Gender (Optional)</FormLabel>
          <RadioGroup
            aria-labelledby="gender-selection"
            value={formState.gender}
            name="gender"
            onChange={(e) => handleChange(e)}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Button size="small" variant="contained" onClick={stepForward}>
          Next Step
        </Button>
      </Box>
    </Box>
  );
}
