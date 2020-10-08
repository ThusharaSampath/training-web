import React from "react";
import "./Forms.css";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
class Forms extends React.Component {
  
  
  // handleChange = () => {
  //   this.setState({
  //     hide:false
  //   })
  // };
  state = {
    title: "",
    discription: "",
    Color: "black",
    error: "",
    hide: true,
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
        hide:true
      });
    } else {
      if (this.state.title.length > 0) {
        console.log("Missing Discription");
      } else {
        console.log("Missing title");
      }
    }
  };
  expand = (e) => {
    this.setState({
      hide: false,
    });
  };
  collapse = (e) => {
    this.setState({
      hide: true,
    });
  };
  render() {
    return (
      <div className="container" onMouseLeave={this.collapse}>
        <form onSubmit={this.handleSubmit} >
          <div className="input-field col s6">
            <TextField
              id="title"
              label="Submit New"
              value={this.state.title}
              onChange={this.handleChange}
              variant="outlined"
              fullWidth
              onFocus={this.expand}
              onMouseOver={this.expand}
              multiline
              
            />
          </div>

          <div className="input-field col s6">
            <TextField
              id="discription"
              label="Description"
              value={this.state.discription}
              onChange={this.handleChange}
              variant="outlined"
              fullWidth
              multiline
              hidden={this.state.hide}
            />
          </div>
          <Fab
            variant="outlined"
            size="small"
            color="primary"
            aria-label="Add"
            onClick={this.handleSubmit}
            hidden={this.state.hide}
          >
            Submit
          </Fab>
        </form>
      </div>
    );
  }
}
export default Forms;
