import React, { Component } from 'react';
import './styles.css';

class EditInput extends Component {
  render() {
    return (
      <input
        className='editInput'
        type="text"
        value={this.props.editedText}
        onChange={(event) => {this.props.handleChange(event, "editedText")}}
        onKeyDown={(event) => {this.props.onInputKeyDownHandler(event, this.props.id)}}
      />
    );
  }
}

export default EditInput;