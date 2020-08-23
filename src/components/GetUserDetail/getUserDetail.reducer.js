import { PERSON_DETAIL } from "./types";
  
  const initialState = {
    userNameDetail: {
        name: "",
        lastName: "",
        affordibilityRange: null
    },
    isShowModal: false
  };
  
  const getUserDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      case PERSON_DETAIL:
        return {
          ...state,
          userNameDetail: action.payload,
          isShowModal: true
        };
      default:
        return state;
    }
  };
  export default getUserDetailReducer;