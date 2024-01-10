import React, { Component } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Text from '../Text';
import './styles.css';

class Item extends Component {

  render() {
    return (
      <div className='item'>
        <Checkbox checked = {this.props.checked} />
        <Text text = {this.props.text} changeTaskText = {this.props.changeTaskText} idTask = {this.props.idTask} />
        <Button deletTask = {this.props.deletTask} id = {this.props.idTask} />
      </div>
    );
  }
}

export default Item;