export const addDairy = (diary) => {
  //async actions

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("Diaries")
      .add({
        title: diary.title,
        description: diary.description,
        user: "Mr.user",
        userId: "1",
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
