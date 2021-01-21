import React from "react";
import "./NoButton.css";
import BrokenHeart from "../image/brokenHeart.png";

class NoButton extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     hover: false,
  //   };
  // }

  toggleHover() {
    this.props.changeSate();
  }
  render() {
    return (
      <>
        <button
          className="No"
          onMouseEnter={() => this.toggleHover()}
          onMouseLeave={() => this.toggleHover()}
          onMouseMove={() => this.toggleHover()}
        >
          <img
            src={BrokenHeart}
            alt="brokenHeart"
            style={{
              width: "14px",
              marginBottom: "4px",
              marginRight: "8px",
            }}
          />
          No
        </button>
      </>
    );
  }
}

export default NoButton;
