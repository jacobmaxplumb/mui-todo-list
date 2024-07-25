import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";

export const TodoForm = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodosContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (shouldAdd) => {
    if (shouldAdd) {
        addTodo(text);
        setText('');
    }
    setOpen(false);
  };

  return (
    <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
      <TextField
        onChange={(e) => setText(e.target.value)}
        value={text}
        label="Todo Item"
        variant="outlined"
        size="small"
        sx={{ mr: 1 }}
      />{" "}
      {/* Adds margin to the right of the text field */}
      <Button
        onClick={handleClickOpen}
        variant="outlined"
        size="medium"
        sx={{ height: "40px" }}
      >
        Add
      </Button>
      <Dialog
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to add this item"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            It looks like you are trying to add the item {text}. Are you sure
            you want to do this, make sure it doesn't already exist
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>No</Button>
          <Button onClick={() => handleClose(true)} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
