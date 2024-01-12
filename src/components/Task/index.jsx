import React, { Component } from 'react';
import Button from '../Button';
import crossIcon from '../../svg/Cross.svg';
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
        <p className="task__text" > {this.props.text} </p>
        <Button icon={crossIcon} alt="Cross" />
      </div>
    );
  }
}

export default Task;