const initState = {
  diaries: [
    { id: 1, title: "diary1", description: "dummy description" },
    { id: 2, title: "diary2", description: "dummy description" },
    { id: 3, title: "diary3", description: "dummy description" },
  ],
};

const DairyReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_DIARY":
      console.log("created", action.diary);
      return state;

    case "CREAT_DIARY_ERROR":
      console.log("oops, an error occuerd", action.err);
      return state;

    default:
      return state;
  }
};

export default DairyReducer;
