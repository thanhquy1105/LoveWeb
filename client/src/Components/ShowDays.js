import React from "react";
import Wave from "react-wavify";
import { SwatchesPicker } from "react-color";
import { Menu, Dropdown } from "antd";
import "antd/dist/antd.css";
import API from "../utils/API";

class ShowDays extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLovePicker: false,
      showTextPicker: false,
      id: "",
      loveColor: "#03a9f4",
      textColor: "#ffffff",
    };
  }
  componentDidMount() {
    API.getShowDays()
      .then((res) => {
        const info = res.data.info[0];
        this.setState({
          id: info._id,
          loveColor: info.ShowDays_LoveColor,
          textColor: info.ShowDays_TextColor,
        });
      })
      .catch((error) => console.log(error));
  }
  onClickItems(key) {
    if (key.key === "1") {
      this.setState({
        showLovePicker: !this.state.showLovePicker,
      });
    }
    if (key.key === "2") {
      this.setState({
        showTextPicker: !this.state.showTextPicker,
      });
    }
  }

  handleClose = () => {
    this.setState({ showLovePicker: false, showTextPicker: false });
  };

  handleChange = (color) => {
    if (this.state.showLovePicker) {
      let change = {
        ShowDays_LoveColor: color.hex,
      };
      API.putShowDays(this.state.id, change).then(() => {
        this.setState({ loveColor: color.hex });
      });
    }

    if (this.state.showTextPicker) {
      let change = {
        ShowDays_TextColor: color.hex,
      };
      API.putShowDays(this.state.id, change).then(() => {
        this.setState({ textColor: color.hex });
      });
    }
  };

  render() {
    var percent;
    if (this.props.info.days > 1000) {
      percent = this.props.info.days / 10000;
    } else {
      percent = this.props.info.days / 1000;
    }
    percent = Math.floor(250 - percent * 250);
    return (
      <>
        <Dropdown
          overlay={
            <Menu onClick={(key) => this.onClickItems(key)}>
              <Menu.Item key="1">Change love color</Menu.Item>
              <Menu.Item key="2">Change text color</Menu.Item>
              <Menu.Item key="3">Change background</Menu.Item>
            </Menu>
          }
          trigger={["click"]}
        >
          <div
            className="site-dropdown-context-menu"
            style={{
              width: "250px",
              position: "relative",
              marginBottom: "25px",
              fontSize: "24px",
              fontWeight: "bold",
              color: this.state.textColor,
              cursor: "pointer",
            }}
          >
            <svg viewBox="0 0 125 125">
              <mask id="myMask">
                <rect x="0" y="0" width="125" height="125" fill="white" />
                <path
                  d="M3,62.5 A20,20,0,0,1,122,62.5 A20,20,0,0,1,3,62.5 Z"
                  fill="black"
                />
              </mask>
              <circle
                fill={this.state.loveColor}
                cx="62.5"
                cy="62.5"
                r="62.5"
                mask="url(#myMask)"
              />
            </svg>
            <Wave
              style={{
                height: "100%",
                position: "absolute",
                left: 0,
                opacity: 0.2,
              }}
              fill={this.state.loveColor}
              mask="url(#mask)"
              options={{ height: percent, points: 4, speed: 1, amplitude: 12 }}
            >
              <mask id="mask">
                <path
                  d="M0,125 A20,20,0,0,1,250,125
                                    M0,125 A20,20,0,0,0,250,125 z"
                  fill="white"
                />
              </mask>
            </Wave>
            <Wave
              style={{
                height: "100%",
                position: "absolute",
                left: 0,
                opacity: 0.35,
              }}
              fill={this.state.loveColor}
              mask="url(#mask)"
              options={{ height: percent, points: 4, speed: 1, amplitude: 7 }}
            >
              <mask id="mask">
                <path
                  d="M0,125 A20,20,0,0,1,250,125
                                    M0,125 A20,20,0,0,0,250,125 z"
                  fill="white"
                />
              </mask>
            </Wave>
            <div
              style={{
                position: "absolute",
                top: "65px",
                width: "100%",
              }}
            >
              In love
            </div>
            <div
              style={{
                position: "absolute",
                top: "105px",
                width: "100%",
              }}
            >
              {this.props.info.days}
            </div>
            <div
              style={{
                position: "absolute",
                top: "145px",
                width: "100%",
                fontFamily: "Pinyon",
              }}
            >
              Days
            </div>
          </div>
        </Dropdown>
        {this.state.showLovePicker || this.state.showTextPicker ? (
          <div
            style={{
              position: "absolute",
              zIndex: "3",
              width: "300px",
            }}
          >
            <div
              style={{
                width: "300px",
                top: "-30px",
                position: "absolute",
              }}
            >
              <div
                style={{
                  position: "fixed",
                  top: "0px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px",
                }}
                onClick={this.handleClose}
              />
              <SwatchesPicker
                color={this.state.loveColor}
                onChange={this.handleChange}
                width={285}
              />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default ShowDays;
