import React, { Component } from 'react';
import TaskList from '../TaskList';
import { initialTodoTask } from '../../constants.js';
import './styles.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: initialTodoTask,
      text : '',
      checked: false
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

  
  componentDidMount() {
    localStorage.setItem("tasks", JSON.stringify(initialTodoTask));    
  }

  render() {
    return (
      <div className="todo">
        <TaskList tasks={this.state.tasks} handlerDeleteButton={this.deletTask} />
      </div>
    );
  }
}

export default Todo;