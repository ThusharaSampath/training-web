import React, { Component } from "react";
// import "./Home.css";
import Forms from "../components/diary/Forms";
import CardContainer from "../components/diary/DiaryCardContainer";
// import firebase from "../../Services/firebase";
import LinearProgress from "@material-ui/core/LinearProgress";
import useStyles from "../theme/ComponentStyles";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { compose } from "redux";

export class Home extends Component {
  static propTypes = {};
  state = {
    currentUser: "user1",
    diaries: [],
    spinnerHide: true,
  };

  
  render() {
    return (
      <div
        className="container"
        style={{
          alignItems: "center",
          padding: "2vw 2vh",
          textAlign: "center",
        }}
      >
        <br></br>
        <h1 style={{ color: "white" }}>HOME</h1>
        <Forms></Forms>
        <LinearProgress hidden={this.state.spinnerHide}></LinearProgress>
        <div>
          <CardContainer></CardContainer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { //auth does not map i dont know why ;(
  return {
    auth: state.firebase.auth,
  };
};

export default compose(connect(mapStateToProps), withStyles(useStyles))(Home);
