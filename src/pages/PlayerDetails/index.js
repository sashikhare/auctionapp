import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import axios from "axios";
import { SET_PLAYER_DETAILS } from "../../redux/action/ActionTypes";
import PlayerInfo from "./playerInfo";

const PlayerDetails = (props) => {
  const { playerInfo = {} } = props;
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    axios
      .get("/getPlayerDetailsAPI", { params: { id: id } })
      .then((response) => {
        props.getPlayerDetails(response.data.result);
      });
  }, []);

  return (
    <div>
      <Box
        sx={{
          width: "70%",
          //   height: "",
          margin: "auto",
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: "#e9f1f6",
          textAlign: "center",
          //   "&:hover": {
          //     backgroundColor: "primary.main",
          //     opacity: [0.9, 0.8, 0.7],
          //   },
        }}
      >
        <h3>Player Details</h3>
        <PlayerInfo playerInfo={playerInfo} />
      </Box>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getPlayerDetails: (data) =>
        dispatch({
          type: SET_PLAYER_DETAILS,
          payload: { playerDetails: data },
        }),
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    playerInfo: state.PlayerReducer.playerDetails,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerDetails);
