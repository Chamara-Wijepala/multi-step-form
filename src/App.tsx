import { useState } from "react";
import { CssBaseline, Box, Container, Paper } from "@mui/material";
import UserDetails from "./components/UserDetails";
import AccountDetails from "./components/AccountDetails";
import Overview from "./components/Overview";
import Success from "./components/Success";

import bgSmall from "./assets/images/bg-sm.jpg";
import bgMedium from "./assets/images/bg-md.jpg";
import bgLarge from "./assets/images/bg-lg.jpg";

export default function App() {
  const [step, setStep] = useState(0);

  function nextStep() {
    setStep(step + 1);
  }

  function previousStep() {
    setStep(step - 1);
  }

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          backgroundImage: {
            sm: `url(${bgSmall})`,
            lg: `url(${bgMedium})`,
            xl: `url(${bgLarge})`,
          },
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container
          sx={{
            maxWidth: { xs: "40rem" },
            minHeight: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              minWidth: "100%",
              padding: {
                xs: "1rem",
                lg: "1.5rem",
              },
            }}
          >
            <form noValidate autoComplete="off">
              {step === 0 && <UserDetails nextStep={nextStep} />}
              {step === 1 && (
                <AccountDetails
                  nextStep={nextStep}
                  previousStep={previousStep}
                />
              )}
              {step === 2 && (
                <Overview nextStep={nextStep} previousStep={previousStep} />
              )}
              {step === 3 && <Success />}
            </form>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
