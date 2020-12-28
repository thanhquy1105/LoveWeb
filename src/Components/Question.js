import logo from '../image/background_love1.png';
import NoButton from './NoButton'
import React from 'react'
import YesButton from './YesButton.js'

class Question extends React.Component {

  CallbackFunction(){
      console.log(456)
    this.props.parentCallback();
        

  }
  render(){
    return (
      <div style = {{display:"flex",justifyContent: "center"}}>
          <img src={logo} className="App-logo" alt="logo" />
          <div className = "question"> Will you be my girlfriend? </div>
          <NoButton/>
          <YesButton parentCallback = {() => this.CallbackFunction()}/>
      </div>
    );
  }
}

export default Question;
