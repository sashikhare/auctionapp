import { SET_PLAYER_DETAILS } from "../action/ActionTypes";

const initialState = {
    playerList: []
};

const playerReducer = (state = initialState, action) => {
  const { type = null, payload = {} } = action;
  console.log('payload redu', payload)
  switch (type) {
    case SET_PLAYER_DETAILS: {
      return {
        playerList: [payload.playerList],
      };
    }
    default:
        return state;
  }
};

export default playerReducer;
