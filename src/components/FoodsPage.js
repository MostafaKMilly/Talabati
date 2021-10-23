import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { selectAllCategories } from "../redux/slices/categoriesSlice";
import { fetchFoods, selectFoodsByCategory } from "../redux/slices/foodsSlice";
import Loading from "./UI/Loading";
import NotFoundPage from "./UI/NotFoundPage";

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderLeft: `2px solid ${theme.palette.primary.main}`,
}));

function Foods(props) {
  const foods = useSelector(selectFoodsByCategory);
  const categories = useSelector(selectAllCategories);
  const foodsIsLoading = useSelector((state) => state.foods.isLoading);
  const foodsErrMess = useSelector((state) => state.foods.errMess);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoods(props.category.id));
  }, []);

  const categorieslist = categories.map((category) => ({
    ...category,
    link: `/categoris/${category.id}`,
  }));

  const foodsList = !foodsErrMess ? (
    foods.map((food) => (
      <List item key={food.key}>
        <ListItemText>{food.name}</ListItemText>
      </List>
    ))
  ) : (
    <NotFoundPage message={foodsErrMess} marginTop={7} />
  );

  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <Grid container rowSpacing={4} columnSpacing={4}>
        <Grid item xs={12} md={3}>
          <List>
            {categorieslist.map((categoryItem) => (
              <ListItem>
                <CustomListItemButton
                  dense
                  onClick={() => {
                    history.push(categoryItem.link);
                    dispatch(fetchFoods(categoryItem.id));
                  }}
                  sx={{
                    backgroundColor:
                      categoryItem.id === props.category.id
                        ? "#e6a54326"
                        : "none",
                  }}
                >
                  <ListItemText>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      fontWeight="500"
                    >
                      {categoryItem.name}
                    </Typography>
                  </ListItemText>
                </CustomListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={9}>
          {foodsIsLoading ? <Loading /> : <List>{foodsList}</List>}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Foods;
