import React, {Component} from 'react';

class NowPlayingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const 
      { temp } = this.props;
    
      
    return ( 
        <div className="now-playing-details">
            <h2>Now Playing Details</h2>
        </div>
    );
  }
}

export default NowPlayingDetails;
