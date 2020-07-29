import React, {Component} from 'react';

class SearchBar extends Component {

  pressEnter = (e) => {
    if(e.key === "Enter") {
      this.props.searchMusic();
    }
  }

  render() {
    const { updateSearchTerm, searchMusic } = this.props;
    return ( 
        <div className="search-bar"> 
            <input placeholder="Enter and artist, song or album" onChange = { updateSearchTerm } onKeyUp={this.pressEnter} />
            <button onClick={ searchMusic }>Search</button>
        </div>
    );
  }
}

export default SearchBar;
