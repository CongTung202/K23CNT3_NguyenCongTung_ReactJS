import React, { Component } from "react";
import NctStudent from "./NctStudent";

export default class NctStudentList extends Component {
  render() {
    const { renderNctStudent, onNctHandleView } = this.props;
    const nctElementStudent = renderNctStudent.map((nctItem, index) => {
      return (
        <NctStudent
          key={nctItem.nctID} // Assuming nctItem has a unique id
          renderNctStudent={nctItem}
          onNctHandleView={onNctHandleView}
          index={index + 1} // For displaying the index
        />
      );
    });
    return (
      <div>
        <div className="card-body">
          <h3 className="card-title">Danh sách sinh viên</h3>
          <div className="table-responsive pt-3">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Mã sinh viên</th>
                  <th>Tên sinh viên</th>
                  <th>Tuổi</th>
                  <th>Giới tính</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>{nctElementStudent}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
