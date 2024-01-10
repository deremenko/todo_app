import React, { Component } from 'react';
import Item from '../Item';
import './styles.css';

class List extends Component {
  render() {
    return (
      <div className='section-task-list'>
        {this.props.tasks.map((item) => (
          <Item key={item.id} text = {item.text} checked = {item.completed} deletTask = {this.props.deletTask} changeTaskText = {this.props.changeTaskText} idTask = {item.id} />
        ))}
      </div>
    );
  }
}

export default List;
