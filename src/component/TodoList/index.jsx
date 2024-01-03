import React, { Component } from 'react';
import TodoItem from '../TodoItem';
import './styles.css';

class TodoList extends Component {
  

  render() {
    return (
      <div className='section-task-list'>
      <TodoItem textTask = "Тестовый текст для отладки стиля"></TodoItem>
      <TodoItem textTask = "Тестовый текст для отладки стиля"></TodoItem>
      <TodoItem textTask = "Тестовый текст для отладки стиля"></TodoItem>
      <TodoItem textTask = "Тестовый текст для отладки стиля"></TodoItem>
      <TodoItem textTask = "Тестовый текст для отладки стиля"></TodoItem>
      </div>
    );
  }
}

export default TodoList;
