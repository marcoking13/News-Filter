import React from 'react';
import SignupLogin from "./containers/signup_login_page.js";
import Navbar from "./components/navbar.js";
import HomePage  from "./containers/home_page.js";
import LandingPage from "./containers/landing_page.js";
class App extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      url:"landing"
    }
    this.changeURL = this.changeURL.bind(this);
  }

  changeURL(url){
      this.setState({url:url})
  }

  render(){
      if(this.state.url === "login"){
        return <SignupLogin changeURL = {this.changeURL}/>
      }
      if(this.state.url === "home"){
        return <HomePage changeURL = {this.changeURL}/>
      }
      if(this.state.url === "landing"){
        return <LandingPage changeURL = {this.changeURL}/>
      }
      else{
        return <div />
      }
  }

}

export default App;
