import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { save } from "../features/taskList/taskListSlice";

export default function TaskDialog({ taskDialog, setTaskDialog }) {
  const taskList = useSelector((state) => state.taskList.value);
  const dispatch = useDispatch();
  const id = uuidv4();
  const date = new Date().toISOString().slice(0, 10);
  const handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target[0].value;

    dispatch(
      save({
        name: name,
        date: date,
        id: id,
        done: false,
      })
    );

    setTaskDialog(false);
  };
  return (
    <div>
      <Dialog open={taskDialog}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Enter task name</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Task name"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setTaskDialog(false);
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Create task</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
