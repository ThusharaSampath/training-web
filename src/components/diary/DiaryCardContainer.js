import React, { Component } from "react";
import { connect } from "react-redux";
import DiaryCard from "./DiaryCard";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class DiaryCardContainer extends Component {
  render() {
    const { diaries } = this.props;
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
        {" "}
        You have no Diary items today , have Fun , Life is short!{" "}
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
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Diaries" }])
)(DiaryCardContainer);
