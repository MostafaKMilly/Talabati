import { List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { Control, LocalForm } from "react-redux-form";
import { addFoods } from "../../redux/slices/foodsSlice";
import { selectAllOreders, selectFoods } from "../../redux/slices/orderSlice";
import DialogLayout from "../layout/DialogLayout";
import CustomTextField from "../UI/CustomTextField";

const orederTextField = (props) => {
  return (
    <CustomTextField
      label={props.foodName}
      variant="standard"
      size="medium"
      required={true}
      fullWidth
      onChange={props.onChange}
    />
  );
};

function ConfirmOrder(props) {
  const oreders = useSelector(selectAllOreders);
  const selectedFoods = useSelector((state) => state.orders.selectedFoods);
  return (
    <DialogLayout
      open={props.open}
      setOpen={props.setOpen}
      handleActitvty={null}
      iconName={"lunch_dining"}
      activityName={"الطلبات"}
    >
      {selectFoods.map((food) => (
        <Box display="flex" component={LocalForm}>
          <Control
            model=".name"
            name="name"
            component={orederTextField}
            mapProps={{ foodName: food.name }}
          />
        </Box>
      ))}
    </DialogLayout>
  );
}

export default ConfirmOrder;
