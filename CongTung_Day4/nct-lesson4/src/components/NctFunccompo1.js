import React from "react";

export default function NctFunccompo1(props) {
  return (
    <div>
      <h2>Props is Object</h2>
      <p>
        <b>Info</b>
      </p>
      <p>Name:{props.renderInfo.name}</p>
      <p>Address:{props.renderInfo.address}</p>
      <p>Age:{props.renderInfo.age}</p>
      <p>Hotline:{props.renderInfo.hotline}</p>
    </div>
  );
}
