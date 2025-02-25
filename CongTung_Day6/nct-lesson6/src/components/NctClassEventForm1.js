import React, { Component } from "react";

export default class NctClassEventForm1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Boka Chan",
    };
  }
  nctHandleChange = (event) => {
    //cap nhat
    this.setState({
      name: event.target.value,
    });
  };
  nctEventSubmit = (ev) => {
    alert("Xin Chao " + this.state.name);
    ev.preventDefault();
  };
  render() {
    return (
      <div className="alert alert-info">
        <h2>Form Input</h2>
        <form onSubmit={this.nctEventSubmit}>
          <label htmlFor="nctName">
            <input
              className="form-control"
              type="text"
              name="nctName"
              id="nctName"
              value={this.state.name}
              onChange={this.nctHandleChange}
            />
          </label>
          <button className="btn btn-primary">Click Here</button>
        </form>
      </div>
    );
  }
}
