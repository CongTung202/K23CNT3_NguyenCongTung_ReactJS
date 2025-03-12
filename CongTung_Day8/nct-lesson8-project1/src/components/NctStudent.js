// NctStudent.js
import React, { Component } from "react";

export default class NctStudent extends Component {
  render() {
    const {
      renderNctStudent,
      onNctHandleView,
      onNctHandleEdit,
      onNctHandleDelete,
      index,
    } = this.props;
    return (
      <tr>
        <td>{index}</td>
        <td>{renderNctStudent.nctID}</td>
        <td>{renderNctStudent.nctStudentName}</td>
        <td>{renderNctStudent.nctAge}</td>
        <td>{renderNctStudent.nctGender}</td>
        <td>
          {/* <div className="template-demo">
            <button
              type="button"
              className="btn btn-primary btn-icon-text"
              onClick={() => onNctHandleView(renderNctStudent)}
            >
              Xem
            </button>
            <button
              type="button"
              className="btn btn-warning btn-icon-text"
              onClick={() => onNctHandleEdit(renderNctStudent)} // Gọi hàm chỉnh sửa
            >
              Sửa
            </button>
            <button
              type="button"
              className="btn btn-danger btn-icon-text" // Thay đổi màu cho nút xóa
              onClick={() => onNctHandleDelete(renderNctStudent.nctID)} // Gọi hàm xóa
            >
              Xóa
            </button>
          </div> */}
        </td>
      </tr>
    );
  }
}
