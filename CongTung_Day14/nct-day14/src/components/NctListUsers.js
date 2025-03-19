import React, { useEffect, useState } from "react";
import axios from "axios";

export default function NctListUsers() {
  const [nctListUser, setNctListUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // Đoạn mã mới
  const [formData, setFormData] = useState({
    // Đoạn mã mới
    nct_Name: "",
    nct_Email: "",
    nct_Phone: "",
    nct_Active: false,
  });

  const nctApiOnline =
    "https://67d8e34f00348dd3e2a88b97.mockapi.io/congtung/NCT_users";

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

  const handleEdit = (user) => {
    // Đoạn mã mới
    setSelectedUser(user);
    setFormData({
      nct_Name: user.nct_Name,
      nct_Email: user.nct_Email,
      nct_Phone: user.nct_Phone,
      nct_Active: user.nct_Active,
    });
  };

  const handleChange = (e) => {
    // Đoạn mã mới
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    // Đoạn mã mới
    e.preventDefault();
    axios
      .put(`${nctApiOnline}/${selectedUser.id}`, formData)
      .then((response) => {
        const updatedUsers = nctListUser.map((user) =>
          user.id === selectedUser.id ? response.data : user
        );
        setNctListUser(updatedUsers);
        setSelectedUser(null);
        setFormData({
          nct_Name: "",
          nct_Email: "",
          nct_Phone: "",
          nct_Active: false,
        });
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật dữ liệu:", error);
      });
  };

  const handleDelete = (id) => {
    // Đoạn mã mới
    axios
      .delete(`${nctApiOnline}/${id}`)
      .then(() => {
        const updatedUsers = nctListUser.filter((user) => user.id !== id);
        setNctListUser(updatedUsers);
      })
      .catch((error) => {
        console.error("Lỗi khi xóa dữ liệu:", error);
      });
  };

  const nctElementUser = nctListUser.map((nct_item) => {
    return (
      <tr key={nct_item.id}>
        <td>{nct_item.id}</td>
        <td>{nct_item.nct_Name}</td>
        <td>{nct_item.nct_Email}</td>
        <td>{nct_item.nct_Phone}</td>
        <td>{nct_item.nct_Active ? "Hoạt động" : "Khóa"}</td>
        <td>
          <button
            className="btn btn-success"
            onClick={() => handleEdit(nct_item)}
          >
            Sửa
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(nct_item.id)} // Đoạn mã mới
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="alert alert-info">
      <h2>Danh sách</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{nctElementUser}</tbody>
      </table>

      {selectedUser && ( // Đoạn mã mới
        <div>
          <h3>Cập nhật thông tin người dùng</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Tên:</label>
              <input
                type="text"
                name="nct_Name"
                className="form-control"
                value={formData.nct_Name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="nct_Email"
                className="form-control"
                value={formData.nct_Email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Điện thoại:</label>
              <input
                type="text"
                name="nct_Phone"
                className="form-control"
                value={formData.nct_Phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Trạng thái:</label>
              <input
                type="checkbox"
                name="nct_Active"
                checked={formData.nct_Active}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Cập nhật
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
