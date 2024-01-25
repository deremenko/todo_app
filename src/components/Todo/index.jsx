import React, { Component } from 'react';
import TaskList from '../TaskList';
import AddTaskForm from '../AddTaskForm';
import ErrorMessage from '../ErrorMessage';
import { initialTodoTask } from '../../constants.js';
import { generateUniqueId } from '../../helpers/generateUniqueId.js';
import { validateInput } from '../../helpers/validateInput.js';
import { sortArray } from '../../helpers/sortArray.js';
import './styles.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      text : '',
      editedText: '',
      checked: false,
      showError : false,
      editingTaskId: null,
      textError: ''
    };
  }

  addTask = (event) => {
    event.preventDefault();
    this.setState({ showError : false, editingTaskId: null });
    let tasks = this.state.tasks;
    const validateText = validateInput(this.state.text);
    
    if (!validateText) {
      this.setState({ textError: "Пожалуйста, введите корректные данные." });
      return; 
    }

    tasks.push({
      id: generateUniqueId(),
      text: validateText,
      completed: false,
    });

    tasks = sortArray(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.setState({ tasks: tasks, text: '', textError: '' });
  };

  updateTaskText = (newText, idTask) => {
    const validateText = validateInput(newText);
    if (!validateText) {
      this.setState({ textError: "Пожалуйста, введите корректные данные." });
      return;
    };

    let tasks = [...this.state.tasks];
    const indexTask = tasks.findIndex(item => item.id === idTask);

    tasks[indexTask] = {
      ...tasks[indexTask], 
      text: validateText, 
    };

    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.setState({ tasks, editingTaskId: null, textError: '' });
  }

  deleteTask = (idTask) => {
    const tasks = this.state.tasks.filter((task) => {
      return task.id !== idTask;
    })

    localStorage.setItem('tasks', JSON.stringify(tasks)); 
    this.setState({ tasks });
  }

  deleteAllTask = () => {
    localStorage.setItem('tasks', JSON.stringify([])); 
    this.setState({ tasks: [] });
  }

  handleChangeCheckbox = (idTask) => {
    let tasks = [...this.state.tasks];
    const indexTask = tasks.findIndex(item => item.id === idTask);
    tasks[indexTask] = {
      ...tasks[indexTask], 
      completed: !tasks[indexTask].completed, 
    };
    
    tasks = sortArray(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
    this.setState({ tasks });
  };

  handleChange = (event, key) => {
    this.setState({[key]: event.target.value });
  };

  launchTaskEditing = (id, initialText) => {
    this.setState({ editingTaskId: id, editedText: initialText, textError: ''});
  };

  confirmTaskEditing = (id) => {     
    this.updateTaskText(this.state.editedText, id);
  };

  cancelTaskEditing = () => {
    this.setState({ editingTaskId: null });
    this.setState({ textError: '' });
  };

  onInputKeyDownHandler = (event, id) => {
    switch (event.key) {
      case "Escape": 
        this.setState({ editingTaskId: null });
        break;
      case "Enter": 
        this.updateTaskText(this.state.editedText, id);
        break;
    }
  };

  componentDidMount() {
    const tasks = sortArray(initialTodoTask);
    localStorage.setItem('tasks', JSON.stringify(initialTodoTask));
    this.setState({ tasks });  
  }

  render() {
    return (
      <div className="todo">
        <AddTaskForm 
          addTask={this.addTask} 
          handleChange={this.handleChange}
          text={this.state.text}
          editingTaskId={this.state.editingTaskId}
        />
        {this.state.textError && !this.state.editingTaskId && (
          <ErrorMessage message={this.state.textError} />
        )}
        <TaskList 
          tasks={this.state.tasks} 
          deleteTask={this.deleteTask}
          deleteAllTask={this.deleteAllTask} 
          handleChange={this.handleChange} 
          handleChangeCheckbox={this.handleChangeCheckbox} 
          launchTaskEditing={this.launchTaskEditing}
          onInputKeyDownHandler={this.onInputKeyDownHandler}
          confirmTaskEditing={this.confirmTaskEditing}
          cancelTaskEditing={this.cancelTaskEditing}
          editingTaskId={this.state.editingTaskId}
          editedText={this.state.editedText}
          textError={this.state.textError}
        />
      </div>
    );
  }
}

export default Todo;