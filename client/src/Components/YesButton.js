import React from "react";
import "./YesButton.css";
import Music from "../music/Perfect.mp3";
import { Button } from "antd";
import { HeartFilled } from "@ant-design/icons";

class YesButton extends React.Component {
  OnClickYes() {
    var audio = new Audio(Music);
    audio.play();
    audio.volume = 0.3;
    audio.loop = true;

    this.props.parentCallback();
  }
  render() {
    return (
      <>
        <Button
          type="primary"
          className="Yes"
          icon={<HeartFilled style={{ color: "#f14350" }} />}
          onClick={() => this.OnClickYes()}
        >
          Yes
        </Button>
      </>
    );
  }
}

export default YesButton;
