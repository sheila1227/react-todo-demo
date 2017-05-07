import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ActionBar from '../components/ActionBar';
import { changeFilter, toggleAllTodosComplete } from '../actions/actions';

class ActionBarContainer extends Component {
  constructor(props) {
    super(props);
    this.toggleAllTodosComplete = this.toggleAllTodosComplete.bind(this);
  }

  toggleAllTodosComplete(event) {
    const checkAll = event.target.checked;
    this.props.toggleAllTodosComplete(checkAll);
  }

  render() {
    return (
      <ActionBar
        toggleAllTodosComplete={this.toggleAllTodosComplete}
        todos={this.props.todos}
        changeFilter={this.props.changeFilter}
        count={this.props.count}
        filters={this.props.filters}
        filter={this.props.filter}
        allCompleted={this.props.allCompleted}
      />
    );
  }
}

ActionBarContainer.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  toggleAllTodosComplete: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  filter: PropTypes.string.isRequired,
  allCompleted: PropTypes.bool.isRequired,
};

const getActiveItemsCount = (todos) => {
  let activeItemCount = 0;
  todos.forEach((item) => {
    if (!item.completed) {
      activeItemCount += 1;
    }
  });
  return activeItemCount;
};

const getAllCompleteStatus = (todos) => {
  let allCompleted = false;
  if (todos.length === 0) {
    allCompleted = false;
  } else {
    allCompleted = !todos.some(item => !item.completed);
  }
  return allCompleted;
};

const mapStateToProps = state => ({
  todos: state.todos,
  count: getActiveItemsCount(state.todos),
  filters: ['ALL', 'ACTIVE', 'COMPLETED'],
  filter: state.filter,
  allCompleted: getAllCompleteStatus(state.todos),
});

const mapDispatchToProps = dispatch => ({
  changeFilter: (filter) => {
    dispatch(changeFilter(filter));
  },
  toggleAllTodosComplete: (checkAll) => {
    dispatch(toggleAllTodosComplete(checkAll));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionBarContainer);
