import React from "react";
import "./Forms.css";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";

class Forms extends React.Component {
  state = {
    title: "",
    discription: "",
    Color: "black",
    error: "",
    hide: true,
    open: false,
  };

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({
      open: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.length > 0 && this.state.discription.length > 0) {
      this.props.pushData(this.state);
      this.setState({
        title: "",
        discription: "",
        hide: true,
      });
    } else {
      this.handleOpen()
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
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <Grid container spacing={1}>
              <Grid item xs>
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
              </Grid>
              <Grid item xs={2}>
                <Fab
                  variant="outlined"
                  size="medium"
                  color="primary"
                  style={{ width: "80px" }}
                  aria-label="Add"
                  onClick={(this.handleSubmit)}
                  hidden={this.state.hide}
                >
                  Submit
                </Fab>
              </Grid>
            </Grid>
            <br></br>
            <Grid item xs={12}>
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
            </Grid>
          </div>
        </form>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          severity="error"
          open={this.state.open}
          autoHideDuration={4000}
          onClose={this.handleClose}
          message="PLEASE FILL BOTH FIELD TO ADD A NEW DIARY"
          colo
        >
      </Snackbar>
      </div>
    );
  }
}
export default Forms;
