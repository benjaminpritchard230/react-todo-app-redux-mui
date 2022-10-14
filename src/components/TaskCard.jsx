import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TaskCardButtons from "./TaskCardButtons";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { edit } from "../features/taskList/taskListSlice";

export default function TaskCard({ task, editDialog, setEditDialog }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const style = {
    justifyContent: "right",
    alignItems: "end",
  };

  const [editBox, setEditBox] = useState(false);
  const taskList = useSelector((state) => state.taskList.value);
  const dispatch = useDispatch();

  const [editText, setEditText] = useState("");

  useEffect(() => {
    console.log(editText);
    console.log(task.name);
  }, [editText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTitle = e.target[0].value;
    dispatch(edit({ id: task.id, text: newTitle }));
    setEditBox(false);
  };

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Item sx={{ m: 0.5 }}>
        <Card sx={{ minWidth: 275, minHeight: 225 }}>
          <CardContent sx={{ minHeight: 150 }}>
            {editBox ? "" : <Typography variant={"h5"}>{task.name}</Typography>}
            <Typography variant={"h5"}>{task.date}</Typography>
            {editBox ? (
              <form onSubmit={handleSubmit}>
                <TextField
                  autoFocus
                  margin="dense"
                  id={task.id}
                  label="Edit task name"
                  type="text"
                  fullWidth
                  variant="filled"
                  placeholder={task.name}
                />

                <Button type="submit">Edit name</Button>
              </form>
            ) : (
              ""
            )}
          </CardContent>

          <CardActions style={style}>
            {" "}
            <TaskCardButtons
              key={task.id}
              task={task}
              editDialog={editDialog}
              setEditDialog={setEditDialog}
              editText={editText}
              setEditText={setEditText}
              editBox={editBox}
              setEditBox={setEditBox}
            />
          </CardActions>
        </Card>
      </Item>
    </Grid>
  );
}
