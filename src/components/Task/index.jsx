import React, { Component } from 'react';
import Button from '../Button';
import crossIcon from '../../svg/Cross.svg';
import editIcon from '../../svg/Edit.svg';
import './styles.css';

class Task extends Component {
  render() {
    return (
      <div className="task">
        <input 
          type="checkbox" 
          checked={this.props.checked} 
          className="task__checkbox" 
        />
        {this.props.isEditingTask && this.props.id === this.props.editingTaskId ? (
          <input
            className='task__text'
            type="text"
            value={this.props.editedText}
            onChange={(event) => {this.props.handleChange(event, "editedText")}}
            onKeyDown={(event) => {this.props.onInputKeyDownHandler(event, this.props.id)}}
            onBlur={() => {this.props.stopChangeMode()}}
          />
        ) : (
          <p className='task__text'>
            {this.props.text}
          </p>
        )}
        <Button 
          icon={editIcon} 
          actionButton={() => {this.props.onClickEditButton(this.props.id, this.props.text)}} 
          alt="pen" 
        />
        <Button icon={crossIcon} alt="Cross" />
      </div>
    );
  }
}

export default Task;