import React from "react";

import "./../css/login_signup.css";
import axios from "axios";


class SignupDesktop extends React.Component{
  render(){
      var background = "url('assets/images/white.png')";
      return(
          <div className="container-fluid loginPageD2 pb60" style={{background:background}}>
            <div className="row">
              <div className="col-1"/>

              <div className="col-10 jumbotron loginDJumbotron right">
                <div className="logoBoxD">
                  <img className="logoLoginD w5"src="assets/images/logo.png" />
                  <p className="logoNameD ">Music Bender</p>
                </div>
                <div className="row">
                  <div className="col-6 mt5 bbr2 crt offset2">

                        <p className="titleLoginD mt5 f25 tc w">Already a User?</p>
                        <p className="titleLoginD mt5 f13 tc w">Welcome back!<br/>sign in to your account below and get your music!  </p>

                        <button className="loginButtonD ml25 w50 mt10 bw " onClick = {()=>{
                          this.props.ChangeLogin(true);
                        }}> Sign In </button>
                      </div>

                      <div className="col-6 mt5" >

                      <p className="titleLoginD f25 mt5 tc">Create Your Account </p>

                        <div className="loginFormD" >
                            <input
                            onChange={(e)=>{
                              var value = e.target.value;

                              this.props.SetNewUsername(value);
                            }}
                            className="form-control  ml10 tc loginFD" value = {this.props.newUsername}  placeholder = " Enter Username or Email"/>
                            <input
                            onChange={(e)=>{
                              var value = e.target.value;

                              this.props.SetNewPassword(value);
                            }}
                            type="password" className="form-control tc ml10 loginFD" value = {this.props.newPassword}  placeholder = " Enter Password"/>
                            <input
                            onChange={(e)=>{
                              var value = e.target.value;

                              this.props.SetConfirm(value);
                            }}
                            type="password" className="form-control tc ml10 loginFD" value = {this.props.confirm}  placeholder = " Confirm Password"/>



                            </div>

                          <button className="loginButtonD mt75 w50  bw ml25"
                          onClick = {()=>{
                            console.log("Button presssed");
                            this.props.CreateAccount();
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

export default SignupDesktop;
