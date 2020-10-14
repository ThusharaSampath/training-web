import React, { Component } from "react";
// import "./Home.css";
import Forms from "../components/diary/Forms";
import CardContainer from "../components/diary/DiaryCardContainer";
// import firebase from "../../Services/firebase";
import LinearProgress from "@material-ui/core/LinearProgress";
import useStyles from "../theme/ComponentStyles";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class Home extends Component {
 
  static propTypes = {};
  state = {
    currentUser: "user1",
    diaries: [],
    spinnerHide: true,
  };

//   fetchData = async () => {
//     this.setState({
//       spinnerHide: false,
//     });
//     let db = firebase.firestore();
//     let data = await db
//       .collection("Users")
//       .doc(this.state.currentUser)
//       .collection("Diaries")
//       .get()
//       .then();
//     this.setState({
//       diaries: data.docs.map((doc) => doc.data()),
//       spinnerHide: true,
//     });
//   };

//   pushData = async (diary) => {
//     let db = firebase.firestore();
//     let data = await db
//       .collection("Users")
//       .doc(this.state.currentUser)
//       .collection("Diaries")
//       .add({
//         id: this.state.diaries.length + 1,
//         title: diary.title,
//         subtitle: this.state.currentUser,
//         discription: diary.discription,
//       })
//       .then(this.fetchData());
//   };

//   deleteData = async (id) => {
//     let db = firebase.firestore();
//     let data = await db
//       .collection("Users")
//       .doc(this.state.currentUser)
//       .collection("Diaries")
//       .where("id", "==", id)
//       .get()
//       .then((querySnapshot) => {
//         querySnapshot.docs[0].ref.delete();
//         this.fetchData();
//       });
//   };

//   componentDidMount() {
//     this.fetchData();
//   }

  render() {
   const { auth } = this.state.props;
  if(!auth.id) return <Redirect to="/signin" />
  console.log(auth) 
    return (
      <div className="container" style={{ alignItems:"center",padding:"2vw 2vh",textAlign: "center"}}>
        <br></br>
        <h1  style={{color:"white"}}>HOME</h1>
        <Forms 
        //pushData={this.pushData}
        >

        </Forms>
        <LinearProgress hidden={this.state.spinnerHide}></LinearProgress>
        <div className="input-field col s6">
          <CardContainer
            //Diaries={this.state.diaries}
            ///deleteDiary={this.deleteData}
          ></CardContainer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //diaries: state.diaryRuducer.diaries,
   auth:state.firebase.auth
  };
};

export default connect(mapStateToProps)(withStyles(useStyles)(Home))
