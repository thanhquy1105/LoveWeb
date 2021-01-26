import React, { useState, useRef, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import TextareaAutosize from "react-textarea-autosize";
import Carousel from "react-bootstrap/Carousel";

const ImageList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indexEdit, setIndexEdit] = useState(-1);
  const [items, setItems] = useState([]);
  const [animating, setAnimating] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [dateInput, setDateInput] = useState("");
  const [myInput, setMyInput] = useState("");
  const [yourInput, setYourInput] = useState("");

  function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  return <div></div>;
};

export default ImageList;
