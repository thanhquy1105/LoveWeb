import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { Row, Col } from "antd";
import "./ModalAdd.css";
import Button from "react-bootstrap/Button";
import TextareaAutosize from "react-textarea-autosize";
import API from "../utils/API";
import SubmitButton from "./SubmitButton";

const ModalAdd = (props) => {
  const [visible, setVisible] = useState(true);
  const [file, setFile] = useState(null);
  const [linkFile, setLinkFile] = useState(null);
  const [date, setDate] = useState("");
  const [my, setMy] = useState("");
  const [your, setYour] = useState("");

  const myRef = useRef();

  const clickCancelAdd = () => {
    setVisible(false);
    props.clickCancelAdd();
  };
  const saveFile = () => {
    const formData = new FormData();
    formData.append("file", linkFile);
    formData.append("upload_preset", "Memories");
    try {
      API.postImage(formData).then((res) => {
        const data = {
          ImageUrl: res.data.secure_url,
          Date: date,
          MyFeel: my,
          YourFeel: your,
        };
        API.insertImage(data).then(() => {
          props.clickOKAdd();
        });
      });
    } catch (err) {
      console.error(err);
    } finally {
    }
  };

  const clickAddAdd = () => {
    if (file && date && my && your) {
      saveFile();
      return true;
    } else {
      return false;
    }
  };
  const haveTarget = document.getElementById("App");
  const openInput = () => {
    myRef.current.click();
  };
  const setOpenFile = (e) => {
    try {
      setFile(URL.createObjectURL(e.target.files[0]));
      setLinkFile(e.target.files[0]);
    } catch {}
  };
  return ReactDOM.createPortal(
    <Rodal
      className="rodal-dialog-add"
      visible={visible}
      onClose={clickCancelAdd}
      animation="zoom"
      closeOnEsc={false}
      closeMaskOnClick={false}
    >
      <div>Add Our Own Memories</div>
      <Row className="RowAddTool">
        <Col className="image" xs={24} sm={24} md={24} lg={12} xl={12}>
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#f1f1f1",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              cursor: "pointer",
            }}
          >
            {file !== null ? (
              <>
                <img
                  src={file}
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    filter: "blur(30px)",
                  }}
                  alt="img"
                ></img>

                <img
                  src={file}
                  style={{
                    objectFit: "scale-down",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                  alt="img"
                ></img>
                <button
                  onClick={() => {
                    setFile(null);
                    setLinkFile(null);
                  }}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    borderRadius: "100%",
                    fontFamily: "cursive",
                    fontSize: "12px",
                  }}
                >
                  X
                </button>
              </>
            ) : (
              <>
                <div
                  onClick={openInput}
                  style={{
                    width: "70%",
                    height: "60%",
                    background: "#f4f4f4",
                    border: "2px gray dashed",
                  }}
                >
                  Click here to select image
                </div>
              </>
            )}
            <input
              type="file"
              style={{
                display: "none",
              }}
              onChange={setOpenFile}
              ref={myRef}
            ></input>
          </div>
        </Col>
        <Col className="data" xs={24} sm={24} md={24} lg={12} xl={12}>
          <div
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div style={{ width: "100%" }}>
              <input
                placeholder="Date"
                style={{
                  width: "60%",
                  border: "none",
                  borderBottom: "1px black solid",
                  outline: "none",
                  textAlignLast: "center",
                  background: "none",
                }}
                value={date}
                onChange={(event) => setDate(event.target.value)}
              ></input>
              <div style={{ display: "flex", marginTop: "15px" }}>
                <div className="my">Anh:</div>
                <TextareaAutosize
                  minRows={3}
                  maxRows={6}
                  className="editMy"
                  value={my}
                  onChange={(event) => setMy(event.target.value)}
                  placeholder="What did you feel?"
                ></TextareaAutosize>
              </div>
              <div
                style={{
                  display: "inline-block",
                  width: "100%",
                  marginTop: "15px",
                }}
              >
                <div className="your">:Em</div>
                <TextareaAutosize
                  minRows={3}
                  maxRows={6}
                  autoFocus
                  className="editYour"
                  onChange={(event) => setYour(event.target.value)}
                  value={your}
                  placeholder="What did you feel?"
                ></TextareaAutosize>
              </div>
              <Button
                variant="warning"
                style={{
                  width: "70px",
                  margin: "5px 20px 0px 10px",
                  float: "right",
                }}
                onClick={clickCancelAdd}
              >
                Cancel
              </Button>
              <SubmitButton clickAddAdd={clickAddAdd}></SubmitButton>
            </div>
          </div>
        </Col>
      </Row>
    </Rodal>,
    haveTarget
  );
};

export default ModalAdd;
