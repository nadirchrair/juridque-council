import React from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import BusinessIcon from '@mui/icons-material/Business';
import SupportIcon from '@mui/icons-material/Support';
import GavelIcon from '@mui/icons-material/Gavel';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AppNavBar from './AppNavBar';
import Footer1 from './Footer1';
import { Container, Box, Typography, Grid, TextField, Button, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import image from '../assets/pic3.jpg';

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(15, 64, 61)",
    },
    secondary: {
      main: "rgb(15, 64, 61)",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const CompanyServices = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleFormRedirect = () => {
    navigate('/form'); // Redirect to the form page
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <AppNavBar />
      </Box>
      <Container component="main" maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
        <Grid container spacing={4}>
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={image}
              alt="خدمات قانونية"
              sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
            />
          </Grid>
          {/* Text and Services Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="section"
              sx={{
                p: 4,
                bgcolor: 'background.paper',
                boxShadow: 3,
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" gutterBottom align="center" color="primary">
                خدمات قانونية متكاملة للشركات
              </Typography>
              <Typography variant="body1" paragraph align="center">
                في SAJ-E، نحن نقدم خدمات قانونية متكاملة للشركات، ونعمل كفريق قانوني مخصص لهم. فريقنا من الخبراء هنا لدعمك في جميع جوانب القضايا القانونية التي تواجه شركتك.
              </Typography>
              <Typography variant="h6" gutterBottom color="secondary">
                خدماتنا للشركات تشمل:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <BusinessIcon sx={{ color: 'primary.main', mr: 2 }} />
                    <Typography variant="body1">
                      تقديم استشارات قانونية مخصصة لكل شركة بناءً على احتياجاتها وأهدافها.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <GavelIcon sx={{ color: 'primary.main', mr: 2 }} />
                    <Typography variant="body1">
                      التعامل مع جميع القضايا القانونية التي تواجه الشركة بما في ذلك النزاعات التجارية، العقود، والامتثال القانوني.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <SupportIcon sx={{ color: 'primary.main', mr: 2 }} />
                    <Typography variant="body1">
                      توفير الدعم القانوني اليومي للشركات بما في ذلك إعداد العقود، المراجعات القانونية، وتقديم المشورة القانونية في الوقت الحقيقي.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <AccountBalanceIcon sx={{ color: 'primary.main', mr: 2 }} />
                    <Typography variant="body1">
                      الدفاع عن الشركة في المحاكم والجهات القانونية المختصة.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <GavelIcon sx={{ color: 'primary.main', mr: 2 }} />
                    <Typography variant="body1">
                      التفاوض على تسويات قانونية وتمثيل الشركة في الاجتماعات والصفقات التجارية الهامة.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <BusinessIcon sx={{ color: 'primary.main', mr: 2 }} />
                    <Typography variant="body1">
                      تقديم حلول قانونية فعّالة للأزمات القانونية الطارئة التي قد تواجه الشركة.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  mt: 3,
                  mb: 2,
                  boxShadow: '0 3px 5px 2px rgba(15, 64, 61, .3)',
                  '&:hover': {
                    backgroundColor: 'rgb(10, 45, 43)',
                  },
                }}
                onClick={handleFormRedirect}
              >
                استشارة مجانية
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer1 />
    </ThemeProvider>
  );
};

export default CompanyServices;
