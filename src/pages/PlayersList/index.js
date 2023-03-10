import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { SET_PLAYERS_LIST } from "../../redux/action/ActionTypes";
import { columns } from "./playerList";

const PlayerList = (props) => {
  const { playerListData = {} } = props;

  useEffect(() => {
    axios.get("/playersListAPI").then((response) => {
      props.updatePlayersList(response.data.result);
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
      updatePlayersList: (data) =>
        dispatch({ type: SET_PLAYERS_LIST, payload: { playerList: data } }),
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
