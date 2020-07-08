import React, {Component, Fragment} from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <header>
          <img src="./img/music-search-logo.png" />
        </header>
      </Fragment>
    );
  }
}

export default Header;
