import React from "react";

import "./../../css/search.css";

class SearchBarMusic extends React.Component {
  render(){
    return(


        <div className='row'>
          <div className="col-2"></div>
          <div className="col-10">
            <form>
              <input className="form-control w100" placeholder = "Search Artist"  onChange = {(e)=>{
                  this.props.changeData(e.target.value);
                  }}style={{background:"#262626",color:"white",width:"80%",textAlign:"center",float:"left"}}/>
                <button className="btn btn-primary bb bwH "
                  onClick  = {(e)=>{
                  e.preventDefault();
                  this.props.Search(this.props.data);
                }}
                >Search</button>
              </form>
              </div>

            </div>



    )
  }

}




export default SearchBarMusic;
