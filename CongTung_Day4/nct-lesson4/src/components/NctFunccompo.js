import React from "react";

export default function NctFunccompo(props) {
  return (
    <div>
      <h2>demo: Func components Props</h2>
      <p>get data from props to view</p>
      <p>Name:{props.name}</p>
      <p>Address:{props.address}</p>
      <p>Age:{props.age}</p>
      <p>Hotline:{props.hotline}</p>
    </div>
  );
}
