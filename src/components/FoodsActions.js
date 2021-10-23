import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { ModeEdit } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteFood } from "../redux/slices/foodsSlice";

function FoodsActions(props) {
  const dispatch = useDispatch();
  return (
    <Box>
      <IconButton
        aria-label="delete"
        color="primary"
        size="small"
        sx={{ mr: 2 }}
        onClick={() => dispatch(deleteFood(props.row.original.id))}
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        aria-label="edit"
        color="primary"
        size="small"
        onClick={() => props.setEditModelIsOpen(true)}
      >
        <ModeEdit />
      </IconButton>
    </Box>
  );
}

export default FoodsActions;
