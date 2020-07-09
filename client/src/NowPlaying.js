import React, {Component} from 'react';

class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { track } = this.props;
    return ( 
        <div className="now-playing-dock"> 
            <img src={track.album.cover} />
            <h2>{track.title}</h2>
         </div>
    );
  }
}

export default NowPlaying;
