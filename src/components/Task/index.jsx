import React, { Component } from 'react';
import Button from '../Button';
import crossIcon from '../../svg/Cross.svg';
import './styles.css';

class Task extends Component {
  render() {
    return (
      <div className="Task">
        <input type="checkbox" checked={this.props.checked} 
          className="Task__checkbox" />
        <p className="Task__text" > {this.props.text} </p>
        <Button Icon={crossIcon} alt={"Cross"} />
      </div>
    );
  }
}

export default Task;