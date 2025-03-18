import React, { useState } from "react";
import axios from "axios";
export default function NctCreateMockAPI() {
  // khởi tạo state
  const [nctName, setNctName] = useState("");
  const [nctAge, setNctAge] = useState(0);
  const [nctActive, setNctActive] = useState(true);

  // api post
  const nctCreateUserApi =
    "https://67d8e34f00348dd3e2a88b97.mockapi.io/congtung/nct_users";

  // khi submit form
  const nctHandleSubmit = (event) => {
    event.preventDefault();
    console.log("nctActive:", nctActive);
    let nctNewUser = { nctName, nctAge, nctActive };
    console.log(nctNewUser);

    // ghi dữ liệu vào api
    axios.post(nctCreateUserApi, nctNewUser).then((nct_response) => {});
  };
  return (
    <div className="alert alert-info">
      <h2>Thêm mới users</h2>
      <hr />
      <form>
        <div className=" mb-1">
          <label for="nctName"> Name</label>
          <input
            type="text"
            placeholder="Xin Cai Ten"
            name="nctName"
            id="nctName"
            value={nctName}
            className="form-control"
            onChange={(ev) => setNctName(ev.target.value)}
          />
        </div>
        <div className=" mb-1">
          <label for="nctAge">Age</label>
          <input
            type="number"
            name="nctAge"
            id="nctAge"
            placeholder="Xin Cai Tuoi"
            value={nctAge}
            className="form-control"
            onChange={(ev) => setNctAge(ev.target.value)}
          />
        </div>
        <div className=" mb-1">
          <label for="nctActive">Active</label>
          <input
            type="radio"
            name="nctActive"
            id="nctActive_hd"
            value={"true"}
            onChange={(ev) => setNctActive(ev.target.value)}
          />
          <label for="nctActive_hd"> Hoạt động</label>
          <input
            type="radio"
            name="nctActive"
            id="nctActive_kh"
            value={"false"}
            onChange={(ev) => setNctActive(ev.target.value)}
          />
          <label for="nctActive_kh"> Khóa</label>
        </div>
        <button className="btn btn-primary" onClick={nctHandleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
