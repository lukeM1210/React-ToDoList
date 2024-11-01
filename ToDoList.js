import React, { useState } from 'react'
import './ToDoListStyle.css';

function ToDoList(){

  // State variables for managing tasks
  const [tasks, setTasks] = useState([]) // Holds the array of tasks
  const [newTask, setNewTask] = useState(""); // Holds the current input value for a new task 

  // Function to handle input changes in the text box
  // Parameter: event - the event triggered when text is entered
  function handleInputChange(event){
    setNewTask(event.target.value);
  }

  // Function to add a new task to the list
  function addTask(){

    // Check if the input is not empty
    if(newTask.trim() !== ""){
      setTasks(t => [...t, newTask]); // Add new task to tasks array
      setNewTask(""); // Clear input box after adding the task
    }
    
  }

  // Function to delete a task from the list
  // Parameter: index - the position of the task to delete
  function deleteTask(index){

    const updatedTasks = tasks.filter((element, i) => i !== index); // Filter out the task at the given index
    setTasks(updatedTasks); // Update tasks

  }

  // Function to move a task up in the list
  // Parameter: index - the position of the task to move up
  function moveTaskUp(index){
    // Check that the task isn't already at the top
    if (index > 0) {
      const updatedTasks = [...tasks];
      // Swap the task with one above it
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index - 1];
      updatedTasks[index - 1] = temp;
      setTasks(updatedTasks); // Update tasks
    }
  }

  // Function to move a task down in the list
  // Parameter: index - the position of the task to move down
  function moveTaskDown(index){
    // Check that the task isn't already at the bottom
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      // Swap the task with the one below it
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index + 1];
      updatedTasks[index + 1] = temp;
      setTasks(updatedTasks); // Update tasks
    }
  }

  return(
    <div className="to-do-list">

      <h1>To Do List</h1>

      <div>
        <input
          type="text"
          placeholder='Enter a task...'
          value={newTask}
          onChange={handleInputChange}
        />

        <button className='add-button'
          onClick = {addTask}>
            Add
        </button>

      </div>

      <ol>
        {tasks.map((task, index) =>
          <li key={index}>
            <span className="text">{task}</span>

            {/*Button to delete a task*/}
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            
            {/*Button to move a task up */}
            <button 
            className="move-button" 
            onClick={() => moveTaskUp(index)}>
              ☝️
            </button>

            {/*Button to move a task down */}
            <button 
            className="move-button" 
            onClick={() => moveTaskDown(index)}>
              👇
            </button>

          </li> 
        )}
      </ol>


    </div>
  );

}
export default ToDoList