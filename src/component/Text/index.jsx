import React, { Component } from 'react';
import './styles.css';
class Text extends Component {

  render() {
    return (
      <p className='text' > {this.props.text} </p>
    );
  }
}

export default Text;