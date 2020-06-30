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
          <h1>Deezer Music</h1>
        </header>
      </Fragment>
    );
  }
}

export default Header;
