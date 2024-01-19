import React, { Component } from 'react';
import Button from '../Button';
import crossIcon from '../../svg/Cross.svg';
import editIcon from '../../svg/Edit.svg';
import './styles.css';

class Task extends Component {
  render() {
    return (
      <div className="task">
        <p className='task__text'>
          {this.props.task.text}
        </p>
        <Button 
          icon={editIcon} 
          actionButton={() => {this.props.onClickEditButton(this.props.task.id, this.props.task.text)}} 
          alt="pen" 
        />
        <Button icon={crossIcon} alt="Cross" />
      </div>
    );
  }
}

export default Task;