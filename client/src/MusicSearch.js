import React, {Component, Fragment} from 'react';
import SingleTrack from './SingleTrack';

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
                        return <SingleTrack track={track} playTrack={this.playTrack} pauseTrack={this.pauseTrack} index={index} />;//markup;
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
