import React, { Component } from 'react';
import './styles.css';

class Button extends Component {

  render() {
    return (
      <div className='box' onClick={this.props.deletTask.bind(null, this.props.id)}>
        <div className='box__button'>
          <div className='box__left-X-line'></div>
          <div className='box__right-X-line'></div>
        </div>
      </div>
    );
  }
}

export default Button;