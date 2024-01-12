import React, { Component } from 'react';
import TaskList from '../TaskList';
import { initialTodoTask } from '../../constants.js';
import { sortTaskArray } from '../../helpers/sortTaskArray.js';
import './styles.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      text : '',
      checked: false
    };
  }
  
  componentDidMount() {
    const tasks = sortTaskArray(initialTodoTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));  
    this.setState({tasks: tasks});  
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