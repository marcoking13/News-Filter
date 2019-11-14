import React from "react";

import Navbar from "./../components/navbar/navbar.js";
import Footnote from "./../components/footer/footnote.js";

import SongBox from "./../components/radio/song_box.js";
import PlayBar from "./../components/radio/play_bar.js";

import "./../css/radio.css";

import Songs from "./../config/randomSongs";



class RadioPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs:Songs,
      current:null,
      options:{
        method:"GET",
        headers:{
          "Authorization": "Bearer "+ this.props.token
        },
        mode:"cors",
        cache:"default"
      }
    }

  }
  CallSongs(song){
    const BASE_URL = "https://api.spotify.com/v1/tracks/"
    const FETCH_URL = BASE_URL + "3n3Ppam7vgaVa1iaRUc9Lp";
    fetch(FETCH_URL,this.state.options)
      .then(response =>response.json())

        .then(json => {
            console.log(json);
        })

  }

  render(){
    this.CallSongs();
    return(
      <div className="container-fluid bb">
        <Navbar />
        <br />
        <SongBox data = {{songName:";",artistName:"l"}} />
        <PlayBar song = {{isPlaying:false}} />
        <br />
        <br />
        <Footnote />
      </div>
    );
  }
}


export default RadioPage;
