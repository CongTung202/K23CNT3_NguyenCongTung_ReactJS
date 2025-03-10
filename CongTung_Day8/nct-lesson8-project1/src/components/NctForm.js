// NctForm.js
import React, { Component } from "react";

export default class NctForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nctID: "",
      nctStudentName: "",
      nctAge: "",
      nctGender: "Nam",
      nctDayOfBirth: "",
      nctNoiSinh: "",
      nctAddress: "",
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.student !== this.props.student) {
      const { student } = this.props;
      if (student) {
        this.setState({ ...student });
      } else {
        // Reset state khi thêm mới
        this.setState({
          nctID: "",
          nctStudentName: "",
          nctAge: "",
          nctGender: "Nam",
          nctDayOfBirth: "",
          nctNoiSinh: "",
          nctAddress: "",
        });
      }
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // NctForm.js
  handleSubmit = (e) => {
    e.preventDefault();
    const { updateStudent } = this.props;
    updateStudent(this.state); // Gọi hàm cập nhật với thông tin sinh viên đã chỉnh sửa
  };

  render() {
    const {
      nctID,
      nctStudentName,
      nctAge,
      nctGender,
      nctDayOfBirth,
      nctNoiSinh,
      nctAddress,
    } = this.state;
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <form className="form-sample" onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    name="nctID"
                    value={nctID}
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    name="nctStudentName"
                    value={nctStudentName}
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tuổi</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    name="nctAge"
                    value={nctAge}
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select
                    name="nctGender"
                    value={nctGender}
                    className="form-control"
                    onChange={this.handleChange}
                  >
                    <option value={"Nam"}>Nam</option>
                    <option value={"Nữ"}>Nữ</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    name="nctDayOfBirth"
                    value={nctDayOfBirth}
                    placeholder="dd/mm/yyyy"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <select
                    name="nctNoiSinh"
                    value={nctNoiSinh}
                    className="form-control"
                    onChange={this.handleChange}
                  >
                    <option>Hà Nội</option>
                    <option>TP. Hồ Chí Minh</option>
                    <option>Đà Nẵng</option>
                    <option>Quảng Ninh</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <textarea
                    name="nctAddress"
                    className="form-control"
                    value={nctAddress}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary me-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
