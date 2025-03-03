import React, { Component } from "react";

export default class NctClassEventForm6 extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.age = React.createRef();
    this.course = React.createRef();
  }
  nctHandleSubmit = (event) => {
    alert(
      "Info :\n Name: " +
        this.name.current.value +
        "\n Age: " +
        this.age.current.value +
        "\nCourse: " +
        this.course.current.value
    );
    event.preventDefault();
  };

  render() {
    return (
      <div className="container mt-3 border">
        <h1>Form 6 Uncontroller</h1>
        <form onSubmit={this.nctHandleSubmit}>
          <label>
            Name: <input className="form-control" type="text" ref={this.name} />
          </label>
          <br />
          <label>
            Age: <input type="text" className="form-control" ref={this.age} />
          </label>
          <br />
          <label>
            Khóa Học:
            <select
              className="form-select"
              defaultValue={"js"}
              ref={this.course}
            >
              <option value={"js"}>js</option>
              <option value={"html"}>html</option>
              <option value={"css"}>css</option>
              <option value={"reactjs"}>reactjs</option>
            </select>
          </label>
          <br />
          <input type="submit" className="btn btn-primary" value="submit" />
        </form>
      </div>
    );
  }
}
