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
            <div className="progress-container">
                <div className="progress-bar" style={{width: "60%"}}></div>
            </div>
            <div className="album-cover" style={{background: `url(${track.album.cover})`}}></div>
            <div className="track-meta">
                <h2>{track.title}</h2>
                <p>{track.artist.name}</p>
                <i>{track.album.title}</i>
            </div>
         </div>
    );
  }
}

export default NowPlaying;
