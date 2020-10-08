import React from "react";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import Forms from "./components/Form/Forms";
import CardContainer from "./components/CardContainer/CardContainer";
import firebase from "./Services/firebase";
import LinearProgress from '@material-ui/core/LinearProgress';
class App extends React.Component {
  state = {
    currentUser: "user1",
    diaries: [], //this is for store fetch data from firestore
    spinnerHide: true
  };
  fetchData = async () => {
    this.setState({
      spinnerHide:false
    });
    let db = firebase.firestore();
    let data = await db
      .collection("Users")
      .doc(this.state.currentUser)
      .collection("Diaries")
      .get();

    this.setState({
      diaries: data.docs.map((doc) => doc.data()),
      spinnerHide:true
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
      this.fetchData();
  };
  deleteData = async (id) => {

    let db = firebase.firestore();
    let data = await db
      .collection("Users")
      .doc(this.state.currentUser)
      .collection("Diaries")
      .where("id", "==", id).get()
      .then(querySnapshot => {
          querySnapshot.docs[0].ref.delete();
      });
      this.fetchData();
  };
  // addDiary = (diary) => {
  //   diary.id = this.state.Diaries.length + 1;
  //   let Diaries = [...this.state.Diaries, diary];
  //   this.setState({
  //     diaries: Diaries,
  //   });
  // };
  // deleteDiary = (id) => {
  //   const Diaries = this.state.Diaries.filter((diary) => {
  //     return diary.id !== id;
  //   });
  //   this.setState({ Diaries: Diaries });
  // };
componentDidMount() {
  this.fetchData()
}
  render() {
   
    return (
      <div className="App">
        <Toolbar></Toolbar>
        
        <Forms pushData={this.pushData}></Forms>
        <LinearProgress hidden = {this.state.spinnerHide}></LinearProgress>
        <div className="input-field col s6">
          <CardContainer
            Diaries={this.state.diaries}
            deleteDiary={this.deleteData}
          ></CardContainer>
        </div>
      </div>
    );
  }
}

export default App;
