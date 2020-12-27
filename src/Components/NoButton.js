import React  from 'react'
import './NoButton.css'

var x = 60;
var y = 70;

class NoButton extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      hover: false
    };
  }
  
  toggleHover(){
    x = Math.floor(Math.random()*100)
    y = Math.floor(Math.random()*100)
    this.setState({hover: !this.state.hover})
  }
  render(){
     
    var style = {
        left: x + '%',
        top: y + '%'
    }
    return (
        <div>
            <button className="No" onMouseEnter={()=>this.toggleHover()} onMouseLeave={()=>this.toggleHover()} style={style}>
                No
            </button>
      </div>
    );
  }
}
  
  export default NoButton;