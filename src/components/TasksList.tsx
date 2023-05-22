import React from "react";

import "./TasksList.css"

import {TaskType} from "../models/Task"
import { Task } from "./Task";

type TasksListProps = {
    tasks : TaskType[];
}

export const TasksList = ({tasks}:TasksListProps) => { 
   return (<div className="list-container">
{
tasks.map(item => (<Task task={item} key={item.id}/>) )
}
    </div>
   );
}
