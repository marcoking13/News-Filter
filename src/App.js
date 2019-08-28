import React from 'react';
import SignupLogin from "./containers/signup_login_page.js";
import Navbar from "./components/navbar.js";
import HomePage  from "./containers/home_page.js";

class App extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      url:"home"
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
      else{
        return <div />
      }
  }

}

export default App;
