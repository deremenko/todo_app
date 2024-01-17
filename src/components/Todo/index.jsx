import React, { Component } from 'react';
import TaskList from '../TaskList';
import AddTaskForm from '../AddTaskForm';
import ErrorMessage from '../ErrorMessage';
import { initialTodoTask } from '../../constants.js';
import { generateUniqueId } from '../../helpers/generateUniqueId.js';
import { validateInput } from '../../helpers/validateInput.js';
import './styles.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: initialTodoTask,
      text : '',
      checked: false,
      showError : false,
      textError: ''
    };
  }

  addTask = (event) => {
    event.preventDefault();
    this.setState({ showError : false })
    const tasks = this.state.tasks;
    const validateText = validateInput(this.state.text)
    
    if (!validateText) {
      this.setState({ showError: true });
      return; 
    }

    tasks.push({
      id: generateUniqueId(),
      text: validateText,
      completed: false,
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.setState({ tasks: tasks, text: '' });
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  componentDidMount() {
    localStorage.setItem('tasks', JSON.stringify(initialTodoTask));
    this.setState({ textError: "Пожалуйста, введите корректные данные." })
  }

  render() {
    return (
      <div className="todo">
        <AddTaskForm 
          addTask={this.addTask} 
          handleChange={this.handleChange} 
          clearInput={this.state.text}
        />
        {this.state.showError && (
          <ErrorMessage message={this.state.textError} />
        )}
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default Todo;