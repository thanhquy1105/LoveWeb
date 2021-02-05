import React from "react";
import HTMLFlipBook from "react-pageflip";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CustomScroll from "react-custom-scroll";
import "react-custom-scroll/dist/customScroll.css";
import API from "../utils/API";
import Add from "../image/icon/add-letter.png";

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
  let res = props.data.map((letter, index) => {
    return (
      <div className="demoPage" ref={ref} key={index}>
        <h3 className="page-header" style={{ marginBottom: "5px" }}>
          {letter.title}
        </h3>
        <p className="page-date">{letter.date}</p>
        <CustomScroll>
          <div className="page-text">{letter.content}</div>
        </CustomScroll>

        <p className="page-footer">{index + 2}</p>
      </div>
    );
  });
  return res;
});

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      totalPage: 0,
      FrontUrl: "",
      BackUrl: "",
      Letter: [],
      onAdd: false,
    };
  }
  componentDidMount() {
    API.getLetter().then((res) => {
      let data = res.data.info[0];
      this.props.data(data.TotalPage);

      this.setState({
        FrontUrl: data.FrontUrl,
        BackUrl: data.BackUrl,
        totalPage: data.TotalPage,
        Letter: data.Letter,
      });
    });
  }
  nextButtonClick = () => {
    this.flipBook.getPageFlip().flipNext();
  };

  prevButtonClick = () => {
    this.flipBook.getPageFlip().flipPrev();
  };

  onPage = (e) => {
    this.setState({
      page: e.data,
    });
  };
  onClickAddButton = () => {
    this.props.onClickAddButton();
    this.setState({ onAdd: true });
  };
  render() {
    return (
      <>
        {this.state.BackUrl ? (
          <>
            <div className="page-flip">
              <Button
                variant="info"
                style={{ marginTop: "4px", marginRight: "7px" }}
                size="sm"
                onClick={() => this.prevButtonClick()}
              >
                previous page
              </Button>
              <Button
                variant="info"
                style={{ marginTop: "4px", marginLeft: "7px" }}
                size="sm"
                onClick={() => this.nextButtonClick()}
              >
                next page
              </Button>
            </div>
            <ButtonGroup className="groudButton" size="sm">
              <Button
                onClick={() => this.onClickAddButton()}
                title="add image"
                style={{ background: "none" }}
              >
                <img src={Add} style={{ width: "20px" }} alt="1"></img>
              </Button>
            </ButtonGroup>
            <div className="page-number">
              {this.state.page + 1}/{this.state.totalPage} pages
            </div>

            <div className="cover-letter">
              <HTMLFlipBook
                width={500}
                height={733}
                size="stretch"
                drawShadow={true}
                minWidth={315}
                maxWidth={1000}
                minHeight={400}
                maxHeight={1533}
                maxShadowOpacity={1}
                ref={(el) => (this.flipBook = el)}
                onFlip={this.onPage}
              >
                <PageCover bg={this.state.FrontUrl}>Love Letter Book</PageCover>

                <Page data={this.state.Letter}></Page>
                <PageCover bg={this.state.BackUrl}>
                  Em không thoát được đâu em iu. Tu bi con ti niu
                </PageCover>
              </HTMLFlipBook>
            </div>
          </>
        ) : null}
      </>
    );
  }
}
export default Book;
