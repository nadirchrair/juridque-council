import React from "react";
import { Grid, TextField, Button, Typography, Card, CardContent, CardActions } from "@mui/material";
import { Ajouternmr } from "../../Fetch";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
export const AddPhonenumber = () => {
  const navigate= useNavigate();
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);

  const token = localStorage.getItem('token');
 
  const handleChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    if (phoneNumber.trim() !== "") {
      console.log({ phoneNumber });
      Ajouternmr(phoneNumber, token);
      setShowAlert(true); // Show the alert on successful submission
          setTimeout(() => {
            setShowAlert(false); // Hide the alert after a delay
            navigate('/admin');
          }, 4000); // Adjust the delay as needed
        
    
    } else {
      alert("Phone number is required");
    }
  };


  return (
    <Grid container spacing={2} justifyContent="center" style={{ marginTop: "10%" }}>
      <Grid item xs={12} md={6}>
        <Card style={{padding:'40px'}} >
          <CardContent>
          {showAlert && (
              <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
               you add succes phone number
              </Alert>
            )}
            <Typography variant="h4" component="h1" gutterBottom style={{paddingBottom:"20px",textAlign:"center"}}>
              Add Phone Number
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  onChange={handleChangePhoneNumber}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              
              style={{ height: "50px" }}
            >
              Submit Phone Number
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AddPhonenumber;
