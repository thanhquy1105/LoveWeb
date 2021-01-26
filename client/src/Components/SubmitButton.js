import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const SubmitButton = (props) => {
  const [adding, setAdding] = useState(false);
  const clickAddAdd = () => {
    setAdding(true);
    let res = props.clickAddAdd();
    if (res === false) {
      setAdding(false);
    }
  };

  return (
    <Button
      type="submit"
      variant="success"
      style={{
        width: "70px",
        margin: "5px 20px 0px 10px",
        float: "right",
      }}
      onClick={adding ? null : clickAddAdd}
      disabled={adding}
    >
      {adding ? "Adding…" : "Add"}
    </Button>
  );
};

export default SubmitButton;
