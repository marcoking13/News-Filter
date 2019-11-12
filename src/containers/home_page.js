import React from "react";
import Navbar from "./../components/navbar/navbar.js";
import Footnote from "./../components/footer/footnote.js";

import "./../css/home.css";

class HomePage extends React.Component{
    constructor(props){
      super(props);

      // this.state.nowPlaying.name
        const params = this.getHashParams();

        this.state = {
          loggedIn: params.access_token ? true:false,
          nowPlaying:{
            name:"",
            artist:''
          }

        }

    }

    componentDidMount(){
      this.props.UpdateToken(window.location.href.slice(58,224));
    }

   getHashParams() {
      var hashParams = {};
      var e, r = /([^&;=]+)=?([^&;]*)/g,
          q = window.location.href.substring(1);
      while ( e = r.exec(q)) {
         hashParams[e[1]] = decodeURIComponent(e[2]);
      }

      return hashParams;

    }


  renderSongs(){
    var html = [];
    for(var i = 0; i<6; i++){
      html.push(

        <div className="songBox col-2 col-2B">
            <img  alt = "song" className="cover" src="assets/images/sampleAlbumBackground.jpg"/>
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
      <div  className="container-fluid pb10">
        <Navbar token = {window.location.href.slice(58,226)} email = {window.location.href.slice(227,240)}/>
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
          <br />
          <br />
          <br/>
          <br/>


          <Footnote />
      </div>
    )
  }
}


export default HomePage;
