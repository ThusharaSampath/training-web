import React from "react";
import { useRef, useState } from "react";
import Fullscreen from "react-full-screen";

import "./Toolbar.css";
let fullScreenRef = useRef(null);
let [fullScreenMode, setfullScreenMode] = useState(False);

//method to toggle fullscreen
fullScreenToggler = () => {
  setfullScreenMode(!fullScreenMode);
};

function Toolbar() {
  return (
    <div className="">
      //element to be toggled
      <FullScreen enabled={fullScreenMode}>
        <div className="main_page">
          <button onClick={fullScreenToggler}>FullScreen Mode</button>
        </div>
      </FullScreen>
    </div>
  );
}

export default Toolbar;
