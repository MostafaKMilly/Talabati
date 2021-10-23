import { List, ListItem } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Control } from "react-redux-form";
import { addFoods } from "../../redux/slices/foodsSlice";
import { selectAllOreders } from "../../redux/slices/orderSlice";
import DialogLayout from "../layout/DialogLayout";
import CustomTextField from "../UI/CustomTextField";

function ConfirmOrder(props) {
  const oreders = useSelector(selectAllOreders);
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
