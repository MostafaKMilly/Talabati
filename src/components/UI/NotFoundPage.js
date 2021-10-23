import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function NotFoundPage(props) {
  return (
    <Box
      sx={{
        textAlign: "center",
        position: "absolute",
        top: "50%",
        right: "49%",
        marginRight: "-147px",
        mt: props.marginTop || 0,
        visibility: {
          xs: "hidden",
          md: "visible",
        },
      }}
    >
      <Typography variant="h5" color="primary" sx={{ mt: 4 }}>
        {props.message}
      </Typography>
    </Box>
  );
}

export default NotFoundPage;
