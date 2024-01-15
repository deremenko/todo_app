import React, { Component } from 'react';
import './styles.css';

class ErrorMessage extends Component {
  render() {
    return (
      <p className="ErrorMessage">
        {this.props.message}
      </p>
    );
  }
}

export default ErrorMessage;