import React, { Component } from 'react';
import TodoButton from '../TodoButton';
import './styles.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      text: '',
      id: null,
    };
  }

  componentDidMount() {
    this.setState({checked: this.props.checked, text: this.props.text , id: this.props.idTask},
    () => {
        console.log(this.state.id);
      });
  }
  
  render() {
    return (
      <div className='item-box'>
        <input type='checkbox' checked = {this.state.checked} className='item-box__checkbox'></input>
        <span className='item-box__text-task'>{this.state.text}</span>
        <TodoButton actionClick = {this.props.actionClick} id = {this.props.idTask} />
      </div>
    );
  }
}

export default TodoItem;