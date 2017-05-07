import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import { addTodo } from '../actions/actions';
import utils from './../utils/utils';

class AddTodoContainer extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(text) {
    const newTodo = {
      id: utils.getRandomId(),
      completed: false,
      text,
    };
    this.props.addTodo(newTodo);
  }

  render() {
    return (
      <AddTodo
        addTodo={this.addTodo}
      />
    );
  }
}

AddTodoContainer.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: (newTodo) => {
    dispatch(addTodo(newTodo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoContainer);
