import React, { useState } from "react";
import "./App.css";
import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { Header } from "./components/Header";
import { data } from "./data/tasks";
import {TaskType} from "./models/Task"
import { TasksList } from "./components/TasksList";



const App = () => {
  const title = "To do list";
  const [tasks,  setTasks] = useState(data);
  const taskToEdit: any = null;
   const [showModal, setState] = React.useState(false);
  const updateTaskState = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();
    console.error("I need to be implemented");
  };

  const editTask = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const deleteTask = (taskId: number) => {
    console.error("I need to be implemented");
  };

  return (
    <div className="main">
      <Header title = {title}/>
      {/* <Task task = {tasks[0]}/> */}
      <TasksList tasks={tasks}/>
      
      <button
        className="add-task-btn"
   onClick={() =>setShowModal(true)}
         
      >
        +
      </button>
      
      <TaskFormModal
        show={showModal}
        handleClose={() =>
         setShowModal(false)
        }
        addOrEditTask={addOrEditTask}
        initialValues={
          taskToEdit != null
            ? {
                id: taskToEdit.id,
                title: taskToEdit.title,
                description: taskToEdit.description,
              }
            : undefined
        }
      />
    </div>
  );
};

export default App;
