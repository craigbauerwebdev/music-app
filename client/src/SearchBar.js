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
        <Fragment> 
            <input onChange = { updateSearchTerm } />
            <button onClick={ searchMusic }>Search</button>
        </Fragment>
    );
  }
}

export default SearchBar;
