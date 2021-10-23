import { List, ListItem } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Control } from "react-redux-form";
import { addFoods } from "../../redux/slices/foodsSlice";
import { selectAllOreders } from "../../redux/slices/orderSlice";
import DialogLayout from "../layout/DialogLayout";
import CustomTextField from "../UI/CustomTextField";

const orederTextField = (props) => {
  return (
    <CustomTextField
      label="السعر"
      variant="standard"
      size="large"
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
      handleActitvty={addFoods}
      iconName={"lunch_dining"}
      activityName={"الطلبات"}
    >
      <List>
        {oreders.map((order) => (
          <ListItem>{order.price}</ListItem>
        ))}
      </List>
    </DialogLayout>
  );
}

export default ConfirmOrder;
