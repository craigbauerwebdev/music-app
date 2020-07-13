import React, {Component} from 'react';

class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  setProgress = (type) => {
    
  }

  render() {
    const 
      { track, currentTime, currentDuration } = this.props;
    let
      current = Math.round(currentTime),
      duration = Math.round(currentDuration);
      if(isNaN(current)) {
        current = 0;
      }
      if(isNaN(duration)) {
        duration = 0;
      }
    //this.setProgress(playerStatus);
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
                <i>{current} : {duration}</i>
            </div>
         </div>
    );
  }
}

export default NowPlaying;
