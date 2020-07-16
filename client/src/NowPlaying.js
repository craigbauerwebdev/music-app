import React, {Component} from 'react';

class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  //setProgress = (type) => {}

  render() {
    const 
      { index, currentIndex, track, currentTime, currentDuration, playerStatus } = this.props;
    let
      current = Math.round(currentTime),
      duration = Math.round(currentDuration),
      progress = parseFloat(((currentTime / currentDuration) * 100).toFixed(4));
      console.log("PROGRESS: ", progress);
      if(isNaN(current)) {
        current = 0;
      }
      if(isNaN(duration)) {
        duration = 0;
      }
      
    return ( 
      <div className="now-playing-dock">
        <div className="progress-container">
          {!isNaN(progress) &&
            <div className="progress-bar" style={{width: `${progress}%`}}></div>
          }
        </div>
        <div className="album-cover" style={{background: `url(${track.album.cover})`}}></div>
        <div className="track-meta">
            <h2>{track.title}</h2>
            <p>{track.artist.name}</p>
            <i>{track.album.title}</i>
            <i>{current} : {duration}</i>
        </div>
        {/* <i style={{ color: "white", position: "absolute", top: "50%", right: "30px", transform: "translateY(-50%)", fontSize: "60px"}} className="large material-icons">play_circle_outline</i> */}
        <div className="controls">
          {/* <i>{index}</i> */}
          {(index !== currentIndex || playerStatus === "paused") &&
            <i className="large material-icons" onClick={() => this.props.playTrack(track, track.preview, index)}>play_circle_outline</i>
          }
          {(index === currentIndex && playerStatus === "playing") &&
            <i className="large material-icons" onClick={() => this.props.pauseTrack(index)}>pause_circle_outline</i>
          }
        </div>
      </div>
    );
  }
}

export default NowPlaying;
