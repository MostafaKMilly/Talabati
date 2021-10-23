import { Add } from "@mui/icons-material";
import { Button, Container, Grid, Icon } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectAllCategories } from "../redux/slices/categoriesSlice";
import AddCategory from "./modals/AddCategory";

const CustomButton = styled(Button)(({ theme }) => ({
  width: 170,
  height: 170,
  display: "inline-table",
  fontSize: 20,
}));

function Categories(props) {
  const categories = useSelector(selectAllCategories);
  const history = useHistory();

  const [modelIsOpen, setModelIsOpen] = useState(false);

  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 3 }}>
        <Grid container justifyContent="center" rowSpacing={3} mb={3}>
          {categories.map((category) => (
            <Grid item xs={12} md={5} textAlign="center" key={category.id}>
              <CustomButton
                variant="contained"
                onClick={() => history.push(`/categoris/${category.id}`)}
              >
                <Box>
                  <Icon fontSize="large">restaurant</Icon>
                </Box>
                {category.name}
              </CustomButton>
            </Grid>
          ))}
          <Grid item xs={12} md={5} textAlign="center">
            <CustomButton
              variant="contained"
              color="secondary"
              sx={{ color: "black" }}
              onClick={() => setModelIsOpen(true)}
            >
              <Box>
                <Add />
              </Box>
              اضافة صنف
            </CustomButton>
          </Grid>
        </Grid>
      </Container>
      <AddCategory open={modelIsOpen} setOpen={setModelIsOpen} />
    </>
  );
}

export default Categories;
