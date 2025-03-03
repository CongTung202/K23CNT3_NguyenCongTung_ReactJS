import React, { Component } from "react";

export default class NctRenderListObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nctStudent: [
        { nctID: 1, nctName: "BokaChan", nctAge: 12 },
        { nctID: 2, nctName: "BokaChan", nctAge: 12 },
        { nctID: 3, nctName: "BokaChan", nctAge: 12 },
        { nctID: 4, nctName: "BokaChan", nctAge: 12 },
      ],
    };
  }
  render() {
    let { nctStudent } = this.state;
    let nctElement = nctStudent.map((nctItem) => {
      return (
        <li>
          {nctItem.nctID}-{nctItem.nctName}-{nctItem.nctAge}
        </li>
      );
    });
    let nctElementTable = nctStudent.map((nctItem, index) => {
      return (
        <tr>
          <td>{nctItem.nctID}</td>
          <td>{nctItem.nctName}</td>
          <td>{nctItem.nctAge}</td>
          <td>
            <button className="btn btn-primary">Sua</button>
            <button className="btn btn-danger">Xoa</button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <h2>List Student:</h2>
        {nctElement}
        <hr />
        <h2>Add Css</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{nctElementTable}</tbody>
        </table>
      </div>
    );
  }
}
