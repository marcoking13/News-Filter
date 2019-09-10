import React from 'react';
import SignupLogin from "./containers/signup_login_page.js";
import Navbar from "./components/navbar.js";
import HomePage  from "./containers/home_page.js";
import LandingPage from "./containers/landing_page.js";
import DummyComponent from "./components/dummy_component.js";
import {BrowserRouter,Route,History} from "react-router-dom";
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
      isUserLoggedIn:false
    }
    this.changeURL = this.changeURL.bind(this);
      this.didSpot = this.didSpot.bind(this);
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

            <Route path = "/" exact component = {LandingPage}></Route>
            <Route path = "/home/#"  exact component = {HomePage}></Route>
            <Route path = "/login"  exact component = {SignupLogin}></Route>
          </div>
        </BrowserRouter>

      </div>
    )
  }

}

export default App;
