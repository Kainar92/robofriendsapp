import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
  }

  componentDidMount() {
    this.searchInput.current.focus();
  }

  render() {
    return (
      <div className="pa2">       
        <input
          aria-label='Search Robots'
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="Search Robots"
          onChange={this.props.searchChange}
          ref={this.searchInput}
        />
      </div>
    );
  }
}

export default SearchBox;
