import React, { Component } from 'react';
import './styles.css';
import List from '../List/index.jsx';
const { initialTodoTask } = require('../../const/const.js');
const { generateUniqueId } = require('../../helpers/script.js');

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: initialTodoTask 
    };
  }
  
  deletTask = (dataOfChildComponents) => {
    let tasks = this.state.tasks;
    tasks = tasks.filter((item) => {
      return item.id !== dataOfChildComponents;
    })

    localStorage.setItem('tasks', JSON.stringify(tasks)); 
    this.setState({ tasks })
  }

  changeTaskText = (newText, idTask) => {
    let tasks = this.state.tasks;
    const index = tasks.findIndex(item => item.id === idTask);

    tasks[index] = {
      ...tasks[index], 
      text: newText, 
    };

    localStorage.setItem('tasks', JSON.stringify(tasks)); 
    console.log(newText, idTask)
    this.setState({ tasks })
  }
  

  changeCheckbox = (newCheckbox, idTask) => {

  }
  
  componentDidMount() {
    localStorage.setItem('tasks', JSON.stringify(initialTodoTask));    
  }

  render() {
    return (
      <div className='todo'>
        <List tasks = {this.state.tasks} deletTask = {this.deletTask} changeTaskText = {this.changeTaskText} changeCheckbox = {this.changeCheckbox} />
      </div>
    );
  }
}

export default Todo;