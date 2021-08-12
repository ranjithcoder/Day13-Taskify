import React from 'react'
import "./AddTask.css"
const AddTask = () => {
    return (
        <form className="input">
            <input type="input" 
            className="input__box"
            placeholder="enter a task"
            />
            <button type="submit" className="input__submit">
                Go
            </button>
        </form>
    )
}

export default AddTask
