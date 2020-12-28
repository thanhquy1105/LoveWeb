import React  from 'react'
import './YesButton.css'
import Music from '../music/Perfect.mp3'

var style = {
 left : '40%',
 top : '40%'
}

class YesButton extends React.Component {
  
  OnClickYes() {
    var audio = new Audio(Music);
    audio.play();
    audio.volume = 0.3;
    audio.loop = true;
    
    console.log(123)
    this.props.parentCallback();
  }
  render(){
    return (
        <div>
            <button className="Yes" onClick = {()=>this.OnClickYes()} style = {style}>
                Yes
            </button>
      </div>
    );
  }
}
  
  export default YesButton;