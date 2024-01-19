import React, { Component } from 'react';
import Task from '../Task';
import EditInput from '../EditInput';
import ErrorMessage from '../ErrorMessage';
import './styles.css';

class TaskList extends Component {
  render() {
    return (
      <div className="taskList">
        {this.props.tasks.map((task) => (
          <div key={task.id} className='taskList__block'>
            {this.props.isEditingTask && task.id === this.props.editingTaskId ? (
              <EditInput
                id={task.id}
                editedText={this.props.editedText}
                handleChange={this.props.handleChange} 
                onInputKeyDownHandler={this.props.onInputKeyDownHandler}
                stopChangeMode={this.props.stopChangeMode}
                onClickEditConfir={this.props.onClickEditConfir}
                onClickEditCancel={this.props.onClickEditCancel}
              />
            ) : (
              <Task 
                key={task.id}
                task={task}
                deleteTask={this.props.deleteTask}
                changeTaskText={this.props.changeTaskText}
                handleChange={this.props.handleChange} 
                handleChangeCheckbox={this.props.handleChangeCheckbox}
                stopChangeMode={this.props.stopChangeMode}
                onClickEditButton={this.props.onClickEditButton}
                onInputKeyDownHandler={this.props.onInputKeyDownHandler}
                isEditingTask={this.props.isEditingTask}
                editingTaskId={this.props.editingTaskId}
                editedText={this.props.editedText}
              />
            )}
            {this.props.showError && this.props.editingTaskId === task.id && (
              <ErrorMessage message={this.props.textError} />
            )}
          </div>
        ))}
      </div>
    );
  }
}  

export default TaskList;