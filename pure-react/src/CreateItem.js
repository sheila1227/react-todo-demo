import React, { Component, PropTypes } from 'react';
import './CreateItem.css';

class CreateItem extends Component {
  static propTypes = {
    createNewTodoItem: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      newTodoText: ''
    }
  }

  handleChange(event) {
    this.setState({
      newTodoText: event.target.value
    });
  }

  handleKeyDown(event) {
    if (event.keyCode !== 13) {
        return;
    } else {
      const newTodoText = this.state.newTodoText.trim();
      if(newTodoText.trim()) {
        this.props.createNewTodoItem(newTodoText);
        this.setState({
          newTodoText: ''
        });
      }
    }

  }

  render() {
    return (
      <div className='CreateItem'>
        <input autoFocus={true} type='text' value={this.state.newTodoText}
        placeholder='What needs to be done?'
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleKeyDown.bind(this)}/>
      </div>
    );
  }
}

export default CreateItem;
