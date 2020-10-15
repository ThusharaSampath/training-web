import React from "react";
import { NavLink } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";


const SignOutLinks = (props) => {
  return (
    <div>

        <NavLink to="/signup"><MenuItem onClick={props.handleClose}>Sign Up</MenuItem></NavLink>

   </div>
  );
};
export default SignOutLinks;
