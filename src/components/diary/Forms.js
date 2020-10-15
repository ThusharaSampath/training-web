import React from "react";
// import "./Forms.css";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import FormControl from "@material-ui/core/FormControl";
import useStyles from "../../theme/ComponentStyles";
import { withStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import Fade from "@material-ui/core/Fade";
import { addDairy } from "../../redux/actions/DiaryActions";
import { connect} from "react-redux";
import Container from '@material-ui/core/Container';


class Forms extends React.Component {
  state = {
    title: "",
    description: "",
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
    if (this.state.title.length > 0 && this.state.description.length > 0) {
      //this.props.pushData(this.state);
      this.props.addDairy(this.state);
      this.setState({
        title: "",
        description: "",
        hide: true,
      });
    } else {
      this.handleOpen();
      if (this.state.title.length > 0) {
        console.log("Missing description");
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
    const { classes } = this.props;
    return (
      <Container   className={classes.container} onMouseLeave={this.collapse}>
      
        <FormControl fullWidth onSubmit={this.handleSubmit} className={classes.form} >
          <div className="container">
            <Grid container spacing={1}>
              <Grid item xs={10} className={classes.left} >
                <TextField
                  id="title"
                  placeholder="  Submit New"
                  value={this.state.title}
                  onChange={this.handleChange}
                  InputProps={{ disableUnderline: true }}
                  fullWidth
                  onFocus={this.expand}
                  onMouseOver={this.expand}
                  multiline
                  required
                  error={this.state.open}
                  className={classes.textIpTitle}
                />
              </Grid>
              
                <Grid item xs={2}>
                <Fade in={!this.state.hide}>
                  <Fab
                    size="medium"
                    color="primary"
                    style={{ width: "80px" }}
                    aria-label="Add"
                    onClick={this.handleSubmit}
                    hidden={this.state.hide}
                    className={classes.submitBtn}
                  >
                    Submit
                  </Fab></Fade>
                </Grid>
              
            </Grid>
            <br></br>
            <Collapse in={!this.state.hide}>
              <Grid item xs={12}>
                <TextField
                  id="description"
                  required
                  placeholder="  Description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  fullWidth
                  multiline
                  hidden={this.state.hide}
                  style={{ height: "100px", opacity: "0.4" }}
                  error={this.state.open}
                  className={classes.textIpDicpt}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>{" "}
            </Collapse>
          </div>
        </FormControl>
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
        ></Snackbar>
      
      </Container>
    );
  }
}

const mapDispatchTProps = (dispatch) => {
  return {
    addDairy: (diary) => dispatch(addDairy(diary)),
  };
};
export default connect(null, mapDispatchTProps)(withStyles(useStyles)(Forms));
