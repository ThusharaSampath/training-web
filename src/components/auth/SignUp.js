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

class SignUp extends Component {
    state ={
        email :"",
        name:"",
        password1:"",
        password2:"",

    }
  // handleSignUp = useCallback(
  //   async (event) => {
  //     event.preventDefault();
  //     const { history } = this.state.props;
  //     const { email, password1 } = event.target.elements;
  //     try {
  //       await firebase
  //         .auth()
  //         .createUserWithEmailAndPassword(email.value, password1.value);
  //       history.push("/home");
  //     } catch (error) {
  //       alert(error);
  //     }
  //   },

  //   []
  // );
  handleSignUp = (e) => {
    console.log(this.state);
  };
  handleChange = (e)=>{
      this.setState({
        [e.target.id]:e.target.value
      })

  }
  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.root}>
        <span>
          <img src={LOGO} className={classes.logoS} alt="just floating logo"></img>
          Dear Diary
        </span>

        <Card className={classes.card}>
          <img src={LOGO} className={classes.logo} alt="just floating logo"></img>
          <p className={classes.title}>Sign Up</p>
          <CardContent>
            <FormControl fullWidth onSubmit={this.handleSignUp}>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                type="email"
                margin="dense"
                fullWidth
                onChange = {this.handleChange}
              />
               <TextField
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                type="text"
                fullWidth
                margin="dense"
                onChange = {this.handleChange}
              />

              <TextField
                id="password1"
                name="password1"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="dense"
                onChange = {this.handleChange}
              />
              <TextField
                id="password2"
                name="password2"
                label="Re-Enter Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="dense"
                onChange = {this.handleChange}
              />
              <Grid container>
                <Grid item xs={6}>
                  <Fab
                    className={classes.btn}
                    variant="extended"
                    size="medium"
                    color="primary"
                    aria-label="Add"
                    margin="dense"
                    type="submit"
                    onClick={this.handleSignUp}
                  >
                    Let's Go <ArrowForwardIcon></ArrowForwardIcon>
                  </Fab>
                </Grid>
                <Grid item xs={6}>
                  <Link to="/signin">Already Have a account?</Link>
                </Grid>
              </Grid>
            </FormControl>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Container>
    );
  }
}

export default withStyles(useStyles)(SignUp);
