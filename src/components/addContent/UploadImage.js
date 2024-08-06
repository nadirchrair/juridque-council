import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Button, Typography, Card, CardContent, CardActions } from '@mui/material';
import { AjouterpostImage } from '../../Fetch';

const UploadImage = () => {
  const params= useParams();
  const [postImage, setPostImage] = useState(null);
  const [postImageName, setPostImageName] = useState("");
  const [postImageError, setPostImageError] = useState("");
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleChangePostImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check file type
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        setPostImageError("Invalid file type. Please upload an image file (jpeg, png, gif).");
        return;
      }

      // Check file size (e.g., max 2MB)
      const maxSize = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSize) {
        setPostImageError("File size too large. Please upload an image smaller than 2MB.");
        return;
      }

      setPostImage(file);
      setPostImageName(file.name);
      setPostImageError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    if (postImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
        AjouterpostImage(base64String, params.id, token)
          .then(() => {
            alert('Image uploaded successfully');
            navigate('/admin'); // Redirect to the next page after successful upload
          })
          .catch((error) => {
            console.error('Error uploading image:', error);
            alert('Error uploading image');
          });
      };
      reader.readAsDataURL(postImage);
    } else {
      alert("Image is required");
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center" style={{ marginTop: "10%" }}>
   {params.id}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom style={{ paddingBottom: "20px", textAlign: "center" }}>
              Upload Image
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="post-image"
                  type="file"
                  onChange={handleChangePostImage}
                />
                <label htmlFor="post-image">
                  <Button variant="contained" component="span" fullWidth>
                    Upload Image
                  </Button>
                </label>
                {postImageName && (
                  <Typography variant="body2" style={{ marginTop: "10px" }}>
                    Selected file: {postImageName}
                  </Typography>
                )}
                {postImageError && (
                  <Typography variant="body2" color="error" style={{ marginTop: "10px" }}>
                    {postImageError}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              fullWidth
              style={{ height: "50px", marginBottom: "40px" }}
            >
              Submit Image
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UploadImage;
