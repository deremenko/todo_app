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
  
  componentDidMount() {
    localStorage.setItem("tasks", JSON.stringify(initialTodoTask));    
  }

  render() {
    return (
      <div className="todo">
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default Todo;