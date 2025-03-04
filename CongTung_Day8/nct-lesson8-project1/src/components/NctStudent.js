import React, { Component } from "react";

export default class NctStudent extends Component {
  render() {
    const { renderNctStudent, onNctHandleView, index } = this.props;
    return (
      <tr>
        <td>{index}</td>
        <td>{renderNctStudent.nctID}</td>
        <td>{renderNctStudent.nctStudentName}</td>
        <td>{renderNctStudent.nctAge}</td>
        <td>{renderNctStudent.nctGender}</td>
        <td>
          <div className="template-demo">
            <button
              type="button"
              className="btn btn-danger btn-icon-text"
              onClick={() => onNctHandleView(renderNctStudent)}
            >
              Xem
            </button>
            <button type="button" className="btn btn-warning btn-icon-text">
              Sửa
            </button>
            <button type="button" className="btn btn-success btn-icon-text">
              Xóa
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
