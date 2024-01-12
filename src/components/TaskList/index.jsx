import React, { Component } from 'react';
import Task from '../Task';
import './styles.css';

class TaskList extends Component {
  render() {
    return (
      <div className="TaskList">
        {this.props.tasks.map((task) => (
          <Task key={task.id} text={task.text} 
           checked={task.completed}/>
        ))}
      </div>
    );
  }
}

export default TaskList;