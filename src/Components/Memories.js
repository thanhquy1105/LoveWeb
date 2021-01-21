import i1 from "../image/memories/memory1.jpg";
import i2 from "../image/memories/memory2.jpg";
import i3 from "../image/memories/memory3.jpg";
import i4 from "../image/memories/memory3a.jpg";
import i5 from "../image/memories/memory4.jpg";
import i6 from "../image/memories/memory5.jpg";
import i7 from "../image/memories/memory5a.jpg";
import i8 from "../image/memories/memory6.jpg";
import i9 from "../image/memories/memory7.jpg";
import i10 from "../image/memories/memory8.jpg";
import i11 from "../image/memories/memory9.jpg";
import i12 from "../image/memories/memory10.jpg";
import i13 from "../image/memories/memory11.jpg";
import i14 from "../image/memories/memory12.jpg";
import i15 from "../image/memories/memory13.jpg";
import i16 from "../image/memories/memory14.jpg";
import i17 from "../image/memories/memory15.jpg";
import i18 from "../image/memories/memory16.jpg";
import i19 from "../image/memories/memory17.jpg";
import i20 from "../image/memories/memory17a.jpg";
import i21 from "../image/memories/memory18.jpg";
import i22 from "../image/memories/memory19.jpg";
import i23 from "../image/memories/memory20.jpg";
import i24 from "../image/memories/memory21.jpg";
import i25 from "../image/memories/memory22.jpg";
import i26 from "../image/memories/memory23.jpg";
import i27 from "../image/memories/memory24.jpg";
import i28 from "../image/memories/memory25.jpg";
import i29 from "../image/memories/memory26.jpg";
import i30 from "../image/memories/memory27.jpg";
import i31 from "../image/memories/memory28.jpg";
import i32 from "../image/memories/memory29.jpg";
import i33 from "../image/memories/memory30.jpg";
import i34 from "../image/memories/memory31.jpg";
import i35 from "../image/memories/memory32.jpg";
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
    src: i2,
    altText: "Slide 2",
  },
  {
    src: i3,
    altText: "Slide 2",
  },
  {
    src: i4,
    altText: "Slide 3",
  },
  {
    src: i5,
    altText: "Slide 3",
  },
  {
    src: i6,
    altText: "Slide 3",
  },
  {
    src: i7,
    altText: "Slide 3",
  },
  {
    src: i8,
    altText: "Slide 3",
  },
  {
    src: i9,
    altText: "Slide 3",
  },
  {
    src: i10,
    altText: "Slide 3",
  },
  {
    src: i11,
    altText: "Slide 3",
  },
  {
    src: i12,
    altText: "Slide 3",
  },
  {
    src: i13,
    altText: "Slide 3",
  },
  {
    src: i14,
    altText: "Slide 3",
  },
  {
    src: i15,
    altText: "Slide 3",
  },
  {
    src: i16,
    altText: "Slide 3",
  },
  {
    src: i17,
    altText: "Slide 3",
  },
  {
    src: i18,
    altText: "Slide 3",
  },
  {
    src: i19,
    altText: "Slide 3",
  },
  {
    src: i20,
    altText: "Slide 3",
  },
  {
    src: i21,
    altText: "Slide 3",
  },
  {
    src: i22,
    altText: "Slide 3",
  },
  {
    src: i23,
    altText: "Slide 3",
  },
  {
    src: i24,
    altText: "Slide 3",
  },
  {
    src: i25,
    altText: "Slide 3",
  },
  {
    src: i26,
    altText: "Slide 3",
  },
  {
    src: i27,
    altText: "Slide 3",
  },
  {
    src: i28,
    altText: "Slide 3",
  },
  {
    src: i29,
    altText: "Slide 3",
  },
  {
    src: i30,
    altText: "Slide 3",
  },
  {
    src: i31,
    altText: "Slide 3",
  },
  {
    src: i32,
    altText: "Slide 3",
  },
  {
    src: i33,
    altText: "Slide 3",
  },
  {
    src: i34,
    altText: "Slide 3",
  },
  {
    src: i35,
    altText: "Slide 3",
  },
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
