import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import cookie from "react-cookies";
import axios from "axios";

import HomePage  from "./containers/home_page.js";
import LandingPage from "./containers/landing_page.js";
import SearchPage from "./containers/search_page";
import ProfilePage from "./containers/profile_page";
import RadioPage from "./containers/radio_page";

class App extends React.Component {

  constructor(props){

    super(props);
    var url = "landing";
    if(cookie.load("url",{path:"/"})){
        url = cookie.load("url",{path:"/"});
    }
    this.state = {
      url:url,
      isSpotify:true,
      token:null,
      user:null,
      isUserLoggedIn:false
    }
      this.changeURL = this.changeURL.bind(this);
      this.UpdateToken = this.UpdateToken.bind(this);
      this.UpdateUser = this.UpdateUser.bind(this);
      this.didSpot = this.didSpot.bind(this);

  }

  UpdateToken(token){
    axios.post("/api/token",{token:token});
    this.setState({token:token});

  }

  UpdateUser(user){
    this.setState({user:user});
  }

  changeURL(url){
      cookie.remove("url",{path:"/"});
      cookie.save("url",url,{path:"/"});
      this.setState({url:url})
  }

  didSpot(bool){
    this.setState({didSpotify:bool});
  }

  render(){

    return(
      <div>
        <BrowserRouter>
          <div>
            <Route path = "/" exact component = {LandingPage} />
            <Route path = "/home/:accessToken/:email" render={props => <HomePage UpdateToken = {this.UpdateToken} UpdateUser  = {this.UpdateUser} />} />
            <Route path = "/prof/:accessToken/:email" render={props => <ProfilePage UpdateToken = {this.UpdateToken} user = {this.state.user} token={this.state.token} />} />
            <Route path = "/sear/:accessToken/:email" render={props => <SearchPage {...props} UpdateToken = {this.UpdateToken} token={this.state.token} />} />} />
            <Route path = "/mixr/:accessToken/:email" render = {props => <RadioPage {...props} UpdateToken = {this.UpdateToken} token={this.state.token}/>} />
          </div>
        </BrowserRouter>

      </div>
    )
  }

}

export default App;
