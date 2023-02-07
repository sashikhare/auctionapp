import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { SET_PLAYER_DETAILS } from "../../redux/action/ActionTypes";
import { columns } from "./playerList";

const PlayerList = (props) => {
  const { playerListData } = props;
  console.log("sagar res", playerListData);

  useEffect(() => {
    axios.get("/playersDetailsAPI").then((response) => {
      // setResponseData(response.data);
      props.addPlayerDetails(response.data.result);
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
        <h3>Players Details</h3>
        <div style={{height: "300px"}}>
          <DataGrid
            rows={playerListData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            // checkboxSelection
          />
        </div>
      </Box>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
