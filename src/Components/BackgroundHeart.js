import React from "react";
import "./BackgroundHeart.css";

let hearts = [
  { url: require("../image/1.png").default },
  { url: require("../image/2.png").default },
  { url: require("../image/3.png").default },
];

class BackgroundHeart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    var random = Math.floor(Math.random() * 10) % 3;
    var left = Math.floor(Math.random() * 97);
    var width = Math.floor(Math.random() * 10) + 35;
    if (random === 2) width -= 15;
    var mystyle = {
      left: left + "%",
      width: width + "px",
      height: width + "px",
    };
    var myObject = {
      // index: this.state.list? (this.state.list.length) : 0,
      url: hearts[random].url,
      style: mystyle,
    };

    if (this.state.list.length < 80) {
      this.setState({
        list: this.state.list.concat(myObject),
      });
    }
  }

  render() {
    const lists = this.state.list.map(function (l, index) {
      return (
        <img
          src={l.url}
          className="Heart"
          alt="Heart"
          key={index}
          style={l.style}
        />
      );
    });
    return <div>{lists}</div>;
  }
}

export default BackgroundHeart;
