import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return <h1 className="App-header">{props.text}</h1>;
}

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: 'todos',
};

export default Header;
