import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector, useDispatch } from "react-redux";
import { done, remove } from "../features/taskList/taskListSlice";
const TaskCardButtons = ({
  task,

  editText,
  setEditText,
  editBox,
  setEditBox,
}) => {
  const taskList = useSelector((state) => state.taskList.value);
  const dispatch = useDispatch();

  const handleDoneClick = () => {
    dispatch(done(task.id));
  };

  const handleDeleteClick = () => {
    dispatch(remove(task.id));
  };

  return (
    <Stack
      direction="row"
      justifyContent={"flex-end"}
      alignItems="center"
      spacing={1}
    >
      <IconButton
        onClick={() => {
          handleDoneClick();
        }}
      >
        <Avatar>
          <DoneIcon
            color={task.done ? "success" : "default"}
            // sx={{ "&:hover": { color: "green" } }}
          />
        </Avatar>
      </IconButton>
      <IconButton
        onClick={() => {
          setEditBox(!editBox);
        }}
      >
        <Avatar>
          <EditIcon sx={{ "&:hover": { color: "yellow" } }} />
        </Avatar>
      </IconButton>
      <IconButton
        onClick={() => {
          handleDeleteClick();
        }}
      >
        <Avatar>
          <DeleteIcon sx={{ "&:hover": { color: "red" } }} />
        </Avatar>
      </IconButton>
    </Stack>
  );
};

export default TaskCardButtons;
