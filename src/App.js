import logo from './image/background_love1.png';
import './App.css';
import BackgroundHeart from './Components/BackgroundHeart'
import Clock from './Components/Clock'
import NoButton from './Components/NoButton'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Clock></Clock> */}
        <BackgroundHeart/>
        <div className = "question"> Will you be my girlfriend? </div>
        <NoButton/>
      </header>
    </div>
  );
}

export default App;
