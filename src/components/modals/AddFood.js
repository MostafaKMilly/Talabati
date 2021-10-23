import React from "react";
import { Control } from "react-redux-form";
import { addFoods } from "../../redux/slices/foodsSlice";
import DialogLayout from "../layout/DialogLayout";
import CustomTextField from "../UI/CustomTextField";

const NameTextField = (props) => {
  return (
    <CustomTextField
      label="الاسم"
      variant="standard"
      size="large"
      required={true}
      fullWidth
      onChange={props.onChange}
    />
  );
};

const PriceTextField = (props) => {
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

function AddFood(props) {
  return (
    <DialogLayout
      open={props.open}
      setOpen={props.setOpen}
      handleActitvty={addFoods}
      categoryId={props.categoryId}
      iconName={"lunch_dining"}
      activityName={"اضافة طعام"}
    >
      <Control model=".name" name="name" component={NameTextField} />
      <Control model=".price" name="price" component={PriceTextField} />
    </DialogLayout>
  );
}

export default AddFood;
