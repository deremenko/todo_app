import React, { Component } from 'react';
import Task from '../Task';
import './styles.css';

class TaskList extends Component {
  render() {
    return (
      <div className="taskList">
        {this.props.tasks.map((task) => (
          <Task 
            key={task.id}
            task={task}
            changeTaskText = {this.props.changeTaskText}
            handleChange={this.props.handleChange} 
            stopChangeMode={this.props.stopChangeMode}
            onClickEditButton={this.props.onClickEditButton}
            onInputKeyDownHandler={this.props.onInputKeyDownHandler}
            isEditingTask={this.props.isEditingTask}
            editingTaskId={this.props.editingTaskId}
            editedText={this.props.editedText}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;