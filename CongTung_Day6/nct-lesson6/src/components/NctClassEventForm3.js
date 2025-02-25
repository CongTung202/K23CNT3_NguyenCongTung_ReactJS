import React, { Component } from "react";

export default class NctClassEventForm3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nctGender: "Nam", // State to hold the selected nctGender
    };
  }

  nctHandleChange = (event) => {
    this.setState({ nctGender: event.target.value });
  };

  nctHandleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    alert("Gioi Tinh: " + this.state.nctGender); // Display the selected gender
  };

  render() {
    return (
      <div className="alert alert-success">
        <h1>Event Form Radio Type</h1>
        <form onSubmit={this.nctHandleSubmit}>
          <div className="form-group">
            <label>Gioi Tinh:</label>
            <div>
              <input
                type="radio"
                id="nctNam"
                name="gender"
                value="Nam"
                checked={this.state.nctGender === "Nam"}
                onChange={this.nctHandleChange}
              />
              <label htmlFor="nctNam">Nam</label>
            </div>
            <div>
              <input
                type="radio"
                id="nctNu"
                name="gender"
                value="Nu"
                onChange={this.nctHandleChange}
              />
              <label htmlFor="nctNu">Nu</label>
            </div>
            <div>
              <input
                type="radio"
                id="nctKhac"
                name="gender"
                value="Khac"
                onChange={this.nctHandleChange}
              />
              <label htmlFor="nctKhac">Khac</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
