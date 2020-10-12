import React, { Component,useCallback,useContext } from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
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
import LOGO from "../logo.svg";
import useStyles from "../Style";
import firebase from "../../Services/firebase";
import { AuthProvider } from "../../Services/Auth";



class Login extends Component {
  currentUser = useContext(AuthProvider);
  handleSignIn = useCallback(
    async (event) => {
      event.preventDefault();
      const { history } = this.state.props;
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },

    []
  );
  if (currentUser) {
    return <Redirect to="/home"/>;
  }
  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.root}>
        <span>
          {" "}
          <img src={LOGO} className={classes.logoS}></img>
          Dear Diary
        </span>
        <FormControl fullWidth onSubmit="handleSignIn">
        <Card className={classes.card}>
          <img src={LOGO} className={classes.logo}></img>
          <p className={classes.title}>Sign In</p>
          <CardContent>
            
              <TextField
                id="filled-basic"
                label="Email"
                name="name"
                variant="outlined"
                type="email"
                margin="dense"
              />

              <TextField
                id="filled-basic"
                label="Password"
                name="password"
                variant="outlined"
                type="password"
                margin="dense"
              />
           
          </CardContent>
          <CardActions>
            <Grid container>
              <Grid item xs="6">
                <Fab
                  className={classes.btn}
                  variant="extended"
                  size="medium"
                  color="primary"
                  aria-label="Add"
                  margin="dense"
                >
                  Continue <ArrowForwardIcon></ArrowForwardIcon>
                </Fab>
              </Grid>
              <Grid item xs="6">
                <Link>Fogot Password?</Link>
                <br></br>
                <Link to="signup">New to Dear Diary?</Link>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
        </FormControl>
      </Container>
    );
  }
}

export default withStyles(useStyles)(Login);
