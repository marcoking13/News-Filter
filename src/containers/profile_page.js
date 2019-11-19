import React from "react";
import axios from "axios";

import Navbar from "./../components/navbar/navbar.js"
import Footnote from "./../components/footer/footnote.js";

import "./../css/profile.css";

import Profile from "./../images/profileEx.png";

class ProfilePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      account:null,
      emailChange:null,
      displayNameChange:null
  }

}

  componentDidMount(){
      axios.get("/api/accounts").then((response)=>{
        var data = response.data;
        for(var i = 0; i<data.length;i++){
          if(this.props.user === data[i].id){
            this.setState({account:data[i],emailChange:data[i].email,displayNameChange:data[i].email});
          }
        }
      });
  }

  ChangeInfo(info,infoValue){
    if(info === "email"){
      this.setState({emailChange:infoValue});
    }else{
      this.setState({displayNameChange:infoValue});
    }
  }

  UpdateInfo(display,email){
    var info = {
      email:email,
      displayName:display,
      id:this.props.user
    }
    axios.post("/api/accounts",info).then((res)=>{console.log(res)});
  }

  renderFollowerRow(){

    return(
      <div className="row b0b followRow">
        <div className="col-1"/>

        <div  className="col-2 ">
          <br />
          <br />
          <img alt = "profile" className="w100  rounded left" src={Profile}/>
        </div>

        <div className="col-6">
          <p className="cw  mt10">{this.state.account.email}</p>

          <div className="boxes  row mt10">
            <div className="col-2"/>

            <div className="col-5  w50 pb10 bbRB br1 blala">
              <p className="cw   pt1 followBox text-center"> Followers</p>
              <p className="cw text-center">{this.state.account.followers}</p>
            </div>

            <div className="col-5 w50 followBox bbRB br1 blala">
              <p className="cw pt1 text-center"> Following</p>
              <p className="cw text-center">{this.state.account.followers}</p>
            </div>

          </div>

        </div>

      </div>
    );

  }

  renderInput(title,value,type){
    return(
        <div className="row mt5 ">
            <div className="col-1"/>
            <div className="col-3">
                <p className="cw   text-center"> {title}</p>
            </div>
            <div className="col-6">
                <input className="form-control bInput text-center" value = {value} onChange = {(e)=>{this.ChangeInfo(type,e.target.value)}} placeholder="Username"/>
            </div>
        </div>
    )
  }

  renderInputSection(){
    return(
      <div className=" mt5">
        {this.renderInput("Email/Username",this.state.emailChange,"email")}
        {this.renderInput("Diplay Name",this.state.dislpayNameChange,"display")}
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
                this.UpdateInfo(this.state.emailChange,this.state.emailChange);
              }
            }>Update Account</button>
        </div>
        <div className="col-3"/>
      </div>
    )
  }

  render(){

    if(this.state.account){
      return(
          <div className="container-fluid pb10 ">

            <Navbar token = {window.location.href.slice(39,208)} id = {window.location.href.slice(209,233)}/>

            {this.renderFollowerRow()}

            <div className="spacer"/>

            {this.renderInputSection()}

            <div classsName="spacer"/>

            {this.renderUpdateButton()}

            <div>
              <Footnote />
            </div>
        </div>
    )
    }else{
      return <div />
    }
  }
}




export default ProfilePage;
