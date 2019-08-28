import React from "react";

import "./../css/login_signup.css";


class LoginDesktop extends React.Component{
  render(){
      var background = "url('assets/images/white.png')";
      return(
          <div className="container-fluid loginPageD pb60" style={{background:background}}>
            <div className="row">
              <div className="col-1"/>

              <div className="col-10 jumbotron  left loginDJumbotron">
                <div className="logoBoxD">
                  <img className="logoLoginD w5" src="assets/images/logo.png" />
                  <p className="logoNameD" > Music Bender</p>
                </div>
                <div className="row">
                  <div className="col-6 mt5 bbr2">
                    <p className="titleLoginD f25 mt5 tc">Sign in to Music Bender </p>

                      <div className="loginFormD" >
                          <input
                          onChange={(e)=>{
                            var value = e.target.value;

                            this.props.SetUsername(value);
                          }}
                          className="form-control  ml10  loginFD tc " value = {this.props.username}  placeholder = " Enter Username"/>
                          <input
                          onChange={(e)=>{
                            var value = e.target.value;

                            this.props.SetPassword(value);
                          }}
                          type="password" className="form-control ml10 tc loginFD" value = {this.props.password}  placeholder = " Enter Password"/>

                          <p className="forgotPassD tc" >Forgot Password?</p>
                          </div>

                        <button className="loginButtonD mt75 w50  bw ml25"
                        onClick = {()=>{
                          this.props.HandleSubmit();
                        }}
                        > Login </button>

                      </div>

                      <div className="col-6 mt5 crt offset1 " >

                        <p className="titleLoginD mt5 f25 w tc">New User?</p>
                        <p className="titleLoginD mt5 f13 w tc">Create an account and get be able to get the best music </p>

                        <button className="loginButtonD ml25 w50 mt10 bw"onClick = {()=>{
                          this.props.ChangeLogin(false);
                        }}
                          > Create Account </button>

                      </div>
                    </div>
                  </div>

                  <div className="col-1"/>

                  </div>

                </div>
            );
        }
    }

export default LoginDesktop;
