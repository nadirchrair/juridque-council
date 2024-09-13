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
    companyName: '',
    contactPerson: '',
    companyEmail: '',
    companyPhone: '',
    message: '',
  });

  // State to store validation errors
  const [errors, setErrors] = useState({
    companyName: '',
    contactPerson: '',
    companyEmail: '',
    companyPhone: '',
    message: '',
  });

  // State to manage loading state
  const [loading, setLoading] = useState(false);

  // State to manage submission success or failure
  const [submissionMessage, setSubmissionMessage] = useState('');

  // Validation function to check form fields
  const validate = () => {
    let tempErrors = {};
    tempErrors.companyName = formData.companyName ? "" : "اسم الشركة مطلوب";
    tempErrors.contactPerson = formData.contactPerson ? "" : "اسم الشخص المسؤول مطلوب";
    tempErrors.companyEmail = formData.companyEmail ? "" : "البريد الإلكتروني مطلوب";
    tempErrors.companyPhone = formData.companyPhone ? "" : "رقم هاتف الشركة مطلوب";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };
const token = localStorage.getItem('token')
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
        const response = await AjouteConsultation(formData, token);
  
        // Handle success, display a success message
        setSubmissionMessage('تم إرسال طلبك بنجاح!');
        setLoading(false);  // Reset loading state
        // Redirect to thank you page
        navigate('/thank_you');
  
      } catch (error) {
        console.error('Error during form submission:', error);
        setSubmissionMessage('حدث خطأ أثناء إرسال النموذج. حاول مرة أخرى.');  // Show error message
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
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  error={!!errors.companyName}
                  helperText={errors.companyName || "يرجى إدخال الاسم الرسمي للشركة"}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="contactPerson"
                  label="اسم الشخص المسؤول"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  error={!!errors.contactPerson}
                  helperText={errors.contactPerson || "يرجى إدخال الاسم الكامل للشخص المسؤول"}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="companyEmail"
                  type="email"
                  label="البريد الإلكتروني للشركة"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  error={!!errors.companyEmail}
                  helperText={errors.companyEmail || "يرجى إدخال البريد الإلكتروني الرسمي للشركة"}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                          type="number"
                  variant="outlined"
                  fullWidth
                  id="companyPhone"
                  label="رقم هاتف الشركة"
                  name="companyPhone"
                  value={formData.companyPhone}
                  onChange={handleChange}
                  error={!!errors.companyPhone}
                  helperText={errors.companyPhone || "يرجى إدخال رقم هاتف الشركة"}
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
          {submissionMessage && (
            <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
              {submissionMessage}
            </Typography>
          )}
        </Box>
      </Container>
      <Footer1 />
    </ThemeProvider>
  );
};

export default ConsultationForm;
