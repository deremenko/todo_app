import React, { Component } from 'react';
import TodoButton from '../TodoButton';
import './styles.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      text: '',
    };
  }

  componentDidMount() {
    const checkedNewTask = this.props.checked;
    const textNewTask = this.props.text;
    this.setState({checked: checkedNewTask, text: textNewTask});
  }
  render() {
    return (
      <div className='item-box'>
        <input type='checkbox' checked = {this.state.checked} className='item-box__checkbox'></input>
        <span className='item-box__text-task'>{this.state.text}</span>
        <TodoButton></TodoButton>
      </div>
    );
  }
}

export default TodoItem;