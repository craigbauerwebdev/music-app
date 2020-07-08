import React, {Component, Fragment} from 'react';
import SingleTrack from './SingleTrack';
import SearchBar from './SearchBar';

class MusicSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tracks: null,
        searchTerm: null,
        playerStatus: null
    }
    //this.play = this.play.bind(this);
  }

  componentDidMount() {
    //this.searchMusic();
    this.audio = new Audio();
  }

  playTrack = (src, index) => {
    console.log(src);
    this.setState({
      currentIndex: index,
      playerStatus: "playing"
    });
    this.audio.src = src;
    this.audio.play();
  }

  pauseTrack = (index) => {
    this.setState({
      currentIndex: index,
      playerStatus: "paused"
    })
    this.audio.pause();
  }

  updateCurrentIndex = () => {}

  /* Todo: */
  // track progress
  // send playing pause flag to show correct icon
  // update state on click

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
    //console.log(term);
    this.setState({
        searchTerm: term
    })
  }

  render() {
    if(this.state.tracks) {
        return (
        <Fragment>
            <div>
                <SearchBar updateSearchTerm={this.updateSearchTerm} searchMusic={this.searchMusic} />
                <div className="music-search">
                {
                  this.state.tracks.data.map((track, index) => {
                      return <SingleTrack track={track} playTrack={this.playTrack} pauseTrack={this.pauseTrack} index={index} currentIndex={this.state.currentIndex} playerStatus={this.state.playerStatus} />;//markup;
                  })
                }
                </div>
            </div>
        </Fragment>
        );
    } else {
      return (
        <Fragment>
          <SearchBar updateSearchTerm={this.updateSearchTerm} searchMusic={this.searchMusic}/>
        </Fragment>
      );
    }
  }
}

export default MusicSearch;
