import React, {Component} from 'react';

class NowPlayingDetails extends Component {
  /* constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {} */

  render() {
    const 
      { title, artist, albumCover, closeDetails } = this.props;
    return (
        <div className="now-playing-details">
            <h3>{title}</h3>
            <p>{artist}</p>
            <img src={albumCover} width="150" />
            <div onClick={()=>closeDetails()} className="close-btn">x</div>
        </div>
    );
  }
}

export default NowPlayingDetails;
