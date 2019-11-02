import React from "react";
import Navbar from "./../components/navbar.js";
import "./../css/home.css";
import axios from "axios";

class HomePage extends React.Component{
    constructor(props){
      super(props);
      console.log(this.props.token);
      // this.state.nowPlaying.name
        const params = this.getHashParams();
        console.log(params);
        this.state = {
          loggedIn: params.access_token ? true:false,
          nowPlaying:{
            name:"",
            artist:''
          }

        }
        console.log(window.location.href.slice(227,240));

    }

    componentDidMount(){

        this.props.UpdateToken(window.location.href.slice(58,226));

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

      </div>
    )
  }
}


export default HomePage;
