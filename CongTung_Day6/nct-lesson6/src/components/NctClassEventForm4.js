import React, { Component } from "react";

export default class NctClassEventForm4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: {
        apple: false,
        banana: false,
        orange: false,
        mango: false,
      },
    };
  }

  handleChange = (event) => {
    const { name, checked } = event.target;
    this.setState((prevState) => ({
      fruits: {
        ...prevState.fruits,
        [name]: checked,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const selectedFruits = Object.keys(this.state.fruits).filter(
      (fruit) => this.state.fruits[fruit]
    );
    alert(`Selected Fruits: ${selectedFruits.join(", ")}`); // Display selected fruits
  };

  render() {
    return (
      <div className="alert alert-warning">
        <h1>CheckBox Fruit</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="apple"
                checked={this.state.fruits.apple}
                onChange={this.handleChange}
              />
              Apple
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="banana"
                checked={this.state.fruits.banana}
                onChange={this.handleChange}
              />
              Banana
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="orange"
                checked={this.state.fruits.orange}
                onChange={this.handleChange}
              />
              Orange
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="mango"
                checked={this.state.fruits.mango}
                onChange={this.handleChange}
              />
              Mango
            </label>
            <br />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
