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
    this.setState({ showError : false });
    const tasks = this.state.tasks;
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

    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.setState({ tasks: tasks, text: '' });
  };

  handleChange = (event, key) => {
    this.setState({[key]: event.target.value });
  };

  stopChangeMode = () => {
    this.setState({ isEditingTask: false, editingTaskId: null });
  };

  onClickEditButton = (id, initialText) => {
    this.setState({ isEditingTask: true, editingTaskId: id, editedText: initialText  });
  };

  onInputKeyDownHandler = (event, id) => {
    switch (event.key) {
      case "Escape": 
        this.setState({ isEditingTask: false });
        break;
      case "Enter": 
        this.changeTaskText(this.state.editedText, id);
        this.setState({ isEditingTask: false });
        break;
    }
  };

  changeTaskText = (newText, idTask) => {
    const validateText = validateInput(newText);
    if (!validateText) {
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

  componentDidMount() {
    localStorage.setItem('tasks', JSON.stringify(initialTodoTask));
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
        {this.state.showError && (
          <ErrorMessage message={this.state.textError} />
        )}
        <TaskList 
          tasks={this.state.tasks} 
          handleChange={this.handleChange}  
          stopChangeMode={this.stopChangeMode} 
          onClickEditButton={this.onClickEditButton}
          onInputKeyDownHandler={this.onInputKeyDownHandler}
          isEditingTask={this.state.isEditingTask}
          editingTaskId={this.state.editingTaskId}
          editedText={this.state.editedText}
        />
      </div>
    );
  }
}

export default Todo;