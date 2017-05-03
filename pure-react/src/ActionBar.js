import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './ActionBar.css';

class ActionBar extends Component {
  static propTypes = {
    applyFilter: PropTypes.func.isRequired,
    toggleAllItemsStatus: PropTypes.func.isRequired
  }

  render() {
    const countLabel = this.props.count === 1? 'item' : 'items';

    return (
      <div className='action-bar'>
        <div className='toggle-all'>
          <label>
            <input
                type="checkbox"
                checked={this.props.allCompleted}
                onChange={this.props.toggleAllItemsStatus}
                /> {'Mark all as completed'}
          </label>
        </div>
        <span className='count'>{this.props.count} {countLabel} left</span>
        <ul className='filters'>
          {this.props.filters.map((item, index)=>{
            return <li key={index}
                      className={classnames({selected:this.props.filter===item})}
                      onClick={this.props.applyFilter.bind(this,item)}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default ActionBar;
