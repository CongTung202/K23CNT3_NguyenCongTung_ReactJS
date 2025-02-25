import React, { Component } from "react";

export default class NctClassEventForm5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      gender: "male", // Default gender
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const { name, age, gender } = this.state;
    alert(`Student Info:\nName: ${name}\nAge: ${age}\nGender: ${gender}`); // Display entered information
  };

  render() {
    return (
      <div className="alert alert-danger">
        <h3>Student Info Form</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              className="form-control"
              value={this.state.age}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.handleChange}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.handleChange}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                checked={this.state.gender === "other"}
                onChange={this.handleChange}
              />
              <label htmlFor="other">Other</label>
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
