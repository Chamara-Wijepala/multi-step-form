import { CssBaseline, Box } from "@mui/material";

import bgSmall from "./assets/images/bg-sm.jpg";
import bgMedium from "./assets/images/bg-md.jpg";
import bgLarge from "./assets/images/bg-lg.jpg";

export default function App() {
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
        <h1>Hello, World!</h1>
      </Box>
    </>
  );
}
