import React, { Component, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
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

class SignUp extends Component {
  handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { history } = this.state.props;
      const { email, password1 } = event.target.elements;
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password1.value);
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },

    []
  );
  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.root}>
        <span>
          <img src={LOGO} className={classes.logoS}></img>
          Dear Diary
        </span>
        <FormControl fullWidth onSubmit={this.handleSignUp}>
          <Card className={classes.card}>
            <img src={LOGO} className={classes.logo}></img>
            <p className={classes.title}>Sign Up</p>
            <CardContent>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                type="email"
                margin="dense"
              />

              <TextField
                id="password1"
                name="password1"
                label="Password"
                variant="outlined"
                type="password"
                margin="dense"
              />
              <TextField
                id="password2"
                name="password2"
                label="Re-Enter Password"
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
                    type="submit"
                  >
                    Let's Go <ArrowForwardIcon></ArrowForwardIcon>
                  </Fab>
                </Grid>
                <Grid item xs="6">
                  <Link to="/login">Already Have a account?</Link>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </FormControl>
      </Container>
    );
  }
}

export default withStyles(useStyles)(SignUp);
