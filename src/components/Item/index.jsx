import React, { Component } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Text from '../Text';
import './styles.css';

class Item extends Component {

  render() {
    return (
      <div className="item">
        <Checkbox checked = {this.props.checked} />
        <Text text = {this.props.text} />
        <Button Icon = {this.props.Icon} alt = {this.props.alt}/>
      </div>
    );
  }
}

export default Item;