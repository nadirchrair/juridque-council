import React from 'react';
import { Card, CardContent, Avatar, Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';

const LawyerCardContainer = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: 'auto',
  borderRadius: '15px',
  direction: 'rtl',
  '&:hover': {
    border: `2px solid rgb(15, 64, 61)`,
  },
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
  //color: 'rgb(15, 64, 61)',
  fontFamily: 'Arial, sans-serif',
  //textDecoration: 'underline',
  fontSize:'15px',
}));

const SubtitleTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Georgia, serif',
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
            <SubtitleTypography variant="subtitle1" color="text.secondary">
              {title}
            </SubtitleTypography>
            <Typography variant="body2" color="text.secondary">
              {wilaya}
            </Typography>
            <CustomTypography variant="body2">
              رقم الترخيص: {licenseNumber}
            </CustomTypography>
          </Grid>
        </Grid>
      </CardContent>
      <Box sx={{ padding: '0 16px' }}>
        <CustomTypography variant="body2">
          الهاتف: {phone}
        </CustomTypography>
        <CustomTypography variant="body2">
          البريد الإلكتروني: {email}
        </CustomTypography>
        <CustomTypography variant="body2">
          العنوان: {address}
        </CustomTypography>
      </Box>
      <CardContent />
    </LawyerCardContainer>
  );
};

export default LawyerCard;
