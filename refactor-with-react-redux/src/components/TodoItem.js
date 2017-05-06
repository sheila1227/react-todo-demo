import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      newText: this.props.todo.text,
    };
    this.enterEditMode = this.enterEditMode.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleNewTextChange = this.handleNewTextChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.editMode && this.state.editMode) {
      this.textInput.focus();
    }
  }

  handleNewTextChange(event) {
    this.setState({
      newText: event.target.value,
    });
  }

  handleUpdate() {
    const newText = this.state.newText.trim();
    if (!newText) {
      this.props.deleteTodoItem(this.props.todo);
    } else if (newText !== this.props.todo.text) {
      this.props.updateTodoText(this.props.todo.id, newText);
    }
    this.setState({
      editMode: false,
      newText,
    });
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.handleUpdate();
    }
  }


  enterEditMode() {
    this.setState({
      editMode: true,
    });
  }

  render() {
    return (
      <div className={classnames('todo-item', { completed: this.props.todo.completed, editing: this.state.editMode })}>
        <div className="item-viewer">
          <input
            className="toggle" type="checkbox" checked={this.props.todo.completed}
            onChange={() => this.props.toggleTodoComplete(this.props.todo.id)}
          />
          <p onDoubleClick={this.enterEditMode} className="text">{this.props.todo.text}</p>
          <button
            className="delete" onClick={() => this.props.deleteTodoItem(this.props.todo.id)}
          />
        </div>
        <input
          value={this.state.newText} ref={(input) => { this.textInput = input; }}
          onBlur={this.handleUpdate} onChange={this.handleNewTextChange}
          onKeyDown={this.handleKeyDown}
          className="item-editor" type="text"
        />
      </div>
    );
  }
}

TodoItem.propTypes = {
  deleteTodoItem: PropTypes.func.isRequired,
  toggleTodoComplete: PropTypes.func.isRequired,
  updateTodoText: PropTypes.func.isRequired,
  todo: PropTypes.shape().isRequired,
};

export default TodoItem;
