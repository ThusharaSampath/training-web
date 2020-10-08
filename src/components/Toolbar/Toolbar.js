import React from "react";

import "./Toolbar.css";

//method to toggle fullscreen

class Toolbar extends React.Component {
  render() {
    return (
    
  <nav >
  <div className="nav-wrapper">
    <div className="left Hide" >
      <a  className="brand-logo ">Dear Diary </a>
    </div>
    <ul className="right">
    <li><a > <i className="material-icons">search</i></a></li>
      <li><input></input></li>
      <li><a > <i className="material-icons">notifications_none</i></a></li>
      <li><a > <i className="material-icons">account_circle</i></a></li>
    </ul>
  </div>
</nav>
    );
  }
}

export default Toolbar;
