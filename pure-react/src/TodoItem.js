import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './TodoItem.css';
class TodoItem extends Component {
  static propTypes = {
    deleteTodoItem: PropTypes.func.isRequired,
    onItemStatusToggle: PropTypes.func.isRequired,
    updateItem: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      newText: this.props.todo.text
    }
  }

  enterEditMode(event) {
    this.setState({
      editMode: true
    });
  }

  handleNewTextChange(event) {
    this.setState({
      newText: event.target.value
    });
  }

  handleUpdate() {
    const newText = this.state.newText.trim();
    if (!newText) {
      this.props.deleteTodoItem(this.props.todo);
    } else if(newText !== this.props.todo.text){
      this.props.updateItem(this.props.todo, {text: newText});
    }
    this.setState({
      editMode: false,
      newText: newText
    });
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.handleUpdate();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(!prevState.editMode && this.state.editMode) {
      this.textInput.focus();
    }
  }

  render() {
    return (
      <div className={classnames('todo-item',{'completed':this.props.todo.completed, 'editing':this.state.editMode})}>
        <div className='item-viewer'>
          <input className='toggle' type='checkbox' checked={this.props.todo.completed}
          onChange={this.props.onItemStatusToggle.bind(this, this.props.todo)}/>
          <label onDoubleClick={this.enterEditMode.bind(this)} className='text'>{this.props.todo.text}</label>
          <button className='delete' onClick={this.props.deleteTodoItem.bind(this, this.props.todo)}></button>
        </div>
        <input value={this.state.newText} ref={(input)=>{this.textInput=input}}
        onBlur={this.handleUpdate.bind(this)} onChange={this.handleNewTextChange.bind(this)}
        onKeyDown={this.handleKeyDown.bind(this)}
        className='item-editor' type='text'/>
      </div>
    );
  }
}

export default TodoItem;
