import React, { useState } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

const App = () => {
  console.log("App 컴포넌트 렌더링");
  const [count, setCount] = useState(0);

  // 1증가
  const onPlusBtnHandler = () => {
    setCount(count + 1);
  };

  // 1감소
  const onMinusBtnHandler = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h3>카운트 예제입니다.</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusBtnHandler}>+</button>
      <button onClick={onMinusBtnHandler}>-</button>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
        }}
      >
        <Box1 />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
};

export default App;
