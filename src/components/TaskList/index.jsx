import React, { Component } from 'react';
import Task from '../Task';
import EditInput from '../EditInput';
import ErrorMessage from '../ErrorMessage';
import './styles.css';

class TaskList extends Component {
  render() {
    return (
      <div className="taskList">
        {this.props.tasks.map((task,index) => (
          <div key={task.id} className="taskList__block">
            {task.id === this.props.editingTaskId ? (
              <EditInput
                id={task.id}
                editedText={this.props.editedText}
                handleChange={this.props.handleChange} 
                onInputKeyDownHandler={this.props.onInputKeyDownHandler}
                confirmTaskEditing={this.props.confirmTaskEditing}
                cancelTaskEditing={this.props.cancelTaskEditing}
              />
            ) : (
              <Task 
                key={task.id}
                task={task}
                index={index}
                deleteTask={this.props.deleteTask}
                changeTaskText={this.props.changeTaskText}
                handleChange={this.props.handleChange} 
                handleChangeCheckbox={this.props.handleChangeCheckbox}
                launchTaskEditing={this.props.launchTaskEditing}
                onInputKeyDownHandler={this.props.onInputKeyDownHandler}
                editingTaskId={this.props.editingTaskId}
              />
            )}
            {this.props.textError && this.props.editingTaskId === task.id && (
              <ErrorMessage message={this.props.textError} />
            )}
          </div>
        ))}
      </div>
    );
  }
}  

export default TaskList;