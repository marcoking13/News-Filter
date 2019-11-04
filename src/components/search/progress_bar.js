import React from "react";


export default class Bar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      width:0
    }
  }

  LoadingTimer(){
    this.timer = setInterval(()=>{
        this.setState({
          width: this.state.width + (100 / 60)
        });

    },1000)
  }

  render(){
      console.log(this.state.width);
    return(
        <div />
    )
  }
}
