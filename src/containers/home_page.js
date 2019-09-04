import React from "react";
import Navbar from "./../components/navbar.js";
import Spotify from "node-spotify-api";
import "./../css/home.css";

class HomePage extends React.Component{
  constructor(props){
    super(props);
    console.log(Spotify);
  }
  renderSongs(){
    var html = [];
    for(var i = 0; i<6; i++){
      html.push(

        <div className="songBox col-2 col-2B">
            <img className="cover" src="assets/images/sampleAlbumBackground.jpg"/>
            <div style={{position:"absolute",bottom:0}} >
              <p className="songNameH">Song</p>
              <p className="artistNameH">Artist</p>
            </div>
        </div>

      );
    }
    return html;
  }

  render(){
    return(
      <div  className="homeBody container-fluid">
        <Navbar />
        <div className="main">

          <div classname="songCatagories">


              <div className="row rowB rowShort">
                <p className="catagoryText"> New Releases</p>
                {this.renderSongs()}
              </div>

              <div className="row rowB rowShort">
                <p className="catagoryText"> Recommended</p>
                {this.renderSongs()}
              </div>

              <div className="row rowB rowShort">
                <p className="catagoryText"> Playlist: 1</p>
                {this.renderSongs()}
              </div>

          </div>

        </div>

      </div>
    )
  }
}


export default HomePage;
