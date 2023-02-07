import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

const Team = (props) => {
  const [teamName, setTeamName] = React.useState("");
  const [teamOwnerName, setTeamOwnerName] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const handleClick = () => {
    const payload = {
      tname: teamName,
      teamOwnerName: teamOwnerName,
    };
    setSuccessMessage("Data Stored Successfully");

    // console.log("Payload", typeof(props.playerListData), playerListData.length);
    // // if(playerListData.length > 0){
    // //     const updatedPlayerList = playerListData.splice(playerListData.length, 0, payload)
    // //     props.addPlayerDetails(playerListData);
    // // }
    // // else{
    //     props.addPlayerDetails(payload);
    // // }
    // setTimeout(() => {
    //     clearAllData();
    // }, 2000)
  };

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
        <h3>Team Registration</h3>
        <TextField
          // type={Text}
          required
          fullWidth
          label="Team Name"
          id="teamName"
          size="small"
          value={teamName}
          // error={isTextValid(text)}
          // helperText={errorMessage}
          onChange={(e) => setTeamName(e.target.value)}
          sx={{ margin: "8px" }}
        />
        <TextField
          required
          fullWidth
          // type={Number}
          label="Team Owner Name"
          id="TOName"
          size="small"
          value={teamOwnerName}
          onChange={(e) => setTeamOwnerName(e.target.value)}
          sx={{ margin: "8px" }}
        />
        <div style={{ display: "flex", justifyContent: 'space-between', margin: '0.75rem', alignItems: "center" }} id="playerName">
          <FormLabel id="demo-row-radio-buttons-group-label">
            Team Logo
          </FormLabel>
          <input
            accept="image/*"
            type="file"
            id="select-image"
            style={{ display: "none" }}
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
          {console.log('ImageURL', imageUrl)}
          {console.log('selectedImage', selectedImage)}
          <label htmlFor="select-image">
            <Button variant="contained" color="primary" component="span">
              {imageUrl && selectedImage ? 'Change Logo' : 'Upload Logo'}
            </Button>
          </label>
          {imageUrl && selectedImage && (
            <Box mt={2} textAlign="center">
              <img src={imageUrl} alt={selectedImage.name} height="100px" />
            </Box>
          )}
        </div>
        <Button variant="contained" onClick={handleClick}>
          Submit
        </Button>
        {successMessage && (
          <FormLabel id="demo-row-radio-buttons-group-label">
            {successMessage}
          </FormLabel>
        )}
      </Box>
    </div>
  );
};

export default Team;
