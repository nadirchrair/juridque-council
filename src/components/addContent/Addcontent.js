import React from "react";
import { Grid, TextField, Button, Typography, Card, CardContent, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AjoutepostText } from "../../Fetch";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
const Addcontent = () => {
  const [postText, setPostText] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleChangePostText = (event) => {
    setPostText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    if (postText.trim() !== "") {
      try {
        const response = await AjoutepostText(postText, token);
        setShowAlert(true); // Show the alert on successful submission
        setTimeout(() => {
          setShowAlert(false); // Hide the alert after a delay
          navigate(`upload-image/${response.id}`);
        }, 4000); // Adjust the delay as needed
              console.log(response.id);
      } catch (error) {
        console.error('Error creating post:', error);
        alert('Error creating post');
      }
    } else {
      alert("Post text is required");
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center" style={{ marginTop: "10%" }}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            
          {showAlert && (
              <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
               you add succes add offers
              </Alert>
            )}
            <Typography variant="h4" component="h1" gutterBottom style={{ paddingBottom: "20px", textAlign: "center" }}>
              Add Post
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="post-text"
                  label="Post Text"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  onChange={handleChangePostText}
                />
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
              Submit Post
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Addcontent;
