import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useContext } from "react";
import MainContext from "../../context/MainContext";

const ConfirmDialog = ({ open, handleClose, title, content, onConfirm }) => {
  const { themeMode } = useContext(MainContext);
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: themeMode === "dark" ? "#222b36" : "#FFF",
        },
      }}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="secondary" onClick={handleClose}>{"No"}</Button>
        <Button variant="contained" color="primary" onClick={onConfirm}>{"Yes"}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
