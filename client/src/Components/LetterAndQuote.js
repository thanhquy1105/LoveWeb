import React from "react";
import bgStart from "../image/memories/memory12.jpg";
import bgEnd from "../image/memories/memory4.jpg";
import bgMiddle from "../image/memories/memory16.jpg";

import TextareaAutosize from "react-textarea-autosize";
import "./LetterAndQuote.css";
import HTMLFlipBook from "react-pageflip";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <img
          src={props.bg}
          style={{
            position: "absolute",
            objectFit: "cover",
            width: "100%",
            height: "100%",
            boxShadow:
              "inset 0 0 30px 0 rgb(36 10 3 / 50%), -2px 0 5px 2px rgb(0 0 0 / 40%)",
            border: "1px solid #998466",
          }}
        ></img>
        <h2 style={{ zIndex: 0, marginTop: "40px" }}>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

class LetterAndQuote extends React.Component {
  render() {
    return (
      <div className="cover-tag">
        <img
          src={bgMiddle}
          style={{
            position: "absolute",
            filter: "blur(10px)",
          }}
        ></img>
        <div className="cover-letter">
          <HTMLFlipBook
            width={500}
            height={733}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            drawShadow={true}
            maxShadowOpacity={1}
          >
            <PageCover bg={bgStart}>Love Letter Book</PageCover>
            <Page number="1">Page text</Page>
            <Page number="2">Page text</Page>
            <Page number="3">Page text</Page>
            <Page number="4">Page text</Page>
            <PageCover bg={bgEnd}>
              Em không thoát được đâu em iu. Tu bi con ti niu
            </PageCover>
          </HTMLFlipBook>
        </div>
        {/* <div className="cover-letter">
          <TextareaAutosize className="text-area" />
        </div> */}
      </div>
    );
  }
}

export default LetterAndQuote;
