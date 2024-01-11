import React, { Component } from 'react';
import './styles.css';

class Button extends Component {

  render() {
    return (
      <div className='box-button'>
        <button><img src={this.props.crossIcon} alt='No future' /></button>
      </div>
    );
  }
}

export default Button;