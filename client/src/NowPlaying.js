import React, {Component, Fragment} from 'react';
import NowPlayingDetails from './NowPlayingDetails';

class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: null
    };
  }

  componentDidMount() {}

  openDetails = () => {
    console.log('open details');
    this.setState({
      showDetails: true
    });
  }

  closeDetails = () => {
    console.log('close details');
    this.setState({
      showDetails: false
    })
  }

  render() {
    const 
      { index, currentIndex, track, currentTime, currentDuration, playerStatus, prevTrack, nextTrack, skip5 } = this.props;
    let
      current = Math.round(currentTime),
      duration = Math.round(currentDuration),
      progress = parseFloat(((currentTime / currentDuration) * 100).toFixed(4));
      //console.log("PROGRESS: ", progress);
      if(isNaN(current)) {
        current = 0;
      }
      if(isNaN(duration)) {
        duration = 0;
      }
      
    return (
      <Fragment>
        <div className="now-playing-dock">
          <div className="progress-container">
            {!isNaN(progress) &&
              <div className="progress-bar" style={{width: `${progress}%`}}></div>
            }
          </div>
          <div onClick={this.openDetails} className="album-cover" style={{background: `url(${track.album.cover})`}}></div>
          <div className="track-meta">
              <h2>{track.title}</h2>
              <p>{track.artist.name}</p>
              <i>{track.album.title}</i>
              <i>{current} : {duration}</i>
              <p>details</p>
          </div>
          <div className="controls">  
            <i className="large material-icons" onClick={prevTrack}>skip_previous</i>
            {(index !== currentIndex || playerStatus === "paused") &&
              <i className="large material-icons" onClick={() => this.props.playTrack(track, track.preview, index)}>play_circle_outline</i>
            }
            {(index === currentIndex && playerStatus === "playing") &&
              <i className="large material-icons" onClick={() => this.props.pauseTrack(index)}>pause_circle_outline</i>
            }
            <i className="large material-icons" onClick={nextTrack}>skip_next</i>
            {playerStatus === "playing" &&
              <i className="large material-icons" onClick={skip5}>forward_5</i>
            }
          </div>
        </div>
        {this.state.showDetails &&
          <NowPlayingDetails title={track.title} artist={track.artist.name} albumCover={track.album.cover} closeDetails={this.closeDetails} />
        }
      </Fragment>
    );
  }
}

export default NowPlaying;
