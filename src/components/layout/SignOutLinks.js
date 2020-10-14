import React from "react";
import { NavLink } from "react-router-dom";

const SignOutLinks = () => {
  return (
    <div>
        <NavLink to="/">Sign In</NavLink>
      
        <NavLink to="/">About</NavLink>
   </div>
  );
};
export default SignOutLinks;
