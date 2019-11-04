import React from "react";


export default class Bar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      width:0,
      moving:false
    }
  }

  LoadingTimer(){
    if(moving){
      this.timer = setInterval(()=>{
          this.setState({
            width: this.state.width + (100 / 60)
          });

        },1000);
    }else{
      clearInterval(this.timer);
      this.setState({width:1});
    }
  }

  render(){
      console.log(this.state.width);
    return(
      <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:this.state.width + "%"}}></div>
      </div>
    )
  }
}
