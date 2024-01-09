import React, { Component } from 'react';
import TodoItem from '../TodoItem';
import './styles.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.deletTask = this.deletTask.bind(this);
    this.state = {
      todoItems: [],
      nameLocalArray: ''
    };
  }

  deletTask (dataOfChikdComponents) {
    let processedArray = this.state.todoItems;
    processedArray = processedArray.filter((item) => {
      return item.id !== dataOfChikdComponents;
    })

    localStorage.setItem('todoTask', JSON.stringify(processedArray)); 
    
    const todoArray = localStorage.getItem(this.state.nameLocalArray); 
    if (todoArray) {
      const todoItems = JSON.parse(todoArray);
      this.setState({ todoItems })
    }
  }

  componentDidMount() {
    const nameTodoArray = this.props.arrayName;
    const todoArray = localStorage.getItem(nameTodoArray); 

    if (todoArray) {
      const todoItems = JSON.parse(todoArray);
      this.setState({ todoItems: todoItems, nameLocalArray: nameTodoArray})
    }

  }

  render() {
    const { todoItems } = this.state

    return (
      <div className='section-task-list'>
        {todoItems.map((item) => (
          <TodoItem text = {item.text} checked = {item.completed} actionClick = {this.deletTask} idTask = {item.id} />
        ))}
      </div>
    );
  }
}

export default TodoList;
