import React from "react";

export default function NctCompoEventProps(props) {
  const nctEventButtonClick1 = () => {
    alert("Props to Data: " + props.nctRenderName);
    console.log("Chao: ", props.nctRenderName);
  };
  const nctEventButtonClick2 = (param) => {
    alert("Props to Data: " + props.nctRenderName);
    console.log("Chao: ", param);
  };
  return (
    <div className="alert alert-primary">
      <button className="btn btn-primary" onClick={nctEventButtonClick1}>
        Bocchi1
      </button>
      <button className="btn btn-success" onClick={nctEventButtonClick2}>
        Bocchi2
      </button>
    </div>
  );
}
