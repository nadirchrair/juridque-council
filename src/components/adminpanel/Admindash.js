import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import BusinessIcon from '@mui/icons-material/Business';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

// Styled components
const ProfileCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  backgroundColor: '#ffffff',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
  minHeight: '300px',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const StatisticsCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  backgroundColor: '#f0f4f8',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
}));

const ProfileInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const StatisticIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(1),
  fontSize: '3rem',
  color: theme.palette.primary.main,
  marginRight:'14px',
}));

// Profile Card Component
const ProfileCardContent = () => (
  <ProfileCard>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar alt="User Profile" src="/path/to/avatar.jpg" sx={{ width: 120, height: 120 }} />
      <ProfileInfo>
        <Typography variant="h5" component="div">
          John Doe
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Senior Lawyer / Legal Translator
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <WorkIcon fontSize="small" sx={{ verticalAlign: 'middle', marginRight: '5px' }} />
          XYZ Legal Services
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <LocationOnIcon fontSize="small" sx={{ verticalAlign: 'middle', marginRight: '5px' }} />
          123 Main Street, City, Country
        </Typography>
      </ProfileInfo>
    </Box>
    <Divider sx={{ my: 2 }} />
    <Box>
      <Typography variant="body2" sx={{ mb: 1 }}>
        <EmailIcon fontSize="small" sx={{ verticalAlign: 'middle', marginRight: '5px' }} />
        <strong>Email:</strong> john.doe@example.com
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        <PhoneIcon fontSize="small" sx={{ verticalAlign: 'middle', marginRight: '5px' }} />
        <strong>Phone:</strong> +123456789
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        <EventAvailableIcon fontSize="small" sx={{ verticalAlign: 'middle', marginRight: '5px' }} />
        <strong>Last Subscription Renewal:</strong> August 23, 2024
      </Typography>
    </Box>
  </ProfileCard>
);

// Statistics Card Component
const StatisticsCardContent = ({ title, value, icon }) => (
  <StatisticsCard>
    <StatisticIcon>{icon}</StatisticIcon>
    <Typography variant="h6" component="div">
      {title}
    </Typography>
    <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
      {value}
    </Typography>
  </StatisticsCard>
);

// Admin Dashboard Component
const Admindash = () => {
  return (
    <Box sx={{ width: 'auto', marginTop: '50px' }}>
    <Grid container spacing={4}>
      {/* Profile Card taking full width */}
      <Grid item xs={12}>
        <ProfileCardContent />
      </Grid>

      {/* Statistics Cards in a grid layout */}
      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} md={6} >
          <StatisticsCardContent title="Total Consultations" value="120" icon={<BusinessIcon />} />
        </Grid>
        <Grid item xs={12} md={6} >
          <StatisticsCardContent title="Profile Views" value="500" icon={<BusinessIcon />} />
        </Grid>
        <Grid item xs={12} md={6} >
          <StatisticsCardContent title="Pending Consultations" value="45" icon={<BusinessIcon />} />
        </Grid>
        <Grid item xs={12} md={6} >
          <StatisticsCardContent title="Completed Consultations" value="75" icon={<BusinessIcon />} />
        </Grid>
        <Grid item xs={12} md={6} >
          <StatisticsCardContent title="Last Active" value="August 23, 2024" icon={<EventAvailableIcon />} />
        </Grid>
      </Grid>
    </Grid>
  </Box>
  );
};

export default Admindash;
