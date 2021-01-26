import React, { useState, useEffect } from "react";
import "./Memories.css";
import ReactCardFlip from "react-card-flip";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import MemoriesButton from "./MemoriesButton";
import TextareaAutosize from "react-textarea-autosize";

import API from "../utils/API";

const Memories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indexEdit, setIndexEdit] = useState(-1);
  const [items, setItems] = useState([]);
  const [animating, setAnimating] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [dateInput, setDateInput] = useState("");
  const [myInput, setMyInput] = useState("");
  const [yourInput, setYourInput] = useState("");

  useEffect(() => {
    API.getAllImage().then((res) => {
      setItems(res.data.images);
    });
  });
  const flip = () => {
    if (onEdit === false) {
      setFlipped(!flipped);
    }
  };

  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    if (animating || flipped || onEdit) return;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    if (animating || flipped || onEdit) return;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating || flipped || onEdit) return;
    setActiveIndex(newIndex);
  };

  const clickZoomButton = () => {
    console.log(1);
  };
  const clickEditButton = () => {
    setOnEdit(true);
    setFlipped(true);

    setDateInput(items[activeIndex].Date);
    setMyInput(items[activeIndex].MyFeel);
    setYourInput(items[activeIndex].YourFeel);
    setIndexEdit(activeIndex);
  };
  const clickSaveButton = () => {
    if (dateInput && myInput && yourInput) {
      let data = {
        Date: dateInput,
        MyFeel: myInput,
        YourFeel: yourInput,
      };
      API.updateImage(items[indexEdit]._id, data);
      setOnEdit(false);
      return true;
    } else {
      return false;
    }
  };
  const clickCancelButton = () => {
    setOnEdit(false);
  };
  const clickOkAddButton = () => {
    setOnEdit(false);
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={
          flipped || onEdit
            ? () => setAnimating(false)
            : () => setAnimating(true)
        }
        onExited={() => setAnimating(false)}
        key={item._id}
      >
        <div onClick={flip}>
          <ReactCardFlip
            isFlipped={flipped}
            flipDirection="vertical"
            containerStyle={{
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          >
            <img
              src={item.ImageUrl}
              alt={item.altText}
              style={{ width: "100%", height: "100%" }}
            />
            <div>
              <img
                src={item.ImageUrl}
                alt={item.altText}
                style={{
                  width: "100%",
                  minHeight: "100%",
                  opacity: 0.7,
                  filter: "blur(15px)",
                  height: "100%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                {onEdit === false ? (
                  <div className="show">
                    <div className="info">
                      <div className="showDate">{item.Date}</div>
                      <div style={{ display: "flex", marginTop: "15px" }}>
                        <div className="my">Anh:</div>
                        <div className="showMy">
                          <p>{item.MyFeel}</p>
                        </div>
                      </div>
                      <div>
                        <div className="your">:Em</div>
                        <div className="showYour">{item.YourFeel}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="edit">
                    <div className="info">
                      <input
                        className="editDate"
                        type="text"
                        value={dateInput}
                        onChange={(event) => setDateInput(event.target.value)}
                      ></input>
                      <div style={{ display: "flex", marginTop: "15px" }}>
                        <div className="my">Anh:</div>
                        <TextareaAutosize
                          className="editMy"
                          value={myInput}
                          onChange={(event) => setMyInput(event.target.value)}
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
                          autoFocus
                          className="editYour"
                          onChange={(event) => setYourInput(event.target.value)}
                          value={yourInput}
                        ></TextareaAutosize>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ReactCardFlip>
        </div>
      </CarouselItem>
    );
  });

  return (
    <>
      <div
        style={{
          height: "95%",
          width: "95%",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Dancing",
          borderRadius: "25px",
          boxShadow: "3px 6px 10px 10px #585858",
          overflow: "hidden",
          backgroundColor: "#656d6d40",
          position: "relative",
        }}
      >
        <MemoriesButton
          clickZoomButton={clickZoomButton}
          clickOkAddButton={clickOkAddButton}
          clickEditButton={clickEditButton}
          clickSaveButton={clickSaveButton}
          clickCancelButton={clickCancelButton}
          onEdit={onEdit}
        ></MemoriesButton>
        <Carousel
          activeIndex={onEdit && flipped ? indexEdit : activeIndex}
          next={next}
          previous={previous}
          className="custom-tag1"
          pause="hover"
          interval={flipped || onEdit ? false : 5000}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            className={flipped ? "none" : ""}
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            className={flipped ? "none" : ""}
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
    </>
  );
};

export default Memories;
