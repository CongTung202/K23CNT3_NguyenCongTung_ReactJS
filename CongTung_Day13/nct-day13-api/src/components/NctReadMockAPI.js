import React, { useEffect, useState } from "react";
import axios from "axios";

export default function NctReadMockAPI() {
  // khởi tạo state
  const [nctListUser, setNctListUser] = useState([]);
  // api
  const nctApiOnline =
    "https://67d8e34f00348dd3e2a88b97.mockapi.io/congtung/nct_users";
  // Đọc dữ liệu từ api bằng axios
  useEffect(() => {
    axios
      .get(nctApiOnline)
      .then((nct_response) => {
        setNctListUser(nct_response.data);
      })
      .catch((error) => {
        console.log("Lỗi phát sinh");
      });
  }, []);

  // view data
  const nctElementUser = nctListUser.map((nct_item, index) => {
    return (
      <tr>
        <td>{nct_item.nctId}</td>
        <td>{nct_item.nctName}</td>
        <td>{nct_item.nctAge}</td>
        <td>{nct_item.nctActive ? "Hoạt động" : "Khóa"}</td>
        <td>
          <button className="btn btn-success">Sửa</button>
          <button className="btn btn-danger">Xóa</button>
        </td>
      </tr>
    );
  });
  return (
    <div className="alert alert-danger">
      <h2>Danh sách</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>FullName</th>
            <th>Age</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{nctElementUser}</tbody>
      </table>
    </div>
  );
}
