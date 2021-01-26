import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Edit from "../image/icon/edit.png";
import Zoom from "../image/icon/zoom.png";
import Add from "../image/icon/add.png";
import Arrow from "../image/icon/arrow.png";
import "./MemoriesButton.css";
import Modal from "./Modal";

const MemoriesButton = (props) => {
  const [onZoom, setOnZoom] = useState(false);
  const [status, setStatus] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [onAdd, setOnAdd] = useState(false);
  const [onSave, setSave] = useState(false);
  const clickOpenTool = () => {
    setStatus(!status);
  };
  const clickEdit = () => {
    if (onEdit || onAdd || onZoom) return;
    setOnEdit(true);
    props.clickEditButton();
  };
  const SaveEdit = () => {
    setSave(true);
    let res = props.clickSaveButton();
    if (res === true) {
      setOnEdit(false);
    } else {
      setOnEdit(true);
    }
    setSave(false);
  };
  const CancelEdit = () => {
    props.clickCancelButton();
    setOnEdit(false);
  };
  const clickOKAdd = () => {
    setOnAdd(false);
    props.clickOkAddButton();
  };
  const clickCancelAdd = () => {
    setOnAdd(false);
  };
  return (
    <>
      <div className="MemoBut">
        <div className={`text ${status ? "left" : ""}`}>Memories</div>
        <ButtonGroup
          className={`tool1 ${status ? "transition" : "apper"}`}
          size="sm"
        >
          <Button
            onClick={() => {
              onEdit || onAdd ? setOnZoom(false) : setOnZoom(true);
            }}
            title="zoom in"
            style={{ background: "none" }}
          >
            <img src={Zoom} style={{ width: "20px" }} alt="1"></img>
          </Button>
          <Button
            onClick={clickEdit}
            title="edit text"
            style={{ background: "none" }}
          >
            <img src={Edit} style={{ width: "20px" }} alt="1"></img>
          </Button>
          <Button
            onClick={() => {
              onEdit || onZoom ? setOnAdd(false) : setOnAdd(true);
            }}
            title="add image"
            style={{ background: "none" }}
          >
            <img src={Add} style={{ width: "20px" }} alt="1"></img>
          </Button>
        </ButtonGroup>
        <div className="block"></div>
        <ButtonGroup
          className="tool2"
          size="sm"
          style={{
            position: "absolute",
            right: "10px",
            top: "8px",
            display: "none",
          }}
        >
          <Button
            title="open tool"
            style={{ background: "none", padding: 0, height: "32px" }}
            onClick={clickOpenTool}
          >
            <img
              className={`image ${status ? "rotate" : ""}`}
              src={Arrow}
              style={{ width: "20px" }}
              alt="1"
            ></img>
          </Button>
        </ButtonGroup>
        {props.onEdit ? (
          <ButtonGroup
            className={`tool3 ${onEdit ? "Edit" : ""}`}
            size="sm"
            style={{
              position: "absolute",
              right: "10px",
              top: "60px",
              display: "none",
            }}
          >
            <Button
              title="Save"
              variant="success"
              style={{ padding: 0, height: "32px", width: "40px" }}
              onClick={onSave ? null : SaveEdit}
              disabled={onSave}
            >
              {onSave ? "..." : "Save"}
            </Button>
            <Button
              title="Cancel"
              variant="warning"
              style={{ padding: 0, height: "32px", width: "40px" }}
              onClick={CancelEdit}
            >
              Cancel
            </Button>
          </ButtonGroup>
        ) : null}
      </div>
      {onAdd ? (
        <Modal clickOKAdd={clickOKAdd} clickCancelAdd={clickCancelAdd} />
      ) : null}
    </>
  );
};

export default MemoriesButton;
