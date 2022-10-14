import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useSelector, useDispatch } from "react-redux";
import {
  save,
  clear,
  doneDelete,
  update,
} from "../features/taskList/taskListSlice";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TopAppBar({ theme, setTheme }) {
  const taskList = useSelector((state) => state.taskList.value);
  const dispatch = useDispatch();
  const [filteredList, setFilteredList] = useState([]);
  const id = uuidv4();

  function randomString(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const handleDeleteDoneClick = () => {
    let newArray = taskList.filter((current) => {
      return current.done === false;
    });
    dispatch(doneDelete(newArray));
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React To-do App
          </Typography>
          {theme === "dark" ? (
            <IconButton
              onClick={() => {
                setTheme("light");
              }}
            >
              <Brightness7Icon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setTheme("dark");
              }}
            >
              <Brightness4Icon />
            </IconButton>
          )}

          <Button
            onClick={() => {
              handleDeleteDoneClick();
            }}
            color="inherit"
          >
            Delete Done
          </Button>
          <Button
            onClick={() => {
              dispatch(clear());
            }}
            color="inherit"
          >
            Delete all
          </Button>
          <Button
            onClick={() => {
              dispatch(
                save({
                  name: randomString(10),
                  id: id,
                  done: false,
                })
              );
              console.log(taskList);
            }}
            color="inherit"
          >
            Create task
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
