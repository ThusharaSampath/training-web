import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { SignOutAction } from "../../redux/actions/AuthActions";


const SignInLinks = (props) => {
  return (
    
    <div>
        <NavLink to="/">Notifications</NavLink>     
        <a href="/signin" onClick={props.signOut}>Sign Out</a>
        <NavLink to="/">About</NavLink>
     </div> 
  );
};
const mapDispatchToProps=(dispatch)=>{
  return{
    signOut:()=>dispatch(SignOutAction())

    
  }
}
export default connect(null,mapDispatchToProps)(SignInLinks);
