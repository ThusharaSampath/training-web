import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import LOGO from "../../img/logo.svg";
import useStyles from "../../theme/Style";
import { connect } from "react-redux";
import { SignInAction } from "../../redux/actions/AuthActions";
import Snackbar from "@material-ui/core/Snackbar";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  // currentUser = useContext(AuthProvider);
  // handleSignIn = useCallback(
  //   async (event) => {
  //     event.preventDefault();
  //     const { history } = this.state.props;
  //     const { email, password } = event.target.elements;
  //     try {
  //       await firebase
  //         .auth()
  //         .signInWithEmailAndPassword(email.value, password.value);
  //       history.push("/home");
  //     } catch (error) {
  //       alert(error);
  //     }
  //   },

  //   []
  // );
  // if (currentUser) {
  //   return <Redirect to="/home"/>;
  // }
  handleSingIn = (e) => {
    //console.log(this.state);
    this.props.SignInAction(this.state);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { authErr } = this.props;
    return (
      <Container className={classes.root}>
        <span>
          {" "}
          <img
            src={LOGO}
            className={classes.logoS}
            alt="just floating logo"
          ></img>
          Dear Diary
        </span>
        <FormControl fullWidth onSubmit={this.handleSingIn}>
          <Card className={classes.card}>
            <img
              src={LOGO}
              className={classes.logo}
              alt="just floating logo"
            ></img>
            <p className={classes.title}>Sign In</p>
            <CardContent>
              <TextField
                id="email"
                label="Email"
                name="name"
                variant="outlined"
                type="email"
                margin="dense"
                fullWidth
                onChange={this.handleChange}
              />

              <TextField
                id="password"
                label="Password"
                name="password"
                variant="outlined"
                type="password"
                fullWidth
                margin="dense"
                onChange={this.handleChange}
              />
            </CardContent>
            <CardActions>
              <Grid container>
                <Grid item xs={6}>
                  <Fab
                    className={classes.btn}
                    variant="extended"
                    size="medium"
                    color="primary"
                    aria-label="Add"
                    margin="dense"
                    onClick={this.handleSingIn}
                  >
                    Continue <ArrowForwardIcon></ArrowForwardIcon>
                  </Fab>
                </Grid>
                <Grid item xs={6}>
                  <Link to="/">Fogot Password?</Link>
                  <br></br>
                  <Link to="/signup">New to Dear Diary?</Link>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </FormControl>
        <div>{(authErr==='login failed') ? (<Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          severity="error"
          open={this.state.open}
          autoHideDuration={4000}
          onClose={this.handleClose}
          message="oops! Please check credintials and try again!"
        ></Snackbar>):null}</div>
      </Container>
    );
  }
}
const mapStateToProps =(state)=>{
  return{
    authErr:state.authReducer.authErr
  }
}
const matchDispatchToProps = (dispatch) => {
  return {
    SignInAction: (credintials) => dispatch(SignInAction(credintials)),
  };
};
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withStyles(useStyles)(SignIn));
