import React from "react";
import "./../css/navbar.css";


class Navbar extends React.Component{
  constructor(props){
    super(props);
  }

  openNav() {
      document.getElementById("mySidenav").style.width = "175px";
   }

  closeNav() {
     document.getElementById("mySidenav").style.width = "0";
   }

  render(){
    return(
      <div>
        <div id="mySidenav" className="sidenav">
          <div className="closebtn" onClick={()=>{this.closeNav()}}>&times;</div>
          <div className="navLogoBox">
            <img className="navLogo" src="assets/images/logo.png"/>
            <h6 className="navInt">Welcome Back!</h6>
          </div>
          <div className="list">

            <p >Browse</p>
            <p >Discover</p>
            <p >Radio</p>
            <p >Search</p>

              <div className="navBarr"/>

              <p >My Playlists</p>
              <p >My Songs</p>
              <p className="g">+ Add Playlist</p>

            </div>
          </div>

      <span className="menuIC"onClick={()=>{this.openNav()}}>
        <div className="menuBarI"></div>
        <div className="menuBarI"></div>
        <div className="menuBarI"></div>
      </span>

        <div id="main"></div>
        
      </div>
    )
  }
}

export default Navbar;
