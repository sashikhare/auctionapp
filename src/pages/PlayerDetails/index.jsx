import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useLocation } from 'react-router-dom'
import axios from "axios";
import { SET_PLAYER_DETAILS } from "../../redux/action/ActionTypes";

const PlayerDetails = props => {
    const location = useLocation()
    const { id } = location.state
    const {playerDetails} = props;
    console.log(playerDetails)

    useEffect(() => {
        axios.get("/getPlayerDetailsAPI", { params: { id: id } }).then((response) => {
            // setResponseData(response.data);
            props.getPlayerDetails(response.data.result);
        });
    }, []);
    return (
        <div>
            {playerDetails.firstName}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getPlayerDetails: (data) =>
                dispatch({ type: SET_PLAYER_DETAILS, payload: { playerDetails: data } }),
        },
        dispatch
    );
};

const mapStateToProps = (state) => {
    return {
        playerDetails: state.PlayerReducer.playerDetails,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerDetails);