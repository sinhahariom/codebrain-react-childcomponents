import React from "react";
import ChildB from "./ChildB";

const ParentB = props => {
  return (
    <div>
      <p>I am Parent B </p>
      {props.children}
    </div>
  );
};

export default ParentB;
