import React from "react";

import "./App.css";
import DiaryCard from "./components/DiaryCard/DiaryCard";
import CardContainer from "./components/CardContainer/CardContainer";
import Toolbar from "./components/Toolbar/Toolbar";

function App() {
  return (
    <div className="App">
      <Toolbar></Toolbar>
      <div class="CardArea">
        <CardContainer>
        <DiaryCard
            title="This is title"
            subtitle="this is subtitle"
            discription="this is discriptionn
          . thid discription must be collapsed after it length is excede 100 characters , so lets try"
          />
           <DiaryCard
            title="This is title"
            subtitle="this is subtitle"
            discription="this is discriptionn
          . thid discription must be collapsed after it length is excede 100 characters , so lets try"
          />
           <DiaryCard
            title="This is title"
            subtitle="this is subtitle"
            discription="this is discriptionn
          . thid discription must be collapsed after it length is excede 100 characters , so lets try"
          />
           <DiaryCard
            title="This is title"
            subtitle="this is subtitle"
            discription="this is discriptionn
          . thid discription must be collapsed after it length is excede 100 characters , so lets try"
          />
        </CardContainer>
        
      </div>
    </div>
  );
}

export default App;
