import React, { Component } from 'react'

class TaskList extends Component 
{
    state = 
    {
        taskList: 
        [
            {
                id: 1,
                task: "To study English"
            },
            {
                id: 2,
                task: "To study React"
            },
            {
                id: 3,
                task: "To wash my car"
            },
            {
                id: 4,
                task: "To wash the bicycle"
            },
            {
                id: 5,
                task: "To submit the React homework"
            }
        ]
    }
    render() 
    {
        return (
            
            <div>        
                <div>
                    <h2>Enter a new task:</h2>
                    
                    <input type = "text" id = "newTask" name = "newTask" ></input>

                    <button className = "buttonStyle" id = "taskButton">Add Task</button>               
                </div>   
                
                <div>
                    {this.state.taskList.map(newTask => 
                    (
                        <li className = "listStyle" key = {newTask.id}>
                            <input type = "checkbox"></input> {newTask.task}
                        </li>
                    ))}    
                </div>      
                            
            </div>
        )
    }
}

export default TaskList
