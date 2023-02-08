import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useLocation } from 'react-router-dom'
import axios from "axios";
import { SET_PLAYER_DETAILS } from "../../redux/action/ActionTypes";

const PlayerDetails = props => {
    const location = useLocation()
    const { id } = location.state

    useEffect(() => {
        axios.get("/getPlayerDetailsAPI", { params: { id: id } }).then((response) => {
            // setResponseData(response.data);
            //   props.getPlayerDetails(response.data.result);
        });
    }, []);
    return (
        <div>
            This is Player details page
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        addPlayerDetails: (data) =>
          dispatch({ type: SET_PLAYER_DETAILS, payload: { playerList: data } }),
      },
      dispatch
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      playerListData: state.PlayerReducer.playerList,
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(PlayerDetails);