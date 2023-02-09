import React from "react";
import FormLabel from "@mui/material/FormLabel";

const PlayerInfo = (props) => {
  const { playerInfo = {} } = props;
  const {
    firstName = "",
    lastName = "",
    age = "",
    area = "",
    batsmanType = "",
    birthYear = "",
    bowlerType = "",
    city = "",
    fielderType = "",
    gender = "",
    mobile = "",
  } = playerInfo;
  return (
    <div>
      <table style={{ width: "100%", textAlign: "left", borderSpacing: "1rem" }}>
        <tr>
          <td>
            <FormLabel id="fname-label">
              First Name
            </FormLabel>
          </td>
          <td>
            <FormLabel id="fname-value">
              {firstName}
            </FormLabel>
          </td>
          <td rowSpan={3} width={100}>
            <img src="http://localhost:3000/3ef5257a-fb21-404a-9a27-dd6c99d43a2d" alt="name" height="100px" />
          </td>
        </tr>
        <tr>
          <td>
            <FormLabel id="lname-label">
              Last Name
            </FormLabel>
          </td>
          <td>
            <FormLabel id="lname-value">
              {lastName}
            </FormLabel>
          </td>
        </tr>
        <tr>
          <td>
            <FormLabel id="mobile-label">
              Mobile No
            </FormLabel>
          </td>
          <td>
            <FormLabel id="mobile-value">
              {mobile}
            </FormLabel>
          </td>
        </tr>
        <tr>
          <td>
            <FormLabel id="area-label">Area</FormLabel>
          </td>
          <td>
            <FormLabel id="area-value">
              {area}
            </FormLabel>
          </td>
        </tr>
        <tr>
          <td>
            <FormLabel id="city-label">City</FormLabel>
          </td>
          <td>
            <FormLabel id="city-value">
              {city}
            </FormLabel>
          </td>
        </tr>
        <tr>
          <td>
            <FormLabel id="gender-label">
              Gender
            </FormLabel>
          </td>
          <td>
            <FormLabel id="gender-value">
              {gender}
            </FormLabel>
          </td>
        </tr>
        <tr>
          <td>
            <FormLabel id="birtyear-label">
              Year of Birth
            </FormLabel>
          </td>
          <td>
            <FormLabel id="birtyear-value">
              {birthYear}
            </FormLabel>
          </td>
        </tr>
        <tr>
          <td>
            <FormLabel id="age-label">Age</FormLabel>
          </td>
          <td>
            <FormLabel id="age-value">{age}</FormLabel>
          </td>
        </tr>
        <tr>
          <td>
            <FormLabel id="fieldertype-label">
              Fielder Type
            </FormLabel>
          </td>
          <td>
            <FormLabel id="fieldertype-value">
              {fielderType}
            </FormLabel>
          </td>
        </tr>
        <tr>
          <td>
            <FormLabel id="batsmantype-label">
              Batsman Type
            </FormLabel>
          </td>
          <td>
            <FormLabel id="batsmantype-value">
              {batsmanType}
            </FormLabel>
          </td>
        </tr>
        <tr>
          <td>
            <FormLabel id="bowlertype-label">
              Bowler Type
            </FormLabel>
          </td>
          <td>
            <FormLabel id="bowlertype-value">
              {bowlerType}
            </FormLabel>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default PlayerInfo;
