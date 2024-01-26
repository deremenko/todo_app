import React, { Component } from 'react';
import Button from '../Button';
import checkMark from '../../svg/CheckMark.svg';
import crossIcon from '../../svg/Cross.svg';
import './styles.css';

class EditInput extends Component {
  render() {
    return (
      <div className="editInput">
        <input
          className="editInput__inputLine"
          type="text"
          value={this.props.editedText}
          onChange={(event) => {this.props.handleChange(event, "editedText")}}
          onKeyDown={(event) => {this.props.onInputKeyDownHandler(event, this.props.id)}}
        />
        <Button 
          icon={checkMark} 
          actionButton={() => this.props.confirmTaskEditing(this.props.id)}
          alt="Check mark"
        />
        <Button 
          icon={crossIcon} 
          actionButton={this.props.cancelTaskEditing}
          alt="Cross" 
        />
      </div>
    );
  }
}

export default EditInput;