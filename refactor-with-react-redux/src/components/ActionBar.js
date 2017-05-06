import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function ActionBar({ changeFilter, toggleAllTodosComplete, count, filter, filters, allCompleted }) {
  const countLabel = count === 1 ? 'item' : 'items';
  return (
    <div className="action-bar">
      <div className="toggle-all">
        <label htmlFor="toggleAll">
          <input
            id="toggleAll"
            type="checkbox"
            checked={allCompleted}
            onChange={toggleAllTodosComplete}
          /> {'Mark all as completed'}
        </label>
      </div>
      <span className="count">{count} {countLabel} left</span>
      <ul className="filters">
        {filters.map(item =>
          <li key={item} className={classnames({ selected: filter === item })}>
            <button onClick={() => changeFilter(item)}>{item}</button></li>)
        }
      </ul>
    </div>
  );
}

ActionBar.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  toggleAllTodosComplete: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  filter: PropTypes.string.isRequired,
  allCompleted: PropTypes.bool.isRequired,
};

export default ActionBar;
