import React from "react";

import "./../css/landing.css";

class LandingPage extends React.Component {

  renderMusicSamples(){
    var html = [];
    for(var i =1; i<7; i++){

      html.push(
        <div className="col-2 mt25">
            <img className="landingCoverSong" src={"assets/images/sample"+i+".jpg"}/>
            <p className="songNL">Song:</p>
            <p className="songNL">Artist:</p>
        </div>
      )

    }
    return html;
  }

  render(){
    var background = `url("assets/images/landing.jpg")`;
    return(
        <div className="container-fluid"style={{background:background}}>

          <div className="row bb o7">

              <div className="col-2">
                <img className="logoLanding" src="assets/images/logo.png"/>
                <p className="titleL"> Music Bender</p>
              </div>

              <div className="col-4"/>

            <div className="col-3">
                <ul className="ml5">
                    <li className="optionM mt10 hbr">Download</li>
                    <li className="optionM  mt10 hbr">About</li>
                    <li className="optionM mt10 hbr">Credits</li>
                </ul>
            </div>

            <div className="col-3">
            <ul className="options ">
                <li className="optionM hbr brg" onClick = {()=>{this.props.changeURL("login")}}>Signup</li>
                <li className="optionM  hbr"onClick = {()=>{this.props.changeURL("login")}}>Login</li>
            </ul>
            </div>

        </div>


        <div className="pb50" >
            <h1 className="headingL"> Find your Favorite Music Here!</h1>
            <p className="headingLL">Millions of users are already on it</p>
            <button className="btn landingBtn"onClick = {()=>{this.props.changeURL("login")}}>Create Account</button>
        </div>

        <div className="row  bb">
          {this.renderMusicSamples()}
        </div>

      </div>
    );
  }
}

export default LandingPage;
