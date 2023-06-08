import React from "react";
import Father from "./Father";
import { FamilyContext } from "../context/FamilyContext";

// GrandFather -> Child에 어떤 정보를 알려주고 Child가 내용 출력

const GrandFather = () => {
  const houseName = "sparta";
  const pocketMoney = 10000;

  return (
    <FamilyContext.Provider
      value={{
        houseName,
        pocketMoney,
      }}
    >
      <Father />;
    </FamilyContext.Provider>
  );
};

export default GrandFather;
