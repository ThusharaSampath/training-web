export const addDairy = (diary) => {
  //async actions

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const profile = getState().firebase.profile;
    console.log("profile ====>",profile)
    const UID = getState().firebase.auth.uid;
    const firestore = getFirestore();
    firestore
      .collection("Diaries")
      .add({
        title: diary.title,
        description: diary.description,
        user: profile.name,
        userId: UID,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: "ADD_DIARY",
          diary: diary,
        });
      })
      .catch((err) => {
        dispatch({
          type: "CREAT_DIARY_ERROR",
          err: err,
        });
      });
  };
};
