import React from "react";
import "./TasksList.css";
import { TaskType } from "../models/Task";
import { Task } from "./Task";

type TasksListProps = {
  tasks: TaskType[];
  deleteTask: (taskId: number) => void;
};

export const TasksList = ({ tasks, deleteTask }: TasksListProps) => {
  return (
    <div className="list-container">
      {tasks.map((task) => (
        <Task task={task} deleteTask={deleteTask} key={task.id} />
      ))}
    </div>
  );
};