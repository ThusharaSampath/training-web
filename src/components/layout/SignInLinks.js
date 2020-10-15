import React from "react";
import { connect } from "react-redux";
import { SignOutAction } from "../../redux/actions/AuthActions";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from '@material-ui/core/Divider';

const SignInLinks = (props) => {
  return (
    
    <div>
        <MenuItem onClick={props.handleClose}>{props.name}</MenuItem>
        <Divider/>
        <MenuItem onClick={props.handleClose}>My Profile</MenuItem>
        <MenuItem onClick={props.handleClose}>My Calender</MenuItem>
        <MenuItem onClick={props.handleClose}>My Inbox</MenuItem>  
        <MenuItem onClick={props.handleClose , props.signOut}>Log out</MenuItem>
     </div> 
  );
};
const mapDispatchToProps=(dispatch)=>{
  return{
    signOut:()=>dispatch(SignOutAction())

    
  }
}
export default connect(null,mapDispatchToProps)(SignInLinks);
