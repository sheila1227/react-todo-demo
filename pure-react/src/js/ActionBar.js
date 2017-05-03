import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './../css/ActionBar.css';

function ActionBar({ applyFilter, toggleAllItemsStatus, count, filter, filters, allCompleted }) {
  const countLabel = count === 1 ? 'item' : 'items';

  return (
    <div className="action-bar">
      <div className="toggle-all">
        <label htmlFor="toggleAll">
          <input
            id="toggleAll"
            type="checkbox"
            checked={allCompleted}
            onChange={toggleAllItemsStatus}
          /> {'Mark all as completed'}
        </label>
      </div>
      <span className="count">{count} {countLabel} left</span>
      <ul className="filters">
        {filters.map(item =>
          <li key={item} className={classnames({ selected: filter === item })}>
            <button onClick={() => applyFilter(item)}>{item}</button></li>)
        }
      </ul>
    </div>
  );
}

ActionBar.propTypes = {
  applyFilter: PropTypes.func.isRequired,
  toggleAllItemsStatus: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  filter: PropTypes.string.isRequired,
  allCompleted: PropTypes.bool.isRequired,
};

export default ActionBar;
