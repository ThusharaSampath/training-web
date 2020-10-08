import React from "react";

import "./Toolbar.css";

//method to toggle fullscreen

class Toolbar extends React.Component {
  render() {
    return (
    
  <nav>
  <div class="nav-wrapper">
    <a  class="brand-logo">Logo</a>
    <ul class="right">
    <li><a > <i class="material-icons">search</i></a></li>
      <li><input></input></li>
      <li><a > <i class="material-icons">notifications_none</i></a></li>
      <li><a > <i class="material-icons">account_circle</i></a></li>
    </ul>
  </div>
</nav>
    );
  }
}

export default Toolbar;
