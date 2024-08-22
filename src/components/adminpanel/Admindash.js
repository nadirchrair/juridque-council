import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const ProfileCard = () => (
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Avatar alt="User Profile" src="/path/to/avatar.jpg" sx={{ width: 56, height: 56 }} />
        </Grid>
        <Grid item>
          <Typography variant="h5" component="div">
            John Doe
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Lawyer / Translator
          </Typography>
          <Typography variant="body2">
            Email: john.doe@example.com
            <br />
            Phone: +123456789
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

const StatisticsCard = () => (
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography variant="h5" component="div">
        Statistics
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Quick Overview
      </Typography>
      <Typography variant="body2">
        - Total Cases: 120
        <br />
        - Pending Cases: 45
        <br />
        - Completed Cases: 75
      </Typography>
    </CardContent>
  </Card>
);

const Admindash = () => {
  return (
    <Box sx={{ width: 'auto', marginTop: '100px' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <ProfileCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <StatisticsCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Admindash;
