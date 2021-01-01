import React from "react";
import { Row, Col } from "antd";
import Avatar1 from "../image/avatar1.jpg";
import Avatar2 from "../image/avatar2.jpg";
import "antd/dist/antd.css";
import { HeartFilled } from "@ant-design/icons";
import "./Avatar.css";
import Male from "../image/male.png";
import Female from "../image/female.png";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Row style={{ margin: "40px 0 0 0", color: "white" }}>
          <Col span={8}>
            <div style={{ float: "right", padding: "10px 0px" }}>
              <img
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px #f3c568 solid",
                  marginBottom: "5px",
                }}
                src={Avatar1}
                alt="avatar"
              ></img>
              <div style={{ fontSize: "20px" }}>Thành Quý</div>
              <div style={{ display: "flex" }}>
                <img
                  src={Male}
                  alt="gender"
                  style={{ width: "18px", height: "18px", fontSize: "15px" }}
                ></img>
                <div>11/05/1999</div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div
              className="HeartBeat"
              style={{ width: "100%", height: "100%" }}
            >
              <HeartFilled
                style={{
                  color: "#f3c568",
                }}
              />
            </div>
          </Col>
          <Col span={8}>
            <div style={{ float: "left", padding: "10px 0px" }}>
              <img
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px #f3c568 solid",
                  marginBottom: "5px",
                }}
                src={Avatar2}
                alt="avatar"
              ></img>
              <div style={{ fontSize: "20px" }}>Tố Ngọc</div>
              <div style={{ display: "flex" }}>
                <img
                  src={Female}
                  alt="gender"
                  style={{ width: "18px", height: "18px", fontSize: "15px" }}
                ></img>
                <div>14/07/1999</div>
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Avatar;
