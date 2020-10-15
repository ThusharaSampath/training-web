import React, { Component } from "react";
import { connect } from "react-redux";
import DiaryCard from "./DiaryCard";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";

class DiaryCardContainer extends Component {
  render() {
    const { diaries, auth } = this.props;
    console.log("==>", auth);
    if (!auth.uid) return <Redirect to="/signin"></Redirect>;

    const DiaryList = diaries ? (
      diaries.map((diary) => {
        return (
          <DiaryCard
            title={diary.title}
            subtitle={diary.user}
            description={diary.description}
            key={diary.id}
            createdAt={diary.createdAt}
            //deleteDiary={deleteDiary}
            id={diary.id}
          />
        );
      })
    ) : (
      <p className="center">
        <LinearProgress />
      </p>
    );
    return (
      <Grid container spacing={3} style={{ margin: "10px", padding: "20px" ,width:"100%"}}>
        {DiaryList}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //diaries: state.diaryRuducer.diaries,
    diaries: state.firestore.ordered.Diaries,
    auth: state.firebase.auth,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Diaries" }])
)(DiaryCardContainer);
