import React, { Component } from 'react';
import TodoList from './component/TodoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTask: [] 
    };
  }

  componentDidMount() {
// Тестовый фрагмент для тестирования пока, пока не готова функция добавления новых тасков 
    const initialTodoTask = [
      { id: 1, text: 'Задача 1', completed: false },
      { id: 2, text: 'Задача 2', completed: true },
      { id: 3, text: 'Задача 3', completed: false },
      { id: 4, text: 'Задача 4', completed: true },
      { id: 5, text: 'Задача 5', completed: true },
      { id: 6, text: 'Задача 6', completed: true },
      { id: 7, text: 'Задача 7', completed: true },
    ];
// Конец текстового фрагмента
    this.setState({ todoTask: initialTodoTask });
    localStorage.setItem('todoTask', JSON.stringify(initialTodoTask));    
  }
  render() {
    return (
        <TodoList arrayName = "todoTask"></TodoList>
    );
  }
}

export default App;

