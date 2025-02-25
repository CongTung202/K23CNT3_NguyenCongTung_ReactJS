import React, { Component } from "react";

export default class NctClassEventForm2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nctcourse: "css",
    };
  }

  NcthandleChange = (event) => {
    this.setState({
      nctcourse: event.target.value,
    });
  };

  NcthandleSubmit = (event) => {
    alert("Khóa học đã chọn khi submit: " + this.state.nctcourse);
    event.preventDefault();
  };

  render() {
    return (
      <form className="alert alert-danger" onSubmit={this.NcthandleSubmit}>
        <label>
          Chọn khóa học:
          <select
            className="form-control mx-3"
            value={this.state.nctcourse}
            onChange={this.NcthandleChange}
          >
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">Javascript</option>
            <option value="reactjs">ReactJS</option>
          </select>
        </label>
        <input type="submit" className="btn btn-success" value="Submit" />
      </form>
    );
  }
}
