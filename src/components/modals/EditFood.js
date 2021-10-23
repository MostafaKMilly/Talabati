import React from "react";
import { Control } from "react-redux-form";
import { addFoods, editFood } from "../../redux/slices/foodsSlice";
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

function EditFood(props) {
  return (
    <DialogLayout
      open={props.open}
      setOpen={props.setOpen}
      handleActitvty={editFood}
      categoryId={props.categoryId}
      iconName={"lunch_dining"}
      activityName={"تعديل طعام"}
    >
      <Control model=".name" name="name" component={NameTextField} />
      <Control model=".price" name="price" component={PriceTextField} />
    </DialogLayout>
  );
}

export default EditFood;
