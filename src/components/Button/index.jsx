import React, { Component } from 'react';
import SvgImg from '../SvgImg/index.jsx';
import './styles.css';

class Button extends Component {

  render() {
    return (
      <div className="button">
        <button className="button__main-body">
          <SvgImg Icon={this.props.Icon} alt = {this.props.alt}/>
        </button>
      </div>
    );
  }
}

export default Button;