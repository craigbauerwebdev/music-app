import React, {Component, Fragment} from 'react';

class MusicSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tracks: null,
        searchTerm: "Rock",
        playerStatus: ""
    }
    //this.play = this.play.bind(this);
  }

  componentDidMount() {
    this.searchMusic();
    this.audio = new Audio();
  }

  playTrack = (src) => {
    console.log(src);
    this.audio.src = src;
    this.audio.play();
  }

  pauseTrack = () => {
      this.audio.pause();
  }

  searchMusic = () => {
    this.setState({
        tracks: null
    });
    const term = this.state.searchTerm;
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + term, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
      }
    })
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({
          tracks: data
        });
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateSearchTerm = (e) => {
    const term = e.target.value;
    console.log(term);
    this.setState({
        //tracks: 'feeder',
        searchTerm: term
    })
  }

  render() {
    if(this.state.tracks) {
        return (
        <Fragment>
            <div>
                <input onChange={this.updateSearchTerm} />
                <button onClick={this.searchMusic}>Search</button>
                <div className="music-search">
                {
                    this.state.tracks.data.map((track, index) => {
                        const markup =
                            <div className="music-search-track group">
                                <div className="album-art" style={{backgroundImage: `url(${track.album.cover_xl})`}}></div>
                                <div className="track-meta">
                                    <h2>{track.title}</h2>
                                    <p>{track.artist.name}</p>
                                </div>
                                <div className="controls">
                                    <i className="large material-icons" onClick={() => this.playTrack(track.preview)}>play_circle_outline</i>
                                    <i className="large material-icons" onClick={() => this.pauseTrack()}>pause_circle_outline</i>
                                </div>
                                
                            </div>;
                        return markup;
                    })
                }
                </div>
            </div>
        </Fragment>
        );
    } else {
        return <p>Loading...</p>;
    }
  }
}

export default MusicSearch;
