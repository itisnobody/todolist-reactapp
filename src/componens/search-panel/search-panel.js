import React, {Component} from "react";
import './search-panel.css';

export default class SearchPanel extends Component {

  constructor() {
    super();
    this.state = {
      term: ''
    }

    this.onTermChange = e => {
      const text = e.target.value;

      this.setState({term: text});
      this.props.search(text);
    }
  }

  render() {
    return <input className={'search-input'}
                  placeholder={'Search'}
                  onChange={this.onTermChange}
                  value={this.state.term} />;
  }
}