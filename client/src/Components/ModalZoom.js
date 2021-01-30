import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ModalZoom.css";
const ModalAdd = (props) => {
  const [visible, setVisible] = useState(true);
  const [images, setImages] = useState(
    props.images.map((item) => {
      return { original: item.ImageUrl, thumbnail: item.ImageUrl };
    })
  );
  const [slide, setSlide] = useState(0);

  const clickCancelZoom = () => {
    setVisible(false);
    props.clickCancelZoom();
  };

  const myRef = useRef();

  const onBeforeSlide = (x) => {
    setSlide(x);
  };

  const renderCustomControls = () => {
    return (
      <img
        src={images[slide].original}
        alt="bg"
        style={{
          width: "100%",
          opacity: 0.7,
          filter: "blur(15px)",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    );
  };
  const haveTarget = document.getElementById("App");

  return ReactDOM.createPortal(
    <Rodal
      className="rodal-dialog-zoom"
      visible={visible}
      onClose={clickCancelZoom}
      animation="zoom"
      closeOnEsc={true}
      closeMaskOnClick={false}
    >
      <ImageGallery
        ref={myRef}
        items={images}
        onBeforeSlide={onBeforeSlide}
        renderCustomControls={renderCustomControls}
      />
    </Rodal>,
    haveTarget
  );
};

export default ModalAdd;
