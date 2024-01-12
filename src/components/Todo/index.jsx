import React, { Component } from 'react';
import TaskList from '../TaskList';
import AddTaskForm from '../AddTaskForm';
import { initialTodoTask } from '../../constants.js';
import { generateUniqueId } from '../../helpers/generateUniqueId.js';
import './styles.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: initialTodoTask,
      text : '',
      checked: false
    };
  }

  addTaskHandler = (textTask) => {
    const tasks = this.state.tasks;
    
    tasks.push({
      id: generateUniqueId(),
      text: textTask,
      completed: false,
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.setState({ tasks });
  }
  
  componentDidMount() {
    localStorage.setItem("tasks", JSON.stringify(initialTodoTask));    
  }

  render() {
    return (
      <div className="todo">
        <AddTaskForm addTaskHandler={this.addTaskHandler}/>
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default Todo;