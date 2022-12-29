import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

import { MiddleStep } from "../types";

export default function Overview({
  nextStep,
  previousStep,
  formState,
}: MiddleStep) {
  const [showPassword, setShowPassword] = useState(false);

  const hiddenPassword = formState.password.replace(/./g, "*");

  return (
    <Box display="grid" gap="1.5rem">
      <Box>
        <Typography variant="h4" component="h2" fontWeight={600}>
          Finishing up
        </Typography>
        <Typography paragraph sx={{ opacity: "0.75" }}>
          Please make sure everything looks OK before confirming.
        </Typography>
      </Box>

      <Box>
        <Box>
          <Typography paragraph>
            <Box component="span" fontWeight={600}>
              First Name:
            </Box>{" "}
            {formState.firstName}
          </Typography>

          <Typography paragraph>
            <Box component="span" fontWeight={600}>
              Last Name:
            </Box>{" "}
            {formState.lastName}
          </Typography>

          {formState.gender !== "" && (
            <Typography paragraph>
              <Box component="span" fontWeight={600}>
                Gender:
              </Box>{" "}
              {formState.gender}
            </Typography>
          )}

          <Typography paragraph>
            <Box component="span" fontWeight={600}>
              Email:
            </Box>{" "}
            {formState.email}
          </Typography>

          <Box display="flex" alignItems="center" gap="1.5rem">
            <Typography paragraph marginBottom={0}>
              <Box component="span" fontWeight={600}>
                Password:
              </Box>{" "}
              {showPassword ? formState.password : hiddenPassword}
            </Typography>
            <Button size="small" onClick={() => setShowPassword(!showPassword)}>
              Reveal
            </Button>
          </Box>
        </Box>
      </Box>

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
    </Box>
  );
}
