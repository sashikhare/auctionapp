import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SET_PLAYER_DETAILS } from "../../redux/action/ActionTypes";

// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import FormControl from "@mui/material/FormControl";
// import FormHelperText from "@mui/material/FormHelperText";
// import InputLabel from "@mui/material/InputLabel";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import { green } from "@mui/material/colors";

const Players = (props) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [mobileNo, setMobileNo] = React.useState("");
  const [area, setArea] = React.useState("");
  const [city, setCity] = React.useState("");
  const [gender, setGender] = React.useState();
  const [birthYear, setBirthYear] = React.useState();
  const [age, setAge] = React.useState();
  const [fielderType, setFielderType] = React.useState();
  const [batsmanType, setBatsmanType] = React.useState();
  const [bowlerType, setBowlerType] = React.useState();
  // const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");
  const [respnseData, setResponseData] = useState();
  // const [errorMsg, setErrorMsg] = useState()

  const {playerListData} = props;

  const baseUrl = '/playersDetailsAPI';

  useEffect(() => {
      axios.get(baseUrl).then((response) => {
        // setResponseData(response.data);
        console.log('sagar', response)
        props.addPlayerDetails(response.data.result);
      });
  },[])

  const callApi =() =>{
    axios.get(baseUrl).then((response) => {
      // setResponseData(response.data);
      props.addPlayerDetails(response.data);
    });
  }

  const clearAllData = () => {
    setFirstName('');
    setLastName('');
    setMobileNo('');
    setArea('')
    setCity('');
    setGender();
    setBirthYear('');
    setAge('');
    setFielderType();
    setBatsmanType();
    setBowlerType();
    setSuccessMessage('');
  }

  const handleClick = () => {
    const payload = {
      fname: firstName,
      lname: lastName,
      mob: mobileNo,
      area: area,
      city: city,
      gender: gender,
      yob: birthYear,
      age: age,
      batsmanType: batsmanType,
      fielderType: fielderType,
      bowlerType: bowlerType,
    };
    setSuccessMessage("Data Stored Successfully");

    
    console.log("Payload", typeof(props.playerListData), playerListData.length);
    // if(playerListData.length > 0){
    //     const updatedPlayerList = playerListData.splice(playerListData.length, 0, payload)
    //     props.addPlayerDetails(playerListData);
    // }
    // else{
        props.addPlayerDetails(payload);
    // }
    setTimeout(() => {
        clearAllData();
    }, 2000)
  };

  //   const isTextValid = (text) => {
  //     console.log("coming here", text);
  //     const regexp1 = new RegExp("[^a-z]");
  //     if (regexp1.test(text)) {
  //       setErrorMessage("Enter Proper Name");
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   };

  const calculateAge = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    setAge(currentYear - birthYear);
  };

  return (
    // <div style={{margin: 'auto', border: '1px solid black', width: '70%', marginTop: '3rem', padding: '1rem'}}>
    //     This is Players page
    // </div>
    <div>
      {console.log('response data', respnseData)}
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
        <h3>Player Registration</h3>
        <div style={{ display: "flex" }} id="playerName">
          <TextField
            // type={Text}
            required
            fullWidth
            label="First Name"
            id="fName"
            size="small"
            value={firstName}
            // error={isTextValid(text)}
            // helperText={errorMessage}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ margin: "8px" }}
          />
          <TextField
            required
            fullWidth
            // type={Number}
            label="Last Name"
            id="lName"
            size="small"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            sx={{ margin: "8px" }}
          />
        </div>
        <TextField
          // type={Text}
          required
          fullWidth
          label="Mobile No"
          id="mobile"
          size="small"
          value={mobileNo}
          // error={isTextValid(text)}
          // helperText={errorMessage}
          onChange={(e) => setMobileNo(e.target.value)}
          sx={{ margin: "8px 4px 8px 8px" }}
        />
        <div style={{ display: "flex" }} id="areaDetails">
          <TextField
            // type={Text}
            required
            fullWidth
            label="Area"
            id="area"
            size="small"
            value={area}
            // error={isTextValid(text)}
            // helperText={errorMessage}
            onChange={(e) => setArea(e.target.value)}
            sx={{ margin: "8px" }}
          />
          <TextField
            required
            fullWidth
            // type={Number}
            label="City"
            id="city"
            size="small"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            sx={{ margin: "8px" }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "8px" }}>
          <FormLabel id="demo-row-radio-buttons-group-label" required>Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              sx={{ margin: "4px" }}
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              sx={{ margin: "4px" }}
            />
            
          </RadioGroup>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField
            required
            fullWidth
            // type={Number}
            label="Birth Year"
            id="birthYear"
            size="small"
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
            onBlur={calculateAge}
            // value={birthYear}
            sx={{ margin: "8px" }}
          />
          <TextField
            // required
            fullWidth
            // type={Number}
            label="Age"
            id="age"
            size="small"
            value={age}
            sx={{ margin: "8px" }}
          />
        </div>
        <h3>Cricket Information</h3>
        <div style={{ display: "flex", alignItems: "center", margin: "8px" }}>
          <FormLabel id="fielderType" required>
            Fielder Type:
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={fielderType}
            onChange={(e) => setFielderType(e.target.value)}
          >
            <FormControlLabel
              value="Batsman"
              control={<Radio />}
              label="Batsman"
              sx={{ margin: "4px" }}
            />
            <FormControlLabel
              value="Bowler"
              control={<Radio />}
              label="Bowler"
              sx={{ margin: "4px" }}
            />
            <FormControlLabel
              value="Batting All-Rounder"
              control={<Radio />}
              label="Batting All-Rounder"
              sx={{ margin: "4px" }}
            />
            <FormControlLabel
              value="Bowling All-Rounder"
              control={<Radio />}
              label="Bowling All-Rounder"
              sx={{ margin: "4px" }}
            />
          </RadioGroup>
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "8px" }}>
          <FormLabel id="batsmanType" required>
            Batsman Type:
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={batsmanType}
            onChange={(e) => setBatsmanType(e.target.value)}
          >
            <FormControlLabel
              value="Right Hand Batsman"
              control={<Radio />}
              label="Right Hand Batsman"
              sx={{ margin: "4px" }}
            />
            <FormControlLabel
              value="Left Hand Batsman"
              control={<Radio />}
              label="Left Hand Batsman"
              sx={{ margin: "4px" }}
            />
          </RadioGroup>
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "8px" }}>
          <FormLabel id="bowlerType" required>
            Bowler Type:
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={bowlerType}
            onChange={(e) => setBowlerType(e.target.value)}
          >
            <FormControlLabel
              value="Right Hand Bowler"
              control={<Radio />}
              label="Right Hand Bowler"
              sx={{ margin: "4px" }}
            />
            <FormControlLabel
              value="Left Hand Bowler"
              control={<Radio />}
              label="Left Hand Bowler"
              sx={{ margin: "4px" }}
            />
          </RadioGroup>
        </div>
        <div>
        <Button variant="contained" onClick={handleClick}>
          Submit
        </Button>

        <Button variant="contained" onClick={callApi}>
          call
        </Button>
        </div>
        {successMessage && (
          <FormLabel id="demo-row-radio-buttons-group-label">
            {successMessage}
          </FormLabel>
        )}
      </Box>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			addPlayerDetails: data =>
				dispatch({ type: SET_PLAYER_DETAILS, payload: {playerList: data} }),
		},
		dispatch,
	);
};

const mapStateToProps = state => {
    return{
        playerListData : state.PlayerReducer.playerList,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Players);
