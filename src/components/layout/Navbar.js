import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LOGO from "../../img/logo.svg";
import { Link } from "react-router-dom";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  space: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: "10px",
  },
  bar: {
    backgroundColor: "rgb(0, 158, 231)",
  },
  action: {
    float: "right",
    display: "flex",
    right: "0",
  },
  logoS: {
    height: "20px",

    zIndex: "0",
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
const {auth} = props
const links = auth.uid ?  <SignInLinks className={classes.space} />:<SignOutLinks className={classes.space} />
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/home">
            <Typography variant="h6" className={classes.title}>
              <img
                src={LOGO}
                className={classes.logoS}
                alt="just floating logo"
              ></img>{" "}
              Dear-Dairy
            </Typography>
          </Link>
          <div className={classes.action}>
            {links}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
const mapStateToProps = (state) => {
  
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(NavBar);
