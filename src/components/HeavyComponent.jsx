import React, { useMemo, useState } from "react";

const HeavyComponent = () => {
  const [count, setCount] = useState(0);

  const heavyWork = () => {
    for (let i = 0; i < 1000000000; i++) {}
    return 100;
  };

  const value = useMemo(() => heavyWork(), []);
  console.log("value:", value);

  return (
    <>
      <p>무거운 컴포넌트</p>
      <button onClick={() => setCount(count + 1)}>
        누르면 아래 카운트 증가
      </button>
      <br />
      {count}
    </>
  );
};

export default HeavyComponent;
