import React, { Component } from 'react';
import './styles.css';

class Button extends Component {
  render() {
    return (
      <div className="button">
        <button onClick={this.props.clickButton} className="button__main-body">
          <img src={this.props.Icon} alt={this.props.alt} />
          <span>{this.props.buttonText}</span>
        </button>
      </div>
    );
  }
}

export default Button;