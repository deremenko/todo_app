import React, { Component } from 'react';
import List from '../List/index.jsx';
import crossIcon from '../../svg/Cross.svg';
import './styles.css';
import { initialTodoTask } from '../../constants .js';


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
        <List tasks = {this.state.tasks} Icon = {crossIcon} alt = {"Cross"}/>
      </div>
    );
  }
}

export default Todo;