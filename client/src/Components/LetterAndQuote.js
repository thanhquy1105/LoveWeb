import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./LetterAndQuote.css";
import API from "../utils/API";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "react-custom-scroll/dist/customScroll.css";
import Book from "./Book";
import Carousel from "react-bootstrap/Carousel";

class LetterAndQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      content: "",
      onAdd: false,
      totalPage: 0,
      BackgroundUrl: "",
      Quote: [],
    };
  }

  componentDidMount() {
    API.getLetter().then((res) => {
      let data = res.data.info[0];
      this.setState({
        BackgroundUrl: data.BackgroundUrl,
        Quote: data.Quote,
      });
    });
  }

  onClickAddButton() {
    this.setState({ onAdd: true });
  }

  onClickOk() {
    //API
    if (this.state.title && this.state.date && this.state.content) {
      let temp = {
        imageUrl: "",
        title: this.state.title,
        date: this.state.date,
        content: this.state.content,
      };

      let data = {
        TotalPage: this.state.totalPage + 1,
        Letter: temp,
      };

      API.updateLetter(data).then(() => {
        this.setState({
          onAdd: false,
          title: "",
          date: "",
          content: "",
          totalPage: data.TotalPage,
        });
      });
    }
  }

  onClickCancel() {
    this.setState({
      onAdd: false,
    });
  }

  render() {
    const temp = this.state.Quote.map((item, i) => {
      return <Carousel.Item key={i}>{item}</Carousel.Item>;
    });
    return (
      <div className="cover-tag">
        <img
          src={this.state.BackgroundUrl}
          style={{
            position: "absolute",
            filter: "blur(10px)",
          }}
        ></img>
        <div>
          <div className="AllLetter">
            <div className="TopLetter">
              {this.state.onAdd ? (
                <div className="page-number">
                  {this.state.totalPage}/{this.state.totalPage + 1} pages
                </div>
              ) : null}
            </div>

            {this.state.onAdd === false ? (
              <Book
                data={(totalPage) =>
                  this.setState({
                    totalPage: totalPage,
                  })
                }
                onClickAddButton={() => this.onClickAddButton()}
              ></Book>
            ) : null}
            {this.state.onAdd === true ? (
              <>
                <ButtonGroup className="confirmGButton" size="sm">
                  <Button
                    onClick={() => this.onClickOk()}
                    title="Ok"
                    variant="success"
                    style={{ width: "40px" }}
                  >
                    OK
                  </Button>
                  <Button
                    onClick={() => this.onClickCancel()}
                    title="Cancel"
                    variant="warning"
                  >
                    Cancel
                  </Button>
                </ButtonGroup>
                <div className="cover-letter">
                  <div
                    className="editLetter"
                    style={{ width: "315px", height: "461.79px" }}
                  >
                    <TextareaAutosize
                      minRows={1}
                      maxRows={1}
                      className="editTitle"
                      value={this.state.title}
                      onChange={(event) =>
                        this.setState({ title: event.target.value })
                      }
                      placeholder="title"
                    ></TextareaAutosize>
                    <TextareaAutosize
                      minRows={1}
                      maxRows={1}
                      className="editDate"
                      value={this.state.date}
                      onChange={(event) =>
                        this.setState({ date: event.target.value })
                      }
                      placeholder="date"
                    ></TextareaAutosize>
                    <TextareaAutosize
                      minRows={1}
                      maxRows={15}
                      className="editContent"
                      value={this.state.content}
                      onChange={(event) =>
                        this.setState({ content: event.target.value })
                      }
                      placeholder="content"
                    ></TextareaAutosize>
                  </div>
                </div>
              </>
            ) : null}
          </div>
          {this.state.Quote.length !== 0 ? (
            <div className="Quote">
              <Carousel
                defaultActiveIndex={Math.floor(
                  Math.random() * Math.floor(this.state.Quote.length)
                )}
                interval={10000}
              >
                {temp}
              </Carousel>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default LetterAndQuote;
