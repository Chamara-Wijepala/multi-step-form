import { Box, Button } from "@mui/material";

import { FirstStep } from "../types";

export default function UserDetails({ nextStep }: FirstStep) {
  function stepForward() {
    nextStep();
  }

  return (
    <>
      <div>UserDetails</div>
      <Box display="flex" justifyContent="flex-end">
        <Button size="small" variant="contained" onClick={stepForward}>
          Next Step
        </Button>
      </Box>
    </>
  );
}
