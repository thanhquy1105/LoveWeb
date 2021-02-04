import logo from "../image/background_love1.png";
import NoButton from "./NoButton";
import React from "react";
import YesButton from "./YesButton.js";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import BrokenHeart from "../image/brokenHeart.png";
import "./NoButton.css";

var mystyle, x, y;
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 0,
      hover: false,
    };
  }

  CallbackFunction() {
    this.props.parentCallback();
  }
  toggleHoverNo() {
    x = Math.floor(Math.random() * 90);
    y = Math.floor(Math.random() * 90);
    mystyle = {
      left: x + "%",
      top: y + "%",
      position: "absolute",
    };
    this.setState({ state: 1, hover: !this.state.hover });
  }
  render() {
    return (
      // style={{ display: "flex", justifyContent: "center" }}
      <div style={{ alignSelf: "center", textAlign: "-webkit-center" }}>
        <div
          style={{
            display: "grid",
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              maxWidth: "100%",
              maxHeight: "100vh",
              margin: "auto",
              zIndex: 1,
            }}
          />
          <div className="question" style={{ width: "100%" }}>
            I love you. Do you love me?
          </div>
        </div>
        <div style={{ width: "100%", height: "100%", position: "absolute" }}>
          <Row style={{ height: "100%" }}>
            <Col span={6}></Col>
            <Col span={6} style={{ alignSelf: "center" }}>
              <YesButton parentCallback={() => this.CallbackFunction()} />
            </Col>
            <Col span={6} style={{ alignSelf: "center" }}>
              {this.state.state === 0 ? (
                <NoButton changeSate={() => this.toggleHoverNo()} />
              ) : (
                <></>
              )}
            </Col>
            <Col span={6}></Col>
          </Row>
          {this.state.state === 1 ? (
            <button
              className="No"
              onMouseEnter={() => this.toggleHoverNo()}
              onMouseLeave={() => this.toggleHoverNo()}
              onMouseMove={() => this.toggleHoverNo()}
              style={mystyle}
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
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default Question;
