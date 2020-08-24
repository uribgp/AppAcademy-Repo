import React from "react";
import NameContext from "./NameContext";

const YourName = () => {
  return (
    <NameContext.Consumer>
      {value => <input onChange={value.changeName} value={value.name} />}
    </NameContext.Consumer>
  );
};

export default YourName;
