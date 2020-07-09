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
    this.searchMusic("rage%20against%20the%20machine");
  }

  searchMusic(term) {
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
        //console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }



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
