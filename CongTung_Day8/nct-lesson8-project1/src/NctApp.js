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
          nctGender: "Nu",
          nctDayOfBirth: "22/02/2005",
          nctNoiSinh: "CanThor",
          nctAddress: "Mi Dinh",
        },
        {
          nctID: "SV03",
          nctStudentName: "Ban Moi",
          nctAge: 22,
          nctGender: "Nu",
          nctDayOfBirth: "29/02/2005",
          nctNoiSinh: "Bac Kan",
          nctAddress: "Swiden",
        },
      ],
      selectedStudent: null,
    };
  }

  nctHandleView = (nctStudent) => {
    this.setState({ selectedStudent: nctStudent });
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
                  <NctControl />
                  <NctStudentList
                    renderNctStudent={this.state.nctStudent}
                    onNctHandleView={this.nctHandleView}
                  />
                </div>
              </div>
              <div className="col-5 grid-margin">
                <NctForm student={this.state.selectedStudent} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
