import { Box, Button } from "@mui/material";

import { MiddleStep } from "../types";

export default function Overview({ nextStep, previousStep }: MiddleStep) {
  return (
    <>
      <div>Overview</div>
      <Box display="flex" justifyContent="space-between">
        <Button size="small" onClick={previousStep}>
          Go Back
        </Button>

        <Button
          size="small"
          variant="contained"
          color="success"
          onClick={nextStep}
        >
          Confirm
        </Button>
      </Box>
    </>
  );
}
