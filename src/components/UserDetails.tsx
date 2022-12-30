import { useEffect, useState } from "react";
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
  const [allInputsValid, setAllInputsValid] = useState(false);

  function validateName(name: string) {
    return name !== "";
  }

  useEffect(() => {
    if (
      validateName(formState.firstName) === true &&
      validateName(formState.lastName) === true
    )
      setAllInputsValid(true);
  }, [formState]);

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
          validate={validateName}
          helperText="Please enter your first name."
        />

        <TextInput
          required
          label="Last Name"
          name="lastName"
          defaultValue={formState.lastName}
          onChange={(e) => handleChange(e)}
          validate={validateName}
          helperText="Please enter your last name."
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
        <Button
          size="small"
          variant="contained"
          disabled={!allInputsValid}
          onClick={nextStep}
        >
          Next Step
        </Button>
      </Box>
    </Box>
  );
}
