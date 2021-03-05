import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  buttons = [
    {
      name: 'all',
      label: 'All'
    },
    {
      name: 'active',
      label: 'Active'
    },
    {
      name: 'done',
      label: 'Done'
    }
  ]

  render() {

    const { active, onToggleFilter} = this.props;

    const elements = this.buttons.map(( {label, name }) => {
      const ifActive = active === name ? ' active' : '';

      return (
        <button type='button'
                className={'btn btn-outline-primary' + ifActive}
                key={name}
                onClick={() => onToggleFilter(name)}>
                {label}
        </button>
      );
    });

    return (
      <div className='btn-group'>
        {elements}
      </div>
    );
  }
}