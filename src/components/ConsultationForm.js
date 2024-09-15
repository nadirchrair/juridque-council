import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Box, Typography, Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AppNavBar from './AppNavBar';
import Footer1 from './Footer1';
import { AjouteConsultation } from '../Fetch';
// Theme configuration for MUI components
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
  const navigate = useNavigate();
    // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    firstPersonName: '',
    email: '',
    numberPhone: '',
    message: '',
  });

  // State to store validation errors
  const [errors, setErrors] = useState({
    name: '',
    firstPersonName: '',
    email: '',
    numberPhone: '',
    message: '',
  });

  // State to manage loading state
  const [loading, setLoading] = useState(false);

  // State to manage submission success or failure
  const [submissionmessage, setSubmissionmessage] = useState('');

  // Validation function to check form fields
  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "اسم الشركة مطلوب";
    tempErrors.firstPersonName = formData.firstPersonName ? "" : "اسم الشخص المسؤول مطلوب";
    tempErrors.email = formData.email ? "" : "البريد الإلكتروني مطلوب";
    tempErrors.numberPhone = formData.numberPhone ? "" : "رقم هاتف الشركة مطلوب";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };
  // Handle changes to form inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevent default form submission
  
    if (validate()) {
      setLoading(true);  // Set loading state to true
  
  
      try {
        // Call the AjouteConsultation function with formData and token
        const response = await AjouteConsultation(formData);
  
        // Handle success, display a success message
        setSubmissionmessage('تم إرسال طلبك بنجاح!');
        setLoading(false);  // Reset loading state
        // Redirect to thank you page
        alert("succes");
  
      } catch (error) {
        console.error('Error during form submission:', error);
        setSubmissionmessage('حدث خطأ أثناء إرسال النموذج. حاول مرة أخرى.');  // Show error message
        setLoading(false);  // Reset loading state
      }
    } else {
      console.log("Form contains errors");
    }
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name || "يرجى إدخال الاسم الرسمي للشركة"}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="firstPersonName"
                  label="اسم الشخص المسؤول"
                  name="firstPersonName"
                  value={formData.firstPersonName}
                  onChange={handleChange}
                  error={!!errors.firstPersonName}
                  helperText={errors.firstPersonName || "يرجى إدخال الاسم الكامل للشخص المسؤول"}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  type="email"
                  label="البريد الإلكتروني للشركة"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email || "يرجى إدخال البريد الإلكتروني الرسمي للشركة"}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                          type="number"
                  variant="outlined"
                  fullWidth
                  id="numberPhone"
                  label="رقم هاتف الشركة"
                  name="numberPhone"
                  value={formData.numberPhone}
                  onChange={handleChange}
                  error={!!errors.numberPhone}
                  helperText={errors.numberPhone || "يرجى إدخال رقم هاتف الشركة"}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="message"
                  label="رسالتك"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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
              disabled={loading}  // Disable button when loading
              sx={{
                mt: 3,
                mb: 2,
                boxShadow: '0 3px 5px 2px rgba(15, 64, 61, .3)',
                '&:hover': {
                  backgroundColor: 'rgb(10, 45, 43)',
                },
              }}
            >
              {loading ? 'جارٍ الإرسال...' : 'إرسال'}
            </Button>
          </Box>
          {submissionmessage && (
            <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
              {submissionmessage}
            </Typography>
          )}
        </Box>
      </Container>
      <Footer1 />
    </ThemeProvider>
  );
};

export default ConsultationForm;
