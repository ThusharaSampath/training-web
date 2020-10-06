import React from "react";

import "./App.css";
import DiaryCard from "./components/DiaryCard/DiaryCard";


function App() {
  var dimensions = [
    { width:800, height: 1200 },
    { width: 800, height: 600 },
    { width: 800, height: 800 },
    { width: 800, height: 600 },
    { width: 800, height: 1200 },
    { width: 800, height: 600 },
    { width: 800, height: 400 },
    { width: 800, height: 400 },
    { width: 800, height: 400 },
    { width: 800, height: 800 },
  ];
  return (
    <div className="App">
      <header className="App-header">Header</header>
      <div class="CardArea">
      <Columns dimensions={dimensions}>
        <DiaryCard
          title="This is title"
          subtitle="this is subtitle"
          discription="this is discriptionn
          . thid discription must be collapsed after it length is excede 100 characters , so lets try"
        />
        <DiaryCard
          title="This is title"
          subtitle="this is subtitle"
          discription="this is discription"
        />
        <DiaryCard
          title="This is title"
          subtitle="this is subtitle"
          discription="this is discription"
        />
        <DiaryCard
          title="This is title"
          subtitle="this is subtitle"
          discription="this is discription"
        />
        <DiaryCard
          title="This is title"
          subtitle="this is subtitle"
          discription="this is discription"
        />
        <DiaryCard
          title="This is title"
          subtitle="this is subtitle"
          discription="this is discription"
        />
        </Columns>
      </div>
    </div>
  );
}

export default App;
