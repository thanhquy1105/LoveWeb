import React from "react";
import "./YesButton.css";
import { Button } from "antd";
import { HeartFilled } from "@ant-design/icons";

class YesButton extends React.Component {
  OnClickYes() {
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
          Vào Trong
        </Button>
      </>
    );
  }
}

export default YesButton;
