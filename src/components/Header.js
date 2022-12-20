import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../Redux/taskSlice/taskSlice'


const Header = () => {
    const [newTask, setnewTask] = useState({title:""})
    const dispatch=useDispatch()
  return (
    <div>
        <input value={newTask.title} type="text" placeholder='ToDo Content' onChange={(e)=>setnewTask({...newTask,title:e.target.value})}/>
        <button onClick={()=>{dispatch(addTask(({...newTask,isDone:false,id:Math.floor(Math.random()*100000000)})))
        setnewTask({title:""})
    }}>Add</button>
    </div>
  )
}

export default Header