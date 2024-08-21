import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Box, Typography, Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AppNavBar from './AppNavBar';
import Footer1 from './Footer1';

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

const ConsultationForm = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log("Form submitted");
    // Redirect or give feedback after submission
    navigate('/thank-you');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <AppNavBar />
      </Box>
      <Container component="main" maxWidth="md" sx={{ mt: 12, mb: 4 }}>
        <Box
          component="section"
          sx={{
            mt: 6,
            mb: 4,
            p: 4,
            bgcolor: 'background.paper',
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" gutterBottom align="center" color="primary">
            استشارة قانونية مجانية
          </Typography>
          <Typography variant="body1" paragraph align="center">
            يرجى ملء النموذج أدناه للحصول على استشارة قانونية مجانية لشركتك.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="companyName"
                  label="اسم الشركة"
                  name="companyName"
                  required
                  helperText="يرجى إدخال الاسم الرسمي للشركة"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="contactPerson"
                  label="اسم الشخص المسؤول"
                  name="contactPerson"
                  required
                  helperText="يرجى إدخال الاسم الكامل للشخص المسؤول"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="companyEmail"
                  label="البريد الإلكتروني للشركة"
                  name="companyEmail"
                  required
                  helperText="يرجى إدخال البريد الإلكتروني الرسمي للشركة"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="companyPhone"
                  label="رقم هاتف الشركة"
                  name="companyPhone"
                  required
                  helperText="يرجى إدخال رقم هاتف الشركة"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="message"
                  label="رسالتك"
                  name="message"
                  multiline
                  rows={4}
                  helperText="يرجى إدخال تفاصيل الاستشارة المطلوبة"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
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
            >
              إرسال
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer1 />
    </ThemeProvider>
  );
};

export default ConsultationForm;
