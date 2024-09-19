// PaymentOption.js
import React from "react";
import { Card, CardContent, Typography, CardMedia, Button } from "@mui/material";

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
          color="rgb(15, 64, 61)" 
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
