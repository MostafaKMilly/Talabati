import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import { styled, Box } from "@mui/system";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CustomTextField from "./CustomTextField";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

function CustomDialog({ open, setOpen }) {
  const [categoryName, setCategoryName] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName?.length) {
      alert(categoryName);
      handleClose();
    }
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        scroll="paper"
        sx={{
          top: {
            xs: 0,
            md: "-18%",
          },
          "& .MuiPaper-root": {
            width: "100%",
          },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          اضافة صنف
        </BootstrapDialogTitle>
        <Box component="form" onSubmit={handleSubmit}>
          <DialogContent dividers>
            <Box textAlign="center" mb={1} mt={2}>
              <Icon color="primary" sx={{ fontSize: "80px" }}>
                restaurant
              </Icon>
            </Box>
            <Box p={3}>
              <CustomTextField
                label="الاسم"
                variant="standard"
                size="large"
                required={true}
                value={categoryName}
                fullWidth
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button autoFocus type="submit">
              حفظ التغييرات
            </Button>
          </DialogActions>
        </Box>
      </BootstrapDialog>
    </div>
  );
}

export default CustomDialog;
