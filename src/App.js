import React from "react";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import Forms from "./components/Form/Forms";
import CardContainer from "./components/CardContainer/CardContainer";
import firebase  from "./Services/firebase";
class App extends React.Component {
  state = {
    Diaries: [
      {
        id: 1,
        title: "Meeting",
        subtitle: "meet with mr.jone",
        discription:
          "talk about new building You can add tabs to your cards by adding a dividing cards-tabs div inbetween your header content and your tab content.",
      },
     
    ],
  };
  addDiary = (diary) => {
    diary.id = this.state.Diaries.length + 1;
    let Diaries = [...this.state.Diaries, diary];
    this.setState({
      Diaries: Diaries,
    });
  };
  deleteDiary = (id) => {
    const Diaries = this.state.Diaries.filter((diary) => {
      return diary.id !== id;
    });
    this.setState({ Diaries: Diaries });
  };
  render() {
    return (
      <div className="App">
        <Toolbar></Toolbar>
        <Forms addDairy={this.addDiary}></Forms>
        <CardContainer
          Diaries={this.state.Diaries}
          deleteDiary={this.deleteDiary}
        ></CardContainer>
      </div>
    );
  }
}

export default App;
