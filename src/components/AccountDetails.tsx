import { Box, Button } from "@mui/material";

import { MiddleStep } from "../types";

export default function AccountDetails({ nextStep, previousStep }: MiddleStep) {
  function stepForward() {
    nextStep();
  }

  return (
    <>
      <div>UserDetails</div>
      <Box display="flex" justifyContent="space-between">
        <Button size="small" onClick={previousStep}>
          Go Back
        </Button>

        <Button size="small" variant="contained" onClick={stepForward}>
          Next Step
        </Button>
      </Box>
    </>
  );
}
