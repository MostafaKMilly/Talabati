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
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { selectAllCategories } from "../redux/slices/categoriesSlice";
import { fetchFoods, selectFoodsByCategory } from "../redux/slices/foodsSlice";
import FoodsTable from "./FoodsTable";
import AddFood from "./modals/AddFood";
import EditFood from "./modals/EditFood";
import Loading from "./UI/Loading";

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderLeft: `2px solid ${theme.palette.primary.main}`,
}));

function Foods(props) {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [editModeIsOpen, setEditModelIsOpen] = useState(false);
  const [orderModelIsOpen, orderSetModelIsOpen] = useState(false);
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

  if (foodsIsLoading) {
    return <Loading />;
  }
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
        <Grid item xs={12} md={9} mt={1}>
          <Typography variant="h5" color="textSecondary" fontWeight={600}>
            {props.category.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            قائمة الاطعمة
          </Typography>
          <FoodsTable
            foods={foods}
            foodsErrMess={foodsErrMess}
            setModelIsOpen={setModelIsOpen}
            setEditModelIsOpen={setEditModelIsOpen}
          />
          <AddFood
            open={modelIsOpen}
            setOpen={setModelIsOpen}
            categoryId={props.category.id}
          />
          <EditFood
            open={editModeIsOpen}
            setOpen={setEditModelIsOpen}
            categoryId={props.category.id}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Foods;
