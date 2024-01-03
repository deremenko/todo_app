import React, { Component } from 'react';
import TodoButton from '../TodoButton';
import './styles.css';

class TodoItem extends Component {

  render() {
    return (
      <div className='item-box'>
        <input type='checkbox' className='item-box__checkbox'></input>
        <span className='item-box__text-task'>{this.props.textTask}</span>
        <TodoButton></TodoButton>
      </div>
    );
  }
}

export default TodoItem;