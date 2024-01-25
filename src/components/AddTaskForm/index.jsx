import React, { Component } from 'react';
import Button from '../Button';
import checkMark from '../../svg/CheckMark.svg';
import './styles.css';

class AddTaskForm extends Component {
  render() {
    return (
      <form className="addTaskForm" onSubmit={(event) => {this.props.addTask(event)}}>
        <input 
          type="text" 
          value={this.props.text}
          onChange={(event) => {this.props.handleChange(event, "text")}}
          className="addTaskForm__inputLine"
        />
        <Button icon={checkMark} alt="Check mark"/>
      </form>
    );
  }
}

export default AddTaskForm;