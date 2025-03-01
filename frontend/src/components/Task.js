import React from 'react'
import { FaCheckDouble, FaEdit, FaTrashAlt } from 'react-icons/fa'

const Task = ({task,index,deleteTask,getSingleTask,setCompleteTask,markCompletedTask}) => {
  return (
    <div className={ task.completed ? 'task completed' : 'task'}>
       <p>
        <b>{index + 1}.</b>{task.name}
       </p>
       <div className="task-icons">
        <FaCheckDouble color='green' onClick={()=>setCompleteTask(task)}/>
        <FaEdit color='purple' onClick={()=>getSingleTask(task)}/>
        <FaTrashAlt color='red' onClick={()=>deleteTask(task._id)}/>
       </div>
    </div>
  )
}

export default Task
