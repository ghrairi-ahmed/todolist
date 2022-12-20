import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const TaskList = () => {
    const Tasks=useSelector((store)=>store.task)
  return (
    <div>
       {Tasks.map((task,i)=><Task key={i} task={task}/>)}
    </div>
  )
}

export default TaskList