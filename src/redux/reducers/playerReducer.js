import { Cases } from "@mui/icons-material";
import { SET_PLAYERS_LIST, SET_PLAYER_DETAILS } from "../action/ActionTypes";

const initialState = {
    playerList: []
};

const playerReducer = (state = initialState, action) => {
  const { type = null, payload = {} } = action;
  switch (type) {
    case SET_PLAYERS_LIST: {
      // if(state.length > 0){
        return {
          playerList: payload.playerList,
        }
    }
    case SET_PLAYER_DETAILS:{
      return{
        playerDetails: payload.playerDetails[0]
      }
    }
    default:
        return state;
  }
};

export default playerReducer;
