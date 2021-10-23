import { Fastfood } from "@mui/icons-material";
import {
  AppBar,
  Container,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router";

function Layout(props) {
  const history = useHistory();

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
            <IconButton onClick={() => history.push("/categories")}>
              <Fastfood color="primary" fontSize="large" />
            </IconButton>
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
