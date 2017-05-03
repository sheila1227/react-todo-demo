import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return <h1 className='App-header'>{this.props.text}</h1>;
  }
}

export default Header;
