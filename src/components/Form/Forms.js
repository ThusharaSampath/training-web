import React from "react";
import "./Forms.css";

class Forms extends React.Component {
  state = {
    title: "",
    discription: "",
    Color: "black",
    error: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.length > 0 && this.state.discription.length > 0) {
      this.props.addDairy(this.state);
      this.setState({
        title: "",
        discription: "",
      });
    } else {
      if (this.state.title.length > 0) {
        console.log("Missing Discription");
      } else {
        console.log("Missing title");
      }
    }
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field col s6">
            <input
              required
              placeholder="Submit New"
              id="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>

          <div className="input-field col s6">
            <textarea
              required
              placeholder="Enter Discription"
              id="discription"
              onChange={this.handleChange}
              value={this.state.discription}
            />
          </div>
          <button
            className="waves-effect waves-light btn"
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Forms;
