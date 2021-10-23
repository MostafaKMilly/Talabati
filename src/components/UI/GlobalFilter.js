import { Box } from "@mui/system";
import React from "react";
import CustomTextField from "./CustomTextField";

function GlobalFilter({ filter, setFilter }) {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          md: "50%",
        },
      }}
    >
      <CustomTextField
        label="بحث"
        variant="standard"
        size="medium"
        fullWidth
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </Box>
  );
}

export default GlobalFilter;
