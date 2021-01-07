import i1 from "../image/memory1.jpg";
import i2 from "../image/memory2.jpg";
import i3 from "../image/memory3.jpg";
import i4 from "../image/memory4.jpg";
import React, { useState } from "react";
import "./Memories.css";
import ReactCardFlip from "react-card-flip";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: i1,
    altText: "Slide 1",
  },
  {
    src: i4,
    altText: "Slide 2",
  },
  //   {
  //     src: i2,
  //     altText: "Slide 2",
  //   },
  //   {
  //     src: i3,
  //     altText: "Slide 3",
  //   },
];

const Memories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setFlipped(false);
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setFlipped(false);
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setFlipped(false);
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
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
              src={item.src}
              alt={item.altText}
              style={{ width: "100%", height: "100%" }}
            />
            <div style={{ backgroundColor: "#a1b1c1" }}>
              <img
                src={item.src}
                alt={item.altText}
                style={{ width: "100%", height: "100%", opacity: 0 }}
              />
            </div>
          </ReactCardFlip>
        </div>
        {/* <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        /> */}
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
        <div
          style={{
            position: "absolute",
            fontSize: "35px",
            zIndex: 1,
            fontFamily: "Dancing",
            top: "0px",
            backgroundColor: "#f2f4f4",
            width: "100%",
            boxShadow: "inset 0px -5px 0px 0px #e0e4e5",
          }}
        >
          Memories
        </div>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          className="custom-tag1"
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
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
