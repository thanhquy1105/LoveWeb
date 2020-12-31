import React  from 'react'
import './NoButton.css'

var x = 55;
var y = 40;

class NoButton extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      hover: false
    };
  }
  
  toggleHover(){
    x = Math.floor(Math.random()*97)
    y = Math.floor(Math.random()*97)
    this.setState({hover: !this.state.hover})
  }
  render(){
     
    var style = {
        left: x + '%',
        top: y + '%'
    }
    return (
        <>
            <button className="No" onMouseEnter={()=>this.toggleHover()} onMouseLeave={()=>this.toggleHover()} style={style}>
                No
            </button>
      </>
    );
  }
}
  
  export default NoButton;