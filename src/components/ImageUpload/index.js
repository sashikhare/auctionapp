import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ImageUpload = props => {
    const {imageUpload,selectedImage, imageUrl, isAddPlayer = false} = props
    return(
       <>
       <input
            accept="image/*"
            type="file"
            id="select-image"
            style={{ display: "none" }}
            onChange={imageUpload}
          />
          <label htmlFor="select-image">
            <Button variant="contained" color="primary" component="span">
              {isAddPlayer ? imageUrl && selectedImage ? 'Change Photo' : 'Upload Photo' : imageUrl && selectedImage ? 'Change Logo' : 'Upload Logo'}
            </Button>
          </label>
          {imageUrl && selectedImage && (
            <Box mt={2} textAlign="center">
              <img src={imageUrl} alt={selectedImage.name} height="100px" />
            </Box>
          )}
       </> 
    )
}

export default ImageUpload;