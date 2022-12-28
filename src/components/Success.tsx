import { Box, Typography } from "@mui/material";
import { PeopleAlt } from "@mui/icons-material";

export default function Success() {
  return (
    <Box sx={{ textAlign: "center", marginBlock: "4rem" }}>
      <Typography variant="h4" component="h2" sx={{ marginBlock: "1rem" }}>
        Thank you for signing up!
      </Typography>
      <Typography sx={{ opacity: "0.75" }}>
        We hope you have an amazing experience!
      </Typography>
      <PeopleAlt sx={{ fontSize: "8rem", opacity: 0.5 }} />
    </Box>
  );
}
