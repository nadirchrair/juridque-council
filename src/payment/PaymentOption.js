// PaymentOption.js
import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";

const PaymentOption = ({ name, logo, onClick }) => {
  return (
    <Card sx={{ margin: 2, maxWidth: 200, textAlign: "center", boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={logo}
        alt={`${name} logo`}
      />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Button 
          fullWidth 
          variant="contained" 
          
          onClick={onClick}
          sx={{ marginTop: 2 }}
        >
          Select {name}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PaymentOption;
