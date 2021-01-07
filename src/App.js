import "./App.css";
import BackgroundHeart from "./Components/BackgroundHeart";
import React from "react";
import Question from "./Components/Question";
import Love from "./Components/Love";
import ParticlesBg from "particles-bg";
import icon from "./Components/icon";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import Memories from "./Components/Memories";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  OnChangeState() {
    this.setState({ page: 1 });
  }

  render() {
    let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-50, 50],
      alpha: [1, 0],
      scale: [0.1, 0.9],
      body: icon,
      position: "all",
      //color: ["random", "#ff0000"],
      cross: "dead",
      random: 10,
    };
    return (
      <div className="App" style={{ height: "100%" }}>
        {this.state.page === 0 && (
          <div style={{ overflow: "hidden", height: "100%" }}>
            <BackgroundHeart />
            <Question parentCallback={() => this.OnChangeState()}></Question>
          </div>
        )}

        {this.state.page !== 0 && (
          <>
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                pointerEvents: "none",
                zIndex: 1,
              }}
            >
              {/* <ParticlesBg type="custom" config={config} bg={false} /> */}
            </div>
            <Row style={{ height: "100%" }}>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={8}
                xl={8}
                style={{
                  height: "100%",
                  zIndex: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Memories></Memories>
              </Col>
              <Col
                className="Card"
                xs={24}
                sm={24}
                md={24}
                lg={8}
                xl={8}
                style={{
                  height: "100%",
                  zIndex: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <Love></Love> */}
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}></Col>
            </Row>
          </>
        )}
      </div>
    );
  }
}

export default App;
