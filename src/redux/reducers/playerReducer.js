import { SET_PLAYER_DETAILS } from "../action/ActionTypes";

const initialState = {
    playerList: []
};

const playerReducer = (state = initialState, action) => {
  const { type = null, payload = {} } = action;
  switch (type) {
    case SET_PLAYER_DETAILS: {
      // if(state.length > 0){
        return {
          playerList: payload.playerList,
        }
    }
    default:
        return state;
  }
};

export default playerReducer;
