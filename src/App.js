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

  generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
  
  componentDidMount() {
// Тестовый фрагмент для тестирования пока, пока не готова функция добавления новых тасков 
    const initialTodoTask = [
      { id: this.generateUniqueId(), text: 'Задача 1', completed: false },
      { id: this.generateUniqueId(), text: 'Задача 2', completed: true },
      { id: this.generateUniqueId(), text: 'Задача 3', completed: false },
      { id: this.generateUniqueId(), text: 'Задача 4', completed: true },
      { id: this.generateUniqueId(), text: 'Задача 5', completed: true },
      { id: this.generateUniqueId(), text: 'Задача 6', completed: true },
      { id: this.generateUniqueId(), text: 'Задача 7', completed: true },
    ];
    console.log(initialTodoTask);
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

