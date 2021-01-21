import React from "react";
import { Row, Col } from "antd";
import Avatar1 from "../image/avatar1.jpg";
import Avatar2 from "../image/avatar2.jpg";
import "antd/dist/antd.css";
import { HeartFilled } from "@ant-design/icons";
import "./Avatar.css";
import Male from "../image/male.png";
import Female from "../image/female.png";
import { SwatchesPicker } from "react-color";
import { Menu, Dropdown } from "antd";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLeftBorderPicker: false,
      showRightBorderPicker: false,
      showLeftTextPicker: false,
      showRightTextPicker: false,
      showCenterPicker: false,
      heartColor: "#03a9f4",
      leftBorderColor: "#03a9f4",
      rightBorderColor: "#03a9f4",
      leftTextColor: "#ffffff",
      rightTextColor: "#ffffff",
    };
  }

  onClickItems = (key) => {
    if (key.key === "1") {
      this.setState({
        showLeftBorderPicker: !this.state.showLeftBorderPicker,
        showRightBorderPicker: false,
        showLeftTextPicker: false,
        showRightTextPicker: false,
        showCenterPicker: false,
      });
    }
    if (key.key === "2") {
      this.setState({
        showLeftBorderPicker: false,
        showRightBorderPicker: false,
        showLeftTextPicker: !this.state.showLeftTextPicker,
        showRightTextPicker: false,
        showCenterPicker: false,
      });
    }
    if (key.key === "4") {
      this.setState({
        showLeftBorderPicker: false,
        showRightBorderPicker: !this.state.showRightBorderPicker,
        showLeftTextPicker: false,
        showRightTextPicker: false,
        showCenterPicker: false,
      });
    }
    if (key.key === "5") {
      this.setState({
        showLeftBorderPicker: false,
        showRightBorderPicker: false,
        showLeftTextPicker: false,
        showRightTextPicker: !this.state.showRightTextPicker,
        showCenterPicker: false,
      });
    }
  };

  handleClickHeart = (color) => {
    this.setState({
      showLeftBorderPicker: false,
      showRightBorderPicker: false,
      showLeftTextPicker: false,
      showRightTextPicker: false,
      showCenterPicker: !this.state.heart,
    });
  };
  handleClose = () => {
    this.setState({
      showLeftBorderPicker: false,
      showRightBorderPicker: false,
      showLeftTextPicker: false,
      showRightTextPicker: false,
      showCenterPicker: false,
    });
  };

  handleChange = (color) => {
    if (this.state.showLeftBorderPicker)
      this.setState({ leftBorderColor: color.hex });
    if (this.state.showLeftTextPicker)
      this.setState({ leftTextColor: color.hex });
    if (this.state.showRightBorderPicker)
      this.setState({ rightBorderColor: color.hex });
    if (this.state.showRightTextPicker)
      this.setState({ rightTextColor: color.hex });
    if (this.state.showCenterPicker) this.setState({ heartColor: color.hex });
  };

  render() {
    return (
      <>
        {this.state.showLeftBorderPicker ||
        this.state.showLeftTextPicker ||
        this.state.showRightBorderPicker ||
        this.state.showRightTextPicker ||
        this.state.showCenterPicker ? (
          <div
            style={{
              position: "absolute",
              zIndex: "3",
              width: "300px",
              height: "150px",
            }}
          >
            <div
              style={{
                width: "300px",
                height: "150px",
                top: "-120px",
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
                color={
                  this.state.showLeftBorderPicker
                    ? this.state.leftBorderColor
                    : this.state.showLeftTextPicker
                    ? this.state.leftTextColor
                    : this.state.showRightBorderPicker
                    ? this.state.rightBorderColor
                    : this.state.showRightTextPicker
                    ? this.state.rightTextColor
                    : this.state.showCenterPicker
                    ? this.state.heartColor
                    : null
                }
                onChange={this.handleChange}
                width={285}
                height={150}
              />
            </div>
          </div>
        ) : null}
        <Row style={{ margin: "40px 0 0 0" }}>
          <Col span={8}>
            <Dropdown
              overlay={
                <Menu onClick={(key) => this.onClickItems(key)}>
                  <Menu.Item key="1">Change border color</Menu.Item>
                  <Menu.Item key="2">Change text color</Menu.Item>
                  <Menu.Item key="3">Change avatar</Menu.Item>
                </Menu>
              }
              placement="topCenter"
              trigger={["click"]}
            >
              <div
                className="site-dropdown-context-menu"
                style={{
                  float: "right",
                  padding: "10px 0px",
                  cursor: "pointer",
                }}
              >
                <img
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: `4px ${this.state.leftBorderColor} solid`,
                    marginBottom: "5px",
                  }}
                  src={Avatar1}
                  alt="avatar"
                ></img>
                <div
                  style={{ fontSize: "20px", color: this.state.leftTextColor }}
                >
                  Thành Quý
                </div>
                <div style={{ display: "flex" }}>
                  <img
                    src={Male}
                    alt="gender"
                    style={{ width: "18px", height: "18px", fontSize: "15px" }}
                  ></img>
                  <div style={{ color: this.state.leftTextColor }}>
                    11/05/1999
                  </div>
                </div>
              </div>
            </Dropdown>
          </Col>
          <Col span={8}>
            <div
              className="HeartBeat"
              style={{ width: "100%", height: "100%" }}
            >
              <HeartFilled
                style={{
                  color: this.state.heartColor,
                }}
                onClick={this.handleClickHeart}
              />
            </div>
          </Col>
          <Col span={8}>
            <Dropdown
              overlay={
                <Menu onClick={(key) => this.onClickItems(key)}>
                  <Menu.Item key="4">Change border color</Menu.Item>
                  <Menu.Item key="5">Change text color</Menu.Item>
                  <Menu.Item key="6">Change avatar</Menu.Item>
                </Menu>
              }
              placement="topCenter"
              trigger={["click"]}
            >
              <div
                className="site-dropdown-context-menu"
                style={{
                  float: "left",
                  padding: "10px 0px",
                  cursor: "pointer",
                }}
              >
                <img
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: `4px ${this.state.rightBorderColor} solid`,
                    marginBottom: "5px",
                  }}
                  src={Avatar2}
                  alt="avatar"
                ></img>
                <div
                  style={{ fontSize: "20px", color: this.state.rightTextColor }}
                >
                  Tố Ngọc
                </div>
                <div style={{ display: "flex" }}>
                  <img
                    src={Female}
                    alt="gender"
                    style={{ width: "18px", height: "18px", fontSize: "15px" }}
                  ></img>
                  <div style={{ color: this.state.rightTextColor }}>
                    14/07/1999
                  </div>
                </div>
              </div>
            </Dropdown>
          </Col>
        </Row>
      </>
    );
  }
}

export default Avatar;