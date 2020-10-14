import AuthReducer from "./AuthReducer";
import { combineReducers } from "redux";
import DairyReducer from "./DiaryReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const RootReducer = combineReducers({
  authReducer: AuthReducer,
  diaryRuducer: DairyReducer,
  firestore:firestoreReducer,
  firebase:firebaseReducer,
});

export default RootReducer