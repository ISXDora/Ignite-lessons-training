import '../../public/global.scss'
import { Task } from './Task'
import {MdOutlineAddTask} from 'react-icons/md';

export function Header(){
    return (
        <header>
            <h1>Tasks</h1>
            <div>
                <Task/>
                <button><MdOutlineAddTask/></button>
            </div>     
        </header>
    )
}