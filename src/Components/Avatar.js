import React from "react";
import { Row, Col } from "antd";
import Avatar1 from "../image/avatar1.jpg";
import Avatar2 from "../image/avatar2.jpg";
import "antd/dist/antd.css";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Row>
          <Col span={8}>
            <div style={{ float: "right" }}>
              <img
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px #f3c568 solid",
                }}
                src={Avatar1}
              ></img>
            </div>
          </Col>
          <Col span={8}></Col>
          <Col span={8}>
            <div style={{ float: "left" }}>
              <img
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px #f3c568 solid",
                }}
                src={Avatar2}
              ></img>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Avatar;
