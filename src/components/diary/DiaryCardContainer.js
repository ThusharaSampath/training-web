import React, { Component } from "react";
import { connect } from "react-redux";
import DiaryCard from "./DiaryCard";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';


class DiaryCardContainer extends Component {

  render() {
    const { diaries,auth } = this.props;
    console.log("==>", auth);
    if(!auth.uid) return <Redirect to="/signin"></Redirect>

    const DiaryList = diaries ? (
      diaries.map((diary) => {
        return (
          <DiaryCard
            title={diary.title}
            subtitle={diary.subtitle}
            description={diary.description} 
            key={diary.id}
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
    return <div className="row container  collections">{DiaryList}</div>;
  }
}

// const CardContainer = ({ Diaries, deleteDiary ,...props }) => {
//   console.log(props)
//   const DiaryList = Diaries.length ? (
//     Diaries.map((diary) => {
//       return (
//         <DiaryCard
//           title={diary.title}
//           subtitle={diary.subtitle}
//           discription={diary.discription}
//           key={diary.id}
//           deleteDiary={deleteDiary}
//           id={diary.id}
//         />
//       );
//     })
//   ) : (
//     <p className="center">
//       {" "}
//       You have no Diary items today , have Fun , Life is short!{" "}
//     </p>
//   );

//   return <div className="row container  collections">{DiaryList}</div>;
// };

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
