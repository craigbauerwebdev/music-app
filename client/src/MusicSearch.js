import React, {Component, Fragment} from 'react';
import SingleTrack from './SingleTrack';
import SearchBar from './SearchBar';
import NowPlaying from './NowPlaying';

class MusicSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tracks: null,
        currentTrack: null,
        searchTerm: 'trivium', //dev only - shpould be null
        playerStatus: null
    }
    this.prog = null;
  }

  componentDidMount() {
    this.searchMusic();// dev only
    this.audio = new Audio();
  }

  playTrack = (track, src, index) => {
    /* console.log("Track: ", track);
    console.log("Preview: ", src);
    console.log("Index: ", index); */
    this.setState({
      currentIndex: index,
      playerStatus: "playing",
      currentTrack: track
    });
    if(track !== this.state.currentTrack) {
      this.audio.src = src;
    }
    this.audio.play();
  }

  pauseTrack = (index) => {
    this.setState({
      currentIndex: index,
      playerStatus: "paused"
    })
    this.audio.pause();
    clearInterval(this.prog);
    this.prog = null;
    console.log(this.prog);
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
    //this.audio.pause();
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
          tracks: data,
          currentTrack: null,
          playerStatus: "paused"
        });
        this.audio.src = null;
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

  updateProgress = () => {
    if(this.state.playerStatus === "playing") {
      
      //const prog
      if(!this.prog) {
        console.log('new int created');
        this.prog = setInterval(() => {
          const 
            currentTime = this.audio.currentTime,
            currentDuration = this.audio.duration;
          console.log(currentTime);
          console.log(currentDuration);
          this.setState({
            currentTime,
            currentDuration
          });
        }, 100);
      }
    }
  }

  render() {
    //console.log('music search re-rendered');
    this.updateProgress();
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
            {this.state.currentTrack &&
              <NowPlaying  currentTime={this.state.currentTime} currentDuration={this.state.currentDuration} track={this.state.currentTrack} playerStatus={this.state.playerStatus} />
            }
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
