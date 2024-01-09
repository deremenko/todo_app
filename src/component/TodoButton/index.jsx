import React, { Component } from 'react';
import './styles.css';

class TodoButton extends Component {

  clickToButton = () => {
  const dataToSend = this.props.id;
  this.props.actionClick(dataToSend); 
};

  render() {
    return (
      <div className='box' onClick={this.clickToButton}>
        <div className='box__button'>
          <div className='box__left-X-line'></div>
          <div className='box__right-X-line'></div>
        </div>
      </div>
    );
  }
}

export default TodoButton;