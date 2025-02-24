import React from "react";

export default function NctFuncEvent1() {
  //ham xu ly
  const nctEventButtonClick1 = () => {
    alert("Het Cuu 1 Clicked");
  };
  const nctEventButtonClick2 = () => {
    alert("Het Cuu 2 Clicked");
  };
  const nctEventButtonClick3 = (name) => {
    alert("Name " + name);
  };
  return (
    <div className="">
      <button className="btn btn-danger mr-3" onClick={nctEventButtonClick1}>
        HetCuu1
      </button>
      <button className="btn btn-primary ml-3" onClick={nctEventButtonClick2}>
        HetCuu2
      </button>
      <button
        className="btn btn-success ml-3"
        onClick={() => nctEventButtonClick3("Tung")}
      >
        HetCuu3
      </button>
      <button
        className="btn btn-warning ml-3"
        onClick={() => nctEventButtonClick3("BokaChan Ga")}
      >
        HetCuu3
      </button>
    </div>
  );
}
