import React from "react";
import {Link} from "react-router-dom";

import "./../../css/navbar.css";

import Logo from "./../../images/note.png";

class Navbar extends React.Component{

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
          <div   alt = "x" className="closebtn" onClick={()=>{this.closeNav()}}>&times;</div>
          <div className="navLogoBox">
            <img  alt = "logo"  className="navLogo" src={Logo}/>
            <h6 className="navInt">Welcome Back!</h6>
          </div>
          <div className="list">

            <Link to = {"/prof/access_token="+this.props.token+"/"+this.props.email}><p >Profile</p></Link>
            <p >My Playlists</p>
            <p >Radio</p>
            <Link to = {"/sear/access_token="+this.props.token+"/"+this.props.email}><p >Search</p></Link>

              <div className="navBarr"/>

                <p >My Artists</p>
			          <p >My Artists</p>
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
