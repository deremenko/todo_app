import React, { Component } from 'react';
import TodoItem from '../TodoItem';
import './styles.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
    };
  }

  componentDidMount() {
    const  nameTodoArray = this.props.arrayName;
    const todoArray = localStorage.getItem(nameTodoArray); 

    if (todoArray) {
      const todoItems = JSON.parse(todoArray);
      this.setState({ todoItems })
    }

  }
  render() {
    const { todoItems } = this.state;

    return (
      <div className='section-task-list'>
        {todoItems.map((item) => (
          <TodoItem text = {item.text} checked = {item.completed} />
        ))}
      </div>
    );
  }
}

export default TodoList;
