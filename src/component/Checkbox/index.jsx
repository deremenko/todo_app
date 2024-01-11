import React, { Component } from 'react';
import './styles.css';
class Checkbox extends Component {

  render() {
    return (
      <input type='checkbox' checked = {this.props.checked} className='checkbox'></input>
    );
  }
}

export default Checkbox;