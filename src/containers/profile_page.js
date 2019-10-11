import React from "react";
import axios from "axios";
import Navbar from "./../components/navbar.js"
import "./../css/profile.css";

class ProfilePage extends React.Component {
  constructor(props){
    super(props);

    

  }


  ChangeInfo(info,infoValue){

    if(info == "email"){
      this.setState({email:infoValue});
      console.log(this.state.email);

    }else{
      this.setState({displayName:infoValue});
      console.log(this.state.email);
    }

  }

  UpdateInfo(display,email){

    var info = {
      email:email,
      displayName:display,
      origin:this.state.originalEmail
    }

    axios.post("/api/accounts",info).then((res)=>{console.log(res)});

  }

  renderFollowerRow(){
    return(
      <div className="row blala followRow">
        <div className="col-1"/>
        <div  className="col-2 ">
          <br />
          <br />
          <img className="w100  rounded left" src="assets/images/profileEx.png"/>
        </div>

        <div className="col-6">
          <p className="cw  mt10">this.state.account.email</p>

          <div className="boxes  row mt10">
            <div className="col-2"/>
            <div className="col-5  w50 pb10 bbRB br1 blala">

              <p className="cw   pt1 followBox text-center"> Followers</p>
              <p className="cw text-center">this.state.account.followers</p>

            </div>
            <div className="col-5 w50 followBox bbRB br1 blala">
              <p className="cw pt1 text-center"> Following</p>
              <p className="cw text-center">this.state.account.followers</p>
            </div>
          </div>
        </div>

        </div>
    )
  }

  renderInput(title,value,type){
    return(
      <div className="row mt5 ">

        <div className="col-1"/>
          <div className="col-3">
            <p className="cw   text-center"> title</p>
          </div>

        <div className="col-6">
            <input className="form-control bInput text-center" onChange = {(e)=>{
              console.log(e.target.value)
              this.ChangeInfo(type,e.target.value)
            }}placeholder="Username"/>
        </div>

        </div>
    )
  }

  renderInputSection(){
    return(
      <div className=" mt5">
        {this.renderInput("Email/Username","l","email")}
        {this.renderInput("Diplay Name","l","display")}

      </div>
    )
  }

  renderUpdateButton(){
    return(
      <div className="row mt5" >
        <div className="col-3"/>
        <div className="col-6">
            <button className="w100   favB inverted blue button ui" onClick = {
              ()=>{
                this.UpdateInfo("his.state.email","this.state.displayName");
              }
            }>Update Account</button>
        </div>
          <div className="col-3"/>
      </div>
    )
  }

  render(){

      return(
        <div className="container-fluid ">

            <Navbar />

            {this.renderFollowerRow()}

            <div className="spacer"/>

            {this.renderInputSection()}

            <div classsName="spacer"/>

            {this.renderUpdateButton()}

        </div>
    )
  }

}




export default ProfilePage;
