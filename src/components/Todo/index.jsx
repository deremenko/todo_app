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
      isEditingTask: false,
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
      this.setState({ showError: true, textError: "Пожалуйста, введите корректные данные." });
      return; 
    }

    tasks.push({
      id: generateUniqueId(),
      text: validateText,
      completed: false,
    });

    tasks = sortArray(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.setState({ tasks: tasks, text: '' });
  };

  changeTaskText = (newText, idTask) => {
    this.setState({ showError : false });
    const validateText = validateInput(newText);
    if (!validateText) {
      this.setState({ showError: true, textError: "Пожалуйста, введите корректные данные." });
      return;
    };

    let tasks = [...this.state.tasks];
    const indexTask = tasks.findIndex(item => item.id === idTask);

    tasks[indexTask] = {
      ...tasks[indexTask], 
      text: validateText, 
    };

    localStorage.setItem('tasks', JSON.stringify(tasks)); 
    this.setState({ tasks });
  }

  deleteTask = (idTask) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => {
      return task.id !== idTask;
    })

    localStorage.setItem('tasks', JSON.stringify(tasks)); 
    this.setState({ tasks });
  }

  deleteAllTask = (event) => {
    event.preventDefault();
    let tasks = [...[]];
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
    this.setState({ tasks });
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

  stopChangeMode = () => {
    this.setState({ isEditingTask: false, editingTaskId: null });
  };

  onClickEditButton = (id, initialText) => {
    this.setState({ isEditingTask: true, editingTaskId: id, editedText: initialText, showError : false  });
  };

  onClickEditConfir = (id) => {
    this.changeTaskText(this.state.editedText, id);
    this.setState({ isEditingTask: false });
  };

  onClickEditCancel = () => {
    this.setState({ isEditingTask: false });
  };

  onInputKeyDownHandler = (event, id) => {
    switch (event.key) {
      case "Escape": 
        this.setState({ isEditingTask: false });
        break;
      case "Enter": 
        this.changeTaskText(this.state.editedText, id);
        this.setState({ isEditingTask: this.state.showError });
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
          deleteAllTask={this.deleteAllTask} 
          text={this.state.text}
          editingTaskId={this.state.editingTaskId}
        />
        {this.state.showError && !this.state.editingTaskId && (
          <ErrorMessage message={this.state.textError} />
        )}
        <TaskList 
          tasks={this.state.tasks} 
          deleteTask={this.deleteTask}
          handleChange={this.handleChange} 
          handleChangeCheckbox={this.handleChangeCheckbox} 
          stopChangeMode={this.stopChangeMode} 
          onClickEditButton={this.onClickEditButton}
          onInputKeyDownHandler={this.onInputKeyDownHandler}
          onClickEditConfir={this.onClickEditConfir}
          onClickEditCancel={this.onClickEditCancel}
          isEditingTask={this.state.isEditingTask}
          editingTaskId={this.state.editingTaskId}
          editedText={this.state.editedText}
          showError={this.state.showError}
          textError={this.state.textError}
        />
      </div>
    );
  }
}

export default Todo;