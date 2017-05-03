import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../css/CreateItem.css';

class CreateItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newTodoText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event) {
    this.setState({
      newTodoText: event.target.value,
    });
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      const newTodoText = this.state.newTodoText.trim();
      if (newTodoText.trim()) {
        this.props.createNewTodoItem(newTodoText);
        this.setState({
          newTodoText: '',
        });
      }
    }
  }

  render() {
    return (
      <div className="CreateItem">
        <input
          autoFocus
          type="text"
          value={this.state.newTodoText}
          placeholder="What needs to be done?"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

CreateItem.propTypes = {
  createNewTodoItem: PropTypes.func.isRequired,
};

export default CreateItem;
