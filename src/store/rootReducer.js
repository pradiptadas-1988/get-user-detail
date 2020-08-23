import { combineReducers } from "redux";
import getUserDetailReducer from "../components/GetUserDetail/getUserDetail.reducer";

const rootReducer = combineReducers({
  userDetail: getUserDetailReducer
});
export default rootReducer;
