import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import ImageUpload from "../../components/ImageUpload";

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

  const imageUpload = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleClick = () => {
    const payload = {
      tname: teamName,
      teamOwnerName: teamOwnerName,
    };
    setSuccessMessage("Data Stored Successfully");
  };

  return (
    <div>
      <Box
        sx={{
          width: "70%",
          margin: "auto",
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: "#e9f1f6",
          textAlign: "center",
        }}
      >
        <h3>Team Registration</h3>
        <TextField
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0.75rem",
            alignItems: "center",
          }}
          id="teamLogo"
        >
          <FormLabel id="demo-row-radio-buttons-group-label">
            Team Logo
          </FormLabel>
          <ImageUpload
            imageUpload={imageUpload}
            selectedImage={selectedImage}
            imageUrl={imageUrl}
          />
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
