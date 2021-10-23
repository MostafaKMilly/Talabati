import { Fastfood } from "@mui/icons-material";
import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Layout(props) {
  return (
    <Box>
      <CssBaseline />
      <AppBar color="default" position="fixed" elevation={0}>
        <Toolbar
          component={Container}
          maxWidth="lg"
          sx={{ justifyContent: "center" }}
        >
          <Box display="contents">
            <Typography variant="h4" fontWeight="500" mr={1}>
              طلباتي
            </Typography>
            <Fastfood color="primary" fontSize="large" />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Toolbar></Toolbar>
        <Container maxWidth="lg">{props.children}</Container>
      </Box>
    </Box>
  );
}

export default Layout;
