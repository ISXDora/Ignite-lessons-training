import '../../public/global.scss'

export function Task(props){



    return (
    <div id="task" className="checkbox-create">
        <input type="checkbox"></input>
        <input 
        type="text"
        name='task'
        value={props.tasks}
        onChange={(e) => { e.target.value }}></input>
    </div>
    )
}