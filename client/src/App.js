import "./App.css";
import BackgroundHeart from "./Components/BackgroundHeart";
import React from "react";
import Question from "./Components/Question";
import Love from "./Components/Love";
import ParticlesBg from "particles-bg";
import icon from "./Components/icon";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";
import Memories from "./Components/Memories";
import LetterAndQuote from "./Components/LetterAndQuote";
import Music from "./music/Perfect.mp3";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      heightBG: "100%",
      OK: 0,
    };
  }

  componentDidMount() {
    let scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    this.setState({
      heightBG: scrollHeight,
    });
  }

  OnChangeState() {
    this.setState({ page: 1 });
  }

  OnOK() {
    var audio = new Audio(Music);
    audio.play();
    audio.volume = 0.3;
    audio.loop = true;
    this.setState({ OK: 1 });
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
      <div id="App" className="App" style={{ height: "100%" }}>
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
                height: this.state.heightBG,
                position: "absolute",
                pointerEvents: "none",
                zIndex: 1,
              }}
            >
              <ParticlesBg type="custom" config={config} bg={false} />
            </div>
            {this.state.OK === 0 ? (
              <div
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  background: "#ffffff99",
                  zIndex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  fontFamily: "Dancing",
                  fontSize: "calc(15px + 5vmin)",
                }}
              >
                <div>
                  <div style={{ display: "flex" }}>
                    Anh nhớ em rất nhiều. Quay về bên anh em nhé!
                  </div>
                  <Button
                    style={{
                      background: "rgb(51 213 86)",
                      marginRight: "20px",
                      fontSize: "calc(10px + 2vmin)",
                      height: "45px",
                    }}
                    onClick={() => this.OnOK()}
                  >
                    Ùm. Em cũng nhớ anh nhiều
                  </Button>
                  <Button
                    style={{
                      background: "rgb(122 115 115)",
                      marginLeft: "20px",
                      fontSize: "calc(10px + 2vmin)",
                      height: "45px",
                    }}
                  >
                    Em đã bỏ anh rồi. Em vào đây làm gì. hic
                  </Button>
                </div>
              </div>
            ) : null}
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
                  minHeight: "650px",
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
                  minHeight: "650px",
                }}
              >
                <Love></Love>
              </Col>
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
                  minHeight: "650px",
                }}
              >
                <LetterAndQuote />
              </Col>
            </Row>
          </>
        )}
      </div>
    );
  }
}

export default App;
