import '../../public/global.scss'
import { Task } from './Task'
import {MdOutlineAddTask} from 'react-icons/md';

import {useState, useEffect} from 'react'

export function Header(){

    const [addTask, setAddTask] = useState('')
    const input = document.querySelector('input')

    function addInputTask(){
        setAddTask( input.value)
    }

    useEffect(() =>{
        input.value = ''
    })
    
    return (
        <header className="wrapper">
            <h1>Tasks</h1>
            <div>
                <input
                name="task"
                onChange={ (e) => e.target.value }
                tasks={ addTask }/>
                <button onClick={addInputTask}><MdOutlineAddTask/></button>
            </div>
            <div>
                <Task
                 tasks={ addTask }/>
            </div>
        </header>
    )
}