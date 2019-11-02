import React from 'react';

import Navbar from "./components/navbar.js";
import HomePage  from "./containers/home_page.js";
import LandingPage from "./containers/landing_page.js";
import SearchBar from "./components/search_bar.js";
import SearchPage from "./containers/search_page";
import ProfilePage from "./containers/profile_page";

import {BrowserRouter,Route,Link} from "react-router-dom";
import cookie from "react-cookies";
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
      isUserLoggedIn:false
    }
      this.changeURL = this.changeURL.bind(this);
      this.UpdateToken = this.UpdateToken.bind(this);
      this.didSpot = this.didSpot.bind(this);

  }

  UpdateToken(token){
    console.log(token);
    this.setState({token:token});
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
    console.log(this.state.token);
    return(
      <div>
        <BrowserRouter>
          <div>

            <Route path = "/" exact component = {LandingPage}></Route>
            <Route path = "/home/:accessToken/:email" render={props => <HomePage UpdateToken = {this.UpdateToken}  />} ></Route>
            <Route path = "/prof/:accessToken/:email" render={props => <ProfilePage UpdateToken = {this.UpdateToken}  />} ></Route>
            <Route path = "/sear/:accessToken/:email"  render={(props) => <SearchPage {...props} token={this.state.token} />} />} />
            <Route path = "/search2" exact component = {SearchBar} />
          </div>
        </BrowserRouter>

      </div>
    )
  }

}

export default App;
