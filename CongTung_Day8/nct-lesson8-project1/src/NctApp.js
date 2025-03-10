// NctApp.js
import React, { Component } from "react";
import NctControl from "./components/NctControl";
import NctStudentList from "./components/NctStudentList";
import NctForm from "./components/NctForm";

export default class NctApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nctStudent: [
        {
          nctID: "SV01",
          nctStudentName: "BokaChan",
          nctAge: 22,
          nctGender: "Nam",
          nctDayOfBirth: "20/02/2005",
          nctNoiSinh: "Ninh Binh",
          nctAddress: "Ha Noi",
        },
        {
          nctID: "SV02",
          nctStudentName: "TungTherK",
          nctAge: 22,
          nctGender: "Nữ",
          nctDayOfBirth: "22/02/2005",
          nctNoiSinh: "CanThor",
          nctAddress: "Mi Dinh",
        },
        {
          nctID: "SV03",
          nctStudentName: "Ban Moi",
          nctAge: 22,
          nctGender: "Nữ",
          nctDayOfBirth: "29/02/2005",
          nctNoiSinh: "Bac Kan",
          nctAddress: "Swiden",
        },
      ],
      selectedStudent: null,
      message: "",
      isAddingNew: false, // Thêm state để kiểm tra xem có đang thêm mới không
    };
  }

  nctHandleView = (nctStudent) => {
    this.setState({ selectedStudent: nctStudent });
  };

  nctHandleEdit = (nctStudent) => {
    this.setState({ selectedStudent: nctStudent });
  };
  // NctApp.js
  updateStudent = (updatedStudent) => {
    this.setState((prevState) => {
      const updatedStudents = prevState.nctStudent.map((student) =>
        student.nctID === updatedStudent.nctID ? updatedStudent : student
      );
      return { nctStudent: updatedStudents, selectedStudent: null };
    });
  };
  nctHandleDelete = (nctID) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sinh viên này không?")) {
      this.setState((prevState) => ({
        nctStudent: prevState.nctStudent.filter(
          (student) => student.nctID !== nctID
        ),
      }));
    }
  };
  nctHandleAddNew = () => {
    this.setState({ selectedStudent: null, isAddingNew: true });
  };

  nctHandleSubmit = (student) => {
    if (this.state.isAddingNew) {
      this.setState((prevState) => ({
        nctStudent: [...prevState.nctStudent, student],
        selectedStudent: null,
        isAddingNew: false,
      }));
    } else {
      this.updateStudent(student);
    }
  };
  render() {
    return (
      <div>
        <div className="App">
          <h1>K23CNT3-Nguyen Cong Tung</h1>
          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-lg-7 grid-margin stretch-card">
                <div className="card">
                  <NctControl onAddNewStudent={this.nctHandleAddNew} />
                  <NctStudentList
                    renderNctStudent={this.state.nctStudent}
                    onNctHandleView={this.nctHandleView}
                    onNctHandleEdit={this.nctHandleEdit} // Thêm hàm chỉnh sửa
                    onNctHandleDelete={this.nctHandleDelete} //xoa
                  />
                </div>
              </div>
              <div className="col-5 grid-margin">
                <NctForm
                  student={this.state.selectedStudent}
                  updateStudent={this.updateStudent}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
