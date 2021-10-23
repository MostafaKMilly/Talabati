import { Checkbox } from "@mui/material";
import React from "react";

const CustomCheckBox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <Checkbox type="checkbox" ref={resolvedRef} {...rest} />
    </>
  );
});

export default CustomCheckBox;
