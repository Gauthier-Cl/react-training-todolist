import React from "react";

import "./TasksList.css"

import {TaskType} from "../models/Task"
import { Task } from "./Task";

type TasksListProps = {
    tasks : TaskType[];
    deleteTask: (taskId: number) => void
}

export const TasksList = ({tasks , deleteTask}:TasksListProps) => { 
   return (<div className="list-container">
{
tasks.map(item => (<Task task={item} deleteTask={deleteTask} key={item.id}/>) )
}
    </div>
   );
}
