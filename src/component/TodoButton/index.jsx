import React, { Component } from 'react';
import './styles.css';

class TodoButton extends Component {
  render() {
    return (
      <div className='box'>
        <div className='box__button'>
          <div className='box__left-X-line'></div>
          <div className='box__right-X-line'></div>
        </div>
      </div>
    );
  }
}

export default TodoButton;