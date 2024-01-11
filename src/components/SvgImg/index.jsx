import React, { Component } from 'react';
import './styles.css';
class SvgImg extends Component {

  render() {
    return (
      <img src={this.props.Icon} alt={this.props.alt} />
    );
  }
}

export default SvgImg;