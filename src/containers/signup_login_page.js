import React from "react";

import LoginDesktop from "./../components/login_desktop.js";
import SignupDesktop from "./../components/signup_desktop.js";

import "./../css/login_signup.css";

import axios from "axios";

class SignupLogin extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password:"",
      newUsername:"",
      newPassword:"",
      confirm:"",
      login:false
    }

    this.SetPassword = this.SetPassword.bind(this);
    this.SetUsername = this.SetUsername.bind(this);
    this.SetNewUsername = this.SetNewUsername.bind(this);
    this.SetNewPassword = this.SetNewPassword.bind(this);
    this.SetConfirm = this.SetConfirm.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.ChangeLogin = this.ChangeLogin.bind(this);
    this.CreateAccount = this.CreateAccount.bind(this);

  }

  ChangeLogin(bool){
    this.setState({login:bool})
  }

  SetPassword(data){
    this.setState({password:data});
  }

  SetUsername(data){
    this.setState({username:data});
  }

  SetConfirm(data){
    this.setState({confirm:data});
  }

  SetNewPassword(data){
    this.setState({newPassword:data});
  }

  SetNewUsername(data){
    this.setState({newUsername:data});
  }

  CreateAccount(){
    if(this.state.confirm == this.state.newPassword){

      var newAccount = {
        username:this.state.newUsername,
        password: this.state.newPassword
      }

      axios.post("/api/accounts",newAccount).then((res)=>{console.log(res)});

      this.props.changeURL("home");

    }else{
      alert("Passwords do not Match");
    }
  }

  HandleSubmit(){

    var account = {
      username:this.state.username,
      password:this.state.password
    }

    axios.get("/api/accounts").then((response)=>{

      var data = response.data;
      var c = 0;

      data.map((loopedAccount)=>{

        if(loopedAccount.username === account.username && loopedAccount.password === account.password){
            return this.props.changeURL("home");
        }

        c++;
      });

        if(c >= data.length){
          alert("Wrong Password or Username");
        }

    });

  }

  render(){
      if(this.state.login){
        return <LoginDesktop  ChangeLogin = {this.ChangeLogin} HandleSubmit = {this.HandleSubmit} SetPassword = {this.SetPassword} SetUsername = {this.SetUsername} username = {this.state.username} password = {this.state.password} />
      }
      else{
        return <SignupDesktop  ChangeLogin = {this.ChangeLogin} CreateAccount = {this.CreateAccount} SetNewPassword = {this.SetNewPassword} confirm = {this.state.confirm} SetNewUsername = {this.SetNewUsername} SetConfirm = {this.SetConfirm} newUsername = {this.state.newUsername} newPassword = {this.state.newPassword} />
      }
    }
}


export default SignupLogin;
