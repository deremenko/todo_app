import React, { Component } from 'react';
import './styles.css';
class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editText: this.props.text,
    };
  }

  onDoubleClickHandler = () => {
    this.setState({ isEditing: true });
  };

  onInputChangeHandler = (event) => {
    this.setState({ editText: event.target.value });
  };

  onInputKeyDownHandler = (event) => {
    if (event.key === 'Enter') {
      this.props.changeTaskText(event.target.value, this.props.idTask);
      this.setState({ isEditing: false, editText: event.target.value});
    }
  };

  render() {
    return (
      <div className='text'>
        {this.state.isEditing ? (
          <input
            className='text__edit'
            type="text"
            value={this.state.editText}
            onChange={this.onInputChangeHandler}
            onKeyDown={this.onInputKeyDownHandler}
            onBlur={() => this.setState({ isEditing: false })}
          />
        ) : (
          <span onDoubleClick={this.onDoubleClickHandler}>
            {this.state.editText}
          </span>
        )}
      </div>
    );
  }
}

export default Text;