import React, { Component } from 'react';
import List from '../List/index.jsx';
import crossIcon from '../../svg/Cross.svg';
import './styles.css';
const { initialTodoTask } = require('../../const/const.js');


class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: initialTodoTask 
    };
  }
  
  componentDidMount() {
    localStorage.setItem('tasks', JSON.stringify(initialTodoTask));    
  }

  render() {
    return (
      <div className='todo'>
        <List tasks = {this.state.tasks} crossIcon = {crossIcon} />
      </div>
    );
  }
}

export default Todo;