import React from "react";
import { Control } from "react-redux-form";
import { addCategory } from "../../redux/slices/categoriesSlice";
import DialogLayout from "../layout/DialogLayout";
import CustomTextField from "../UI/CustomTextField";

const NameTextField = (props) => {
  console.log(props);
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

function AddCategory(props) {
  return (
    <DialogLayout
      open={props.open}
      setOpen={props.setOpen}
      handleActitvty={addCategory}
      iconName={"restaurant"}
      activityName={"اضافة صنف"}
    >
      <Control model=".name" name="name" component={NameTextField} />
    </DialogLayout>
  );
}

export default AddCategory;
