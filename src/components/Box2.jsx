import React from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "#4e93ed",
  color: "white",
};

const Box2 = () => {
  console.log("Box2렌더링");
  return <div style={style}>Box1</div>;
};

export default React.memo(Box2);
