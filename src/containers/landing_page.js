import React from "react";

import "./../css/search.css";
import "./../css/landing.css";


import Navbar from "./../components/landing/navbar.js";
import NavbarMobile from "./../components/landing/mobile_navbar.js";

import Features from "./../components/landing/features.js";
import MobileFeatures from "./../components/landing/mobile_features.js";

import Register from "./../components/landing/register.js";

import Showcase from "./../components/landing/showcase.js";
import ShowcaseMobile from "./../components/landing/mobile_showcase.js";

import Albums from "./../components/landing/albums.js";
import MobileAlbums from "./../components/landing/mobile_albums.js";

import Footnote from "./../components/footer/footnote.js";
import FootnoteMobile from "./../components/footer/footnote_mobile.js";

class LandingPage extends React.Component {

  renderDesktopPage(){
    return(
        <div className="pb10">
            <Navbar />
          <div>
            <Showcase />
          </div>
          <div>
            <Albums offset = {0} title = "Newest Artists"/>
            <Albums offset = {5} title = "Most Popular"/>
          </div>
          <div className="bbBW pb2_5">
            <Features/>
          </div>

          <div className="bbBW pb2_5">
            <Register />
          </div>
          <br />
          <br />
          <br/>
          <br/> 
            <Footnote/>
        </div>
    );
  }

  renderMobilePage(){
    return(
        <div className="pb10">
            <NavbarMobile />
          <div>
            <ShowcaseMobile />
          </div>
          <div>
            <MobileAlbums offset = {0} title = "Newest Artists"/>
            <MobileAlbums offset = {5} title = "Most Popular"/>
          </div>
          <div className="bbBW pb2_5">
            <MobileFeatures/>
          </div>

          <div className="bbBW pb2_5">
            <Register />
          </div>
          <br />
          <br />
          <br/>
          <br/>
          <FootnoteMobile />
        </div>
    );
  }
  // mae the navbar with bootstrap features and sematic ui
  render(){

      if(window.innerWidth <= 580){
        return <div>{this.renderMobilePage()}</div>
      }else{
       return <div>{this.renderDesktopPage()}</div>
      }
  }
}

export default LandingPage;
