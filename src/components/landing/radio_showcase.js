import React from "react";

import MusicalNotes from "./../../images/musical_notes.png";

class RadioShowcase extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="container-fluid h200px">
        <img className="musicalnotes" src = {MusicalNotes} />
          <h3 className="text-center cw">Make Playlists!</h3>
      </div>
    )
  }
}


export default RadioShowcase;
