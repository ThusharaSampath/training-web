import React from "react";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import Forms from "./components/Form/Forms";
import CardContainer from "./components/CardContainer/CardContainer";
import firebase from "./Services/firebase";

class App extends React.Component {
  state = {
    currentUser: "user1",
    diaries: [], //this is for store fetch data from firestore
  };
  fetchData = async () => {
    let db = firebase.firestore();
    let data = await db
      .collection("Users")
      .doc(this.state.currentUser)
      .collection("Diaries")
      .get();

    this.setState({
      diaries: data.docs.map((doc) => doc.data()),
    });
  };
  pushData = async (diary) => {
    let db = firebase.firestore();
    let data = await db
      .collection("Users")
      .doc(this.state.currentUser)
      .collection("Diaries")
      .add({
        id: this.state.diaries.length + 1,
        title: diary.title,
        subtitle: this.state.currentUser,
        discription: diary.discription,
      });
  };
  addDiary = (diary) => {
    diary.id = this.state.Diaries.length + 1;
    let Diaries = [...this.state.Diaries, diary];
    this.setState({
      diaries: Diaries,
    });
  };
  deleteDiary = (id) => {
    const Diaries = this.state.Diaries.filter((diary) => {
      return diary.id !== id;
    });
    this.setState({ Diaries: Diaries });
  };
  render() {
    this.fetchData();
    return (
      <div className="App">
        <Toolbar></Toolbar>

        <Forms pushData={this.pushData}></Forms>
        <div className="input-field col s6">
          <CardContainer
            Diaries={this.state.diaries}
            deleteDiary={this.deleteDiary}
          ></CardContainer>
        </div>
      </div>
    );
  }
}

export default App;
