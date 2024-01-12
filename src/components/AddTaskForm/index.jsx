import React, { Component } from 'react';
import Button from '../Button';
import addTask from '../../svg/Add.svg';
import { validateInput } from '../../helpers/validateInput.js';
import './styles.css';

class AddTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      placeholder: '',
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value, placeholder: '' });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (validateInput(this.state.inputValue)) {
      this.props.addTaskHandler(this.state.inputValue);
      this.setState({ inputValue: '' });
    }
    else {
      this.setState({ inputValue: '', placeholder: 'Введено некорректное значение' });
    }  

  };

  render() {
    return (
      <form className="addTaskForm" onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.inputValue} 
          onChange={this.handleChange}
          className="addTaskForm__input-line"
          placeholder={this.state.placeholder}
        />
        <Button icon={addTask} alt="add"/>
      </form>
    );
  }
}

export default AddTaskForm;