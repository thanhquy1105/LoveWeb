import './App.css';
import BackgroundHeart from './Components/BackgroundHeart'
import Clock from './Components/Clock'
import React from 'react'
import Question from './Components/Question';
import Love from './Components/Love'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page : 0,
    }
  }

  OnChangeState(){
    this.setState({page : 1})
  }

  render(){
    return (
      
      <div className="App">
        <header className="App-header">
          <BackgroundHeart/>
          {(this.state.page === 0) && <Question parentCallback = {() => this.OnChangeState()}></Question>}
          {(this.state.page !== 0) && <Love></Love>}
         
        </header>
      </div>
    );
  }
}

export default App;
