import React, {Component, Fragment} from 'react';

class MusicSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchTerm: "Rock"
    };
  }

  componentDidMount() {
    this.searchMusic("feeder");
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
    return (
      <Fragment>
        <div>
            <input onChange={this.updateSearchTerm} />
            <button onClick={this.searchMusic}>Search</button>
        </div>
      </Fragment>
    );
  }
}

export default MusicSearch;
