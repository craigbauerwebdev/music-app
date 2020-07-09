import React, {Component, Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import MusicSearch from './MusicSearch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.searchMusic("rage%20against%20the%20machine"); // for testing endpoints only
  }

  searchMusic(term) {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/genre/152", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    /* fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + term, {
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
        //console.log(data);
      })
      .catch(err => {
        console.log(err);
      }); */
  }

  // Style now playing dock
  // Create progress bar in Now Playing
  // add playNext at end of track
  // add skip ahead 5 sec in Now Playing
  // Add artist Route with search or track list
  // Add album route with track list



  render() {
    return (
      <Fragment>
        <Header />
          <MusicSearch />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
