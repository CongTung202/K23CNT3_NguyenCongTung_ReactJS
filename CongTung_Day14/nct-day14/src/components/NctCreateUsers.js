import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Đoạn mã mới
import axios from "axios";

export default function NctCreateUsers() {
  // Khởi tạo state
  const [id, setNctID] = useState("");
  const [nct_Name, setNctName] = useState("");
  const [nct_Email, setNctEmail] = useState("");
  const [nct_Phone, setNctPhone] = useState("");
  const [nctActive, setNctActive] = useState("true");
  // API post
  const nctCreateUserApi =
    "https://67d8e34f00348dd3e2a88b97.mockapi.io/congtung/NCT_users";
  const navigate = useNavigate(); // Đoạn mã mới
  // Khi submit form
  const nctHandleSubmit = (event) => {
    event.preventDefault();
    // Chuyển đổi nctActive thành boolean và tạo đối tượng người dùng mới
    let nctNewUser = {
      id,
      nct_Name,
      nct_Email,
      nct_Phone,
      nct_Active: nctActive === "true",
    };
    navigate("/user-list"); // Đoạn mã mới: Chuyển hướng về trang danh sách
    console.log(nctNewUser);

    // Ghi dữ liệu vào API
    axios
      .post(nctCreateUserApi, nctNewUser)
      .then((nct_response) => {
        console.log("User created successfully:", nct_response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error creating the user:",
          error.response.data
        );
      });
  };

  return (
    <div className="alert alert-info">
      <h2>Khởi Tạo Người Dùng</h2>
      <hr />
      <form>
        <div className="mb-1">
          <label htmlFor="ID">ID</label>
          <input
            type="text"
            placeholder="Vui lòng nhập thông tin"
            name="ID"
            id="ID"
            value={id}
            className="form-control"
            onChange={(ev) => setNctID(ev.target.value)}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="nct_Name">Name</label>
          <input
            type="text"
            placeholder="Vui lòng nhập tên"
            name="nct_Name"
            id="nct_Name"
            value={nct_Name}
            className="form-control"
            onChange={(ev) => setNctName(ev.target.value)}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="nct_Email">Email</label>
          <input
            type="text"
            placeholder="Email"
            name="nct_Email"
            id="nct_Email"
            value={nct_Email}
            className="form-control"
            onChange={(ev) => setNctEmail(ev.target.value)}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="nct_Phone">Phone</label>
          <input
            type="text"
            name="nct_Phone"
            id="nct_Phone"
            placeholder="Số Điện Thoại"
            value={nct_Phone}
            className="form-control"
            onChange={(ev) => setNctPhone(ev.target.value)}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="nct_Active" className="mx-3">
            Trạng Thái:
          </label>
          <input
            type="radio"
            name="nct_Active"
            id="nctActive_hd"
            value={"true"}
            onChange={(ev) => setNctActive(ev.target.value)}
          />
          <label htmlFor="nctActive_hd" className="mx-3">
            Hoạt động
          </label>
          <input
            type="radio"
            name="nct_Active"
            id="nctActive_kh"
            value={"false"}
            onChange={(ev) => setNctActive(ev.target.value)}
          />
          <label htmlFor="nctActive_kh" className="mx-3">
            Khóa
          </label>
        </div>
        <button className="btn btn-primary" onClick={nctHandleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
