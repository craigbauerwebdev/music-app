import React, {Component, Fragment} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { updateSearchTerm, searchMusic } = this.props;
    return ( 
        <div className="search-bar"> 
            <input placeholder="Enter and artist, song or album" onChange = { updateSearchTerm } />
            <button onClick={ searchMusic }>Search</button>
        </div>
    );
  }
}

export default SearchBar;
