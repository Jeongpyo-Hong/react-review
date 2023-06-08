import React from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "#c491be",
  color: "white",
};

const Box3 = () => {
  console.log("Box3렌더링");
  return <div style={style}>Box1</div>;
};

export default React.memo(Box3);
