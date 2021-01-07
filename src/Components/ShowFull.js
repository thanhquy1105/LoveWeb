import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { SwatchesPicker } from "react-color";
import { Menu, Dropdown } from "antd";

class ShowFull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeartPicker: false,
      showTextPicker: false,
      heartColor: "#03a9f4",
      textColor: "#ffffff",
      opacity: 1,
      state: 3,
    };
  }
  onClickItems = (key) => {
    if (key.key === "1") {
      this.setState({
        showHeartPicker: !this.state.showHeartPicker,
        showTextPicker: false,
      });
    }
    if (key.key === "2") {
      this.setState({
        showHeartPicker: false,
        showTextPicker: !this.state.showTextPicker,
      });
    }
    if (key.key === "3") {
      this.setState({
        state: 1,
      });
    }
    if (key.key === "4") {
      this.setState({
        state: 2,
      });
    }
    if (key.key === "5") {
      this.setState({
        state: 3,
      });
    }
    if (key.key === "6") {
      this.setState({
        opacity: this.state.opacity === 1 ? 0 : 1,
      });
    }
  };

  handleClose = () => {
    this.setState({
      showHeartPicker: false,
      showTextPicker: false,
    });
  };

  handleChange = (color) => {
    if (this.state.showHeartPicker) this.setState({ heartColor: color.hex });
    if (this.state.showTextPicker) this.setState({ textColor: color.hex });
  };

  render() {
    return (
      <>
        {this.state.showHeartPicker || this.state.showTextPicker ? (
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
                top: "-155px",
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
                  this.state.showHeartPicker
                    ? this.state.heartColor
                    : this.state.textColor
                }
                onChange={this.handleChange}
                width={285}
                height={150}
              />
            </div>
          </div>
        ) : null}
        <Dropdown
          overlay={
            <Menu onClick={(key) => this.onClickItems(key)}>
              <Menu.Item key="1">Change heart color</Menu.Item>
              <Menu.Item key="2">Change text color</Menu.Item>
              <Menu.Item key="3">Left miniature</Menu.Item>
              <Menu.Item key="4">Center</Menu.Item>
              <Menu.Item key="5">Right miniature</Menu.Item>
              <Menu.Item key="6">
                {this.state.opacity ? "No display this" : "Display this"}
              </Menu.Item>
            </Menu>
          }
          placement="topCenter"
          trigger={["click"]}
        >
          <div
            className="site-dropdown-context-menu"
            style={{ opacity: this.state.opacity }}
          >
            {/* Left */}
            <>
              <div
                style={{
                  height: "235px",
                  width: "80px",
                  borderRadius: "15px 15px 15px 15px",
                  backgroundColor: "#00000040",
                  opacity: `${
                    this.state.state === 1 || this.state.state === 3 ? 1 : 0
                  }`,
                  position: "absolute",
                  left: `${this.state.state === 1 ? "3%" : "unset"}`,
                  right: `${this.state.state === 3 ? "3%" : "unset"}`,
                  color: this.state.textColor,
                  transform: "translateY(-50px)",
                }}
              >
                <div style={{ width: "80%" }}>
                  {["Year", "Month", "Week", "Day", "Hour", "Min", "Sec"].map(
                    (k, i) => (
                      <div
                        className="anticon anticon-heart"
                        style={{
                          fontSize: "35px",
                          padding: "0px 0px 0px 0px",
                          display: "flex",
                          justifyContent: "left",
                          alignItems: "center",
                        }}
                      >
                        <svg
                          viewBox="64 64 896 896"
                          style={{ width: "30px", height: "30px" }}
                        >
                          <path
                            d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"
                            fill={this.state.heartColor}
                          ></path>
                        </svg>
                        <div
                          style={{
                            fontSize: "13px",
                            position: "absolute",
                            transform: "translateX(5px)",
                          }}
                        >
                          <div style={{ width: "20px" }}>
                            {i === 0
                              ? this.props.info.years
                              : i === 1
                              ? this.props.info.months
                              : i === 2
                              ? this.props.info.weeks
                              : i === 3
                              ? this.props.info.days
                              : i === 4
                              ? this.props.info.hours
                              : i === 5
                              ? this.props.info.minutes
                              : i === 6
                              ? this.props.info.seconds
                              : null}
                          </div>
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            paddingLeft: "3px",
                          }}
                        >
                          {k}
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    paddingTop: "3px",
                    color: this.state.textColor,
                  }}
                >
                  06/02/2019
                </div>
              </div>
            </>
            {/* Center */}
            <div style={{ opacity: `${this.state.state === 2 ? 1 : 0}` }}>
              <div
                style={{
                  fontSize: "20px",
                  width: "300px",
                  borderRadius: "15px 15px 0 0",
                  backgroundColor: "#00000040",
                  color: this.state.textColor,
                }}
              >
                We have been together...{" "}
              </div>
              <div
                style={{
                  padding: "2px 0",
                  width: "300px",
                  backgroundColor: "#00000020",
                }}
              ></div>
              <div
                style={{
                  height: "100px",
                  width: "300px",
                  borderRadius: "0px 0px 15px 15px",
                  backgroundColor: "#00000040",
                }}
              >
                <div style={{ width: "100%" }}>
                  {[1, 2, 3, 4, 5, 6, 7].map(() => (
                    <div
                      className="anticon anticon-heart"
                      style={{
                        fontSize: "35px",
                        padding: "10px 3px 0px 3px",
                      }}
                    >
                      <svg
                        viewBox="64 64 896 896"
                        style={{ width: "1em", height: "1em" }}
                      >
                        <path
                          d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"
                          fill={this.state.heartColor}
                        ></path>
                      </svg>
                    </div>
                  ))}
                </div>
                <Row style={{ width: "95%", color: this.state.textColor }}>
                  <Col span={3}>Year</Col>
                  <Col span={4}>Month</Col>
                  <Col span={3}>Week</Col>
                  <Col span={4}>Day</Col>
                  <Col span={3}>Hour</Col>
                  <Col span={4}>Min</Col>
                  <Col span={3}>Sec</Col>
                </Row>
                <div
                  style={{
                    width: "95%",
                    position: "relative",
                    color: this.state.textColor,
                  }}
                >
                  <Row
                    style={{
                      width: "100%",
                      position: "absolute",
                      top: "-52px",
                    }}
                  >
                    <Col style={{ left: "1px" }} span={3}>
                      {this.props.info.years}
                    </Col>
                    <Col style={{ left: "1px" }} span={4}>
                      {this.props.info.months}
                    </Col>
                    <Col span={3}>{this.props.info.weeks}</Col>
                    <Col span={4}>{this.props.info.days}</Col>
                    <Col style={{ left: "-1px" }} span={3}>
                      {this.props.info.hours}
                    </Col>
                    <Col style={{ left: "-1px" }} span={4}>
                      {this.props.info.minutes}
                    </Col>
                    <Col style={{ left: "-2px" }} span={3}>
                      {this.props.info.seconds}
                    </Col>
                  </Row>
                </div>
                <div style={{ paddingTop: "8px", color: this.state.textColor }}>
                  06/02/2019
                </div>
              </div>
            </div>
          </div>
        </Dropdown>
      </>
    );
  }
}

export default ShowFull;
