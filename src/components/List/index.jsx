import React, { Component } from 'react';
import Item from '../Item';
import './styles.css';

class List extends Component {
  render() {
    return (
      <div className="list">
        {this.props.tasks.map((item) => (
          <Item key={item.id} text = {item.text} checked = {item.completed} Icon = {this.props.Icon} alt = {this.props.alt}/>
        ))}
      </div>
    );
  }
}

export default List;
