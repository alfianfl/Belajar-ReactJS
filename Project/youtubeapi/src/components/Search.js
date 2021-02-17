import React, { Component } from 'react';




class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title:''
    };
  }
  onSearchChanged = event => {
    const title_ = event.target.value
    this.setState({title:title_})
  };
  onSubmit = event => {
    event.preventDefault()
    this.props.onSearch(this.state.title)
  };


  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.onSubmit} className="search-form">
          <div className="form-controls">
            <label>Search</label>
            <input
              id="video-search"
              type="text"
              value={this.state.title}
              onChange={this.onSearchChanged}
              placeholder="Enter Search Keyword"
            />
          </div>
        </form>

      </div>
    );
  }
}

export default Search;
