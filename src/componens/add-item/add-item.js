import React, {Component} from 'react';
import './add-item.css';

export default class AddItem extends Component {

  constructor() {
    super();
    this.state= {
      label: ''
    };

    this.onSubmit = e => {
      e.preventDefault();
      this.props.onAdd(this.state.label);
      this.setState({
        label: ''
      });
    };

    this.onLabelChange = e => {
      this.setState({label: e.target.value});
    };
  }

  render() {
    return (
      <form className='todo-add-item'
            onSubmit={this.onSubmit}>
        <input className='form-control'
               type="text"
               onChange={this.onLabelChange}
               placeholder='Whats needs to be done'
               value={this.state.label} />
        <button className='btn btn-outline-secondary w-100 todo-add-item-btn'>
                Add Item
        </button>
      </form>
    );
  };
}