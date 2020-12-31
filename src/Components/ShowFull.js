import React from "react";
import { HeartTwoTone } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Row, Col } from "antd";

class ShowFull extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            fontSize: "18px",
            padding: "5px 0",
            width: "300px",
            borderRadius: "15px 15px 0 0",
            backgroundColor: "#00000025",
          }}
        >
          Chung ta da ben nhau...
        </div>
        <div
          style={{
            padding: "2px 0",
            width: "300px",
            backgroundColor: "#00000010",
          }}
        ></div>
        <div
          style={{
            height: "100px",
            width: "300px",
            borderRadius: "0px 0px 15px 15px",
            backgroundColor: "#00000025",
          }}
        >
          <div style={{ width: "100%" }}>
            <HeartTwoTone
              twoToneColor="#e69915"
              style={{ fontSize: "35px", padding: "10px 3px 0 3px" }}
            />
            <HeartTwoTone
              twoToneColor="#e69915"
              style={{ fontSize: "35px ", padding: "10px 3px 0 3px" }}
            />
            <HeartTwoTone
              twoToneColor="#e69915"
              style={{ fontSize: "35px", padding: "10px 3px 0 3px" }}
            />
            <HeartTwoTone
              twoToneColor="#e69915"
              style={{ fontSize: "35px", padding: "10px 3px 0 3px" }}
            />
            <HeartTwoTone
              twoToneColor="#e69915"
              style={{ fontSize: "35px", padding: "10px 3px 0 3px" }}
            />
            <HeartTwoTone
              twoToneColor="#e69915"
              style={{ fontSize: "35px", padding: "10px 3px 0 3px" }}
            />
            <HeartTwoTone
              twoToneColor="#e69915"
              style={{ fontSize: "35px", padding: "10px 3px 0 3px" }}
            />
          </div>
          <Row style={{ width: "95%" }}>
            <Col span={3}>năm</Col>
            <Col span={4}>tháng</Col>
            <Col span={3}>tuần</Col>
            <Col span={4}>ngày</Col>
            <Col span={3}>giờ</Col>
            <Col span={4}>phút</Col>
            <Col span={3}>giây</Col>
          </Row>
          <div style={{ width: "95%", position: "relative" }}>
            <Row style={{ width: "100%", position: "absolute", top: "-52px" }}>
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
          <div style={{ paddingTop: "8px" }}>06/02/2019</div>
        </div>
      </>
    );
  }
}

export default ShowFull;
