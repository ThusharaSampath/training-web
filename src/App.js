import React from "react";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import Forms from "./components/Form/Forms";
import CardContainer from "./components/CardContainer/CardContainer";
import firebase from "./Services/firebase";

class App extends React.Component {
  state = {
    currentUser: "user1",
    Diaries: [
      //this list for keep current Diaries
      {
        id: 1,
        title: "Meeting",
        subtitle: "meet with mr.jone",
        discription:
          "talk about new building You can add tabs to your cards by adding a dividing cards-tabs div inbetween your header content and your tab content.",
      },
    ],
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
    this.fetchData();
    return (
      <div className="App">
        <Toolbar></Toolbar>

        <Forms addDairy={this.addDiary}></Forms>
        <div className="input-field col s6">
          <CardContainer
            Diaries={this.state.diaries}
            deleteDiary={this.deleteDiary}
          ></CardContainer>
        </div>
        {/* for testing */}
        <ul>
          {this.state.diaries.map((user) => (
            <ul key={user.title}>
              <li>{user.id}</li>
              <li>{user.title}</li>
              <li>{user.discription}</li>
            </ul>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
