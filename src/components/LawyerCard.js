// src/components/LawyerCard.js
import React from 'react';
import { Card, CardContent, Avatar, Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';

const LawyerCardContainer = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: 'auto',
  border: '1px solid #ccc',
  borderRadius: '15px',
  direction: 'rtl',
}));

const LawyerCard = ({ name, title, wilaya, licenseNumber, phone, email, address, profilePicture, firmLogo }) => {
  return (
    <LawyerCardContainer>
      <CardContent>
       
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Avatar src={profilePicture} alt={name} sx={{ width: 80, height: 80 }} />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {wilaya}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              رقم الترخيص: {licenseNumber}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Box sx={{ padding: '0 16px' }}>
        <Typography variant="body2" color="text.secondary">
          الهاتف: {phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          البريد الإلكتروني: {email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          العنوان: {address}
        </Typography>
      </Box>
      <CardContent>
    
       
      </CardContent>
    </LawyerCardContainer>
  );
};

export default LawyerCard;
