import React from "react";
import bg from "../image/1.jpg";
import TextareaAutosize from "react-textarea-autosize";
import "./LetterAndQuote.css";

class LetterAndQuote extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "95%",
          width: "95%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Dancing",
          borderRadius: "25px",
          boxShadow: "3px 6px 10px 10px #585858",
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
      >
        <div style={{ background: "#11111120" }}>
          <TextareaAutosize />
        </div>
      </div>
    );
  }
}

export default LetterAndQuote;
