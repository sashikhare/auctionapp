import { SET_PLAYER_DETAILS } from "../action/ActionTypes";

const initialState = {
    playerList: []
};

const playerReducer = (state = initialState, action) => {
  const { type = null, payload = {} } = action;
  console.log('payload redu', payload)
  console.log('payload redu 1', state)
  switch (type) {
    case SET_PLAYER_DETAILS: {
      // if(state.length > 0){
        return {
          playerList: payload.playerList,
        }
      // }
      // else{
      //   return {
      //     playerList: [payload.playerList],
      //   };
      // }
      
    }
    default:
        return state;
  }
};

export default playerReducer;
