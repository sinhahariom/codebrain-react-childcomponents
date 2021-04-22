import React from "react";
import ChildB from "./ChildB";
import ChildA from "./ChildA";
import ParentB from "./ParentB";

const ParentA = () => {
  return (
    <ParentB>
      <ChildA />
      <ChildB />
    </ParentB>
  );
};

export default ParentA;
