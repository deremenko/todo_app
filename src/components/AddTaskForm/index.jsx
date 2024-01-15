import React, { Component } from 'react';
import Button from '../Button';
import addTask from '../../svg/Add.svg';
import './styles.css';

class AddTaskForm extends Component {
  render() {
    return (
      <form className="addTaskForm" onSubmit={(event) => {this.props.addTask(event);}}>
        <input 
          type="text" 
          value={this.props.clearInput}
          onChange={(event) => {this.props.handleChange(event);}}
          className="addTaskForm__inputLine"
        />
        <Button icon={addTask} alt="pen"/>
      </form>
    );
  }
}

export default AddTaskForm;