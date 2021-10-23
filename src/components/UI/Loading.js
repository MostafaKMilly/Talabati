import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Loading(props) {
  return (
    <Box
      sx={{
        textAlign: "center",
        position: "absolute",
        top: "50%",
        right: "49%",
      }}
    >
      <CircularProgress sx={{ color: "#911f27" }} fontSize="large" />
    </Box>
  );
}

export default Loading;
