import {useState} from "react";
import React from "react";
import styles from './todoform.module.css'

const TodoForm = () => {
    const [tasklist , setTasklist] = useState([])
    const [NewTask , setNewTask] = useState('')

    const HandleAddTAsk = () => {
        if (NewTask.trim() !== '') {
            setTasklist([...tasklist ,NewTask])
            setNewTask('')
        }
    }

    const HandleInputChange = (e) => {
        setNewTask(e.target.value)
    }


    return (
        <div className={styles.todoApp}>
            <h1>TodoList</h1>
            <div className={styles.form}>
                <input type="text" value={NewTask} onChange={HandleInputChange} className={styles.input}/>
                <button onClick={HandleAddTAsk} className={`${styles.validationBtn} ${styles.validationBtn2}`}>Add task</button>
            </div>
            <ul>
                {tasklist.map((task , index) => (
                    <li key={index} className={styles.li}>task: {task}</li>
                ))}
            </ul>
        </div>
    )

}
export default TodoForm;