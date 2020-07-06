import React, {Component} from 'react';

class SingleTrack extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {}

  render() {
    const { track, index, currentIndex, playerStatus } = this.props;
    return (    
        <div className="music-search-track group">
            <div className="album-art" style={{ backgroundImage: `url(${track.album.cover_xl})` }}></div>
            <div className="track-meta">
                <h2>{track.title}</h2>
                <p>{track.artist.name}</p>
            </div>
            <div className="controls">
                {/* <i>{index}</i> */}
                {(index !== currentIndex || playerStatus === "paused") &&
                  <i className="large material-icons" onClick={() => this.props.playTrack(track.preview, index)}>play_circle_outline</i>
                }
                {(index === currentIndex && playerStatus === "playing") &&
                  <i className="large material-icons" onClick={() => this.props.pauseTrack(index)}>pause_circle_outline</i>
                }
            </div>

        </div>
    );
  }
}

export default SingleTrack;
