import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import FloatingActionButtons from "./components/FloatingActionButtons";
import Grid from "@mui/material/Grid";
import TaskCard from "./components/TaskCard";
import TaskDialog from "./components/TaskDialog";
import TopAppBar from "./components/TopAppBar";
import FilterDialog from "./components/FilterDialog";

function App() {
  const taskList = useSelector((state) => state.taskList.value);

  const [theme, setTheme] = useState("light");
  const [taskDialog, setTaskDialog] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [filterDialog, setFilterDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);

  const [filteredTaskList, setFilteredTaskList] = useState([]);

  const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#0057b7",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const displayFilteredTaskCards = () => {
    return filteredTaskList.map((task) => (
      <TaskCard
        task={task}
        key={task.id}
        editDialog={editDialog}
        setEditDialog={setEditDialog}
      />
    ));
  };

  useEffect(() => {
    console.log(filterText, "filter text");
  }, [filterText]);

  useEffect(() => {
    const filtered = taskList.filter((task) => {
      return task.name.toLowerCase().includes(filterText.toLowerCase());
    });
    setFilteredTaskList(filtered);
  }, [filterText, taskList]);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minWidth: 1 }} key="1">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <TopAppBar theme={theme} setTheme={setTheme} />
          </Grid>
          {displayFilteredTaskCards()}
        </Grid>
      </Box>
      <FloatingActionButtons
        taskDialog={taskDialog}
        setTaskDialog={setTaskDialog}
        filterDialog={filterDialog}
        setFilterDialog={setFilterDialog}
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <TaskDialog taskDialog={taskDialog} setTaskDialog={setTaskDialog} />
      <FilterDialog
        filterDialog={filterDialog}
        setFilterDialog={setFilterDialog}
        filterText={filterText}
        setFilterText={setFilterText}
      />
    </ThemeProvider>
  );
}

export default App;
