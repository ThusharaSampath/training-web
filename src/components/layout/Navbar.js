import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import LOGO from "../../img/logo.svg";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import { connect } from "react-redux";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "none",
    zIndex:"0",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
   
  },
  logoS: {
    height: "20px",
    margin:"5px auto"
  },
}));

const MenuAppBar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorN, setAnchorN] = React.useState(null);
  const openM = Boolean(anchorEl);
  const openN = Boolean(anchorN);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleNotificationMenu= (event) => {
    setAnchorN(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorN(null);
  };
  const { auth,profile  } = props;
  //const { auth, profile } = props; profile has access to user data
  const links = auth.uid ? (
    <SignInLinks className={classes.space} handleClose={handleClose} name={profile.name }/>
  ) : (
    <SignOutLinks className={classes.space} handleClose={handleClose} name={profile.name }/>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static"  className={classes.root}>
        <Toolbar>
           <img
              src={LOGO}
              className={classes.logoS}
              alt="just floating logo"
            ></img>
          <Typography variant="h4" className={classes.title}>
           
            Dear-Diary
          </Typography>
          
          {auth.uid && (
            <div>
              <IconButton
                aria-label="notifications"
                aria-controls="notifications"
                aria-haspopup="true"
                onClick={handleNotificationMenu}
                color="inherit"
              >
                <NotificationsIcon />
              </IconButton>
              <Menu
                id="notifications"
                anchorEl={anchorN}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openN}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Message 1</MenuItem>
                <MenuItem onClick={handleClose}>Message 2</MenuItem>
                <MenuItem onClick={handleClose}>Message 2</MenuItem>
                <MenuItem onClick={handleClose}>Message 2</MenuItem>
              </Menu>
            </div>
          )}
          {auth.uid && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openM}
                onClose={handleClose}
              >
                {links}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};


const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(MenuAppBar);
