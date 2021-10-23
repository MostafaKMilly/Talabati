import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import NotFoundPage from "./UI/NotFoundPage";
import EnhancedTable from "./UI/EnhancedTable";
import AddFood from "./modals/AddFood";
function FoodsTable(props) {
  if (props.foodsErrMess) {
    return <NotFoundPage message={props.foodsErrMess} />;
  }

  const columns = [
    {
      accessor: "id",
      Header: "Id",
    },
    {
      accessor: "name",
      Header: "Name",
    },
    {
      accessor: "price",
      Header: "Price",
    },
  ];
  return (
    <>
      <Box sx={{ width: "100%", height: "400px" }}>
        <CssBaseline />
        <EnhancedTable
          columns={columns}
          data={props.foods}
          setModelIsOpen={props.setModelIsOpen}
          setEditModelIsOpen={props.setEditModelIsOpen}
          setConfirmOrderIsOpen={props.setConfirmOrderIsOpen}
        />
      </Box>
    </>
  );
}

export default FoodsTable;
