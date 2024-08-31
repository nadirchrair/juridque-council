import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Typography, Grid, TextField, Button, Paper, Box, CssBaseline } from '@mui/material';
import AppNavBar from './AppNavBar';
import Footer1 from './Footer1';
import backgroundImage from '../assets/pic5.jpg'; // Replace with your background image path

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(15, 64, 61)',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h3: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

const Consultation = () => {
   // State for form inputs
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // State for form errors
  const [formErrors, setFormErrors] = useState({});

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form data
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Send data to backend API
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Handle success response
      alert('Your consultation request has been submitted successfully!');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again later.');
    }
  };

  // Validate form inputs
  const validateForm = (data) => {
    const errors = {};
    if (!data.name) errors.name = 'Name is required';
    if (!data.email) errors.email = 'Email is required';
    if (!data.phone) errors.phone = 'Phone number is required';
    if (!data.subject) errors.subject = 'Subject is required';
    if (!data.message) errors.message = 'Message is required';
    return errors;
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppNavBar />
      </Box>
      
      {/* Hero Section */}
      <Box
        sx={{
          height: '400px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          mb: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3">
            استشارات قانونية رفيعة المستوى لشركتك
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            خبرتنا القانونية في خدمتك لتمكين أعمالك من النجاح
          </Typography>
        </Container>
      </Box>
      
      {/* Main Content */}
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          لماذا نحن الخيار الأمثل لاحتياجاتك القانونية؟
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '18px', mb: 2 }}>
          في SAJ-E، نحن أكثر من مجرد مستشارين قانونيين؛ نحن شركاؤك في النجاح. ندرك التحديات القانونية التي تواجه الشركات في الأسواق اليوم، ولذلك نلتزم بتقديم حلول قانونية مبتكرة وفعالة تلبي احتياجاتك الخاصة.
        </Typography>

        <Typography variant="h5" gutterBottom>
          الفوائد التي تحصل عليها معنا:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ fontSize: '18px', mb: 2 }}>
              <strong>استشارات قانونية شاملة:</strong> نقدم لك تحليلاً قانونيًا شاملًا لجميع جوانب عملك، من العقود والامتثال إلى حل النزاعات والدفاع القانوني.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ fontSize: '18px', mb: 2 }}>
              <strong>فريق متخصص:</strong> لدينا فريق متنوع من المحامين والمستشارين ذوي الخبرة، متخصصين في مختلف المجالات القانونية، مما يضمن حصولك على نصائح دقيقة ومخصصة.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ fontSize: '18px', mb: 2 }}>
              <strong>سهولة الوصول:</strong> بفضل منصتنا الرقمية، يمكنك الوصول إلى استشاراتنا القانونية في أي وقت ومن أي مكان، دون الحاجة إلى مواعيد مسبقة.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ fontSize: '18px', mb: 2 }}>
              <strong>معلومات محدثة:</strong> نبقيك على اطلاع دائم بأحدث التطورات القانونية التي قد تؤثر على عملك، لضمان أنك دائمًا في المقدمة.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          خطوات بسيطة للحصول على استشارتك القانونية:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '18px', mb: 2 }}>
          سواء كنت تحتاج إلى استشارة قانونية عاجلة أو ترغب في مراجعة قانونية دورية لأعمالك، يمكنك الحصول على كل ذلك بخطوات بسيطة:
        </Typography>
        <ul style={{ marginBottom: '24px', fontSize: '18px' }}>
          <li><Typography variant="body1">املأ النموذج أدناه لتزويدنا بالتفاصيل الضرورية حول احتياجاتك.</Typography></li>
          <li><Typography variant="body1">سيقوم أحد خبرائنا القانونيين بمراجعة طلبك والاتصال بك في غضون ساعات قليلة.</Typography></li>
          <li><Typography variant="body1">احصل على استشارة قانونية متخصصة وشاملة تلبي احتياجات عملك.</Typography></li>
        </ul>

        <Typography variant="h6" gutterBottom align="center">
          لا تتردد في اتخاذ الخطوة الأولى نحو حماية وتطوير أعمالك. املأ النموذج الآن وابدأ رحلتك مع فريق SAJ-E.
        </Typography>

        <Paper elevation={3} sx={{ padding: 4, mt: 4 }}>
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="الاسم الكامل"
                  name="name"
                  variant="outlined"
                  required
                  autoFocus
                  value={formData.name}
                  onChange={handleInputChange}
                  error={!!formErrors.name}
                  helperText={formErrors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="البريد الإلكتروني"
                  name="email"
                  type="email"
                  variant="outlined"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  error={!!formErrors.email}
                  helperText={formErrors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="رقم الهاتف"
                  name="phone"
                  type="tel"
                  variant="outlined"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={!!formErrors.phone}
                  helperText={formErrors.phone}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="موضوع الاستشارة"
                  name="subject"
                  variant="outlined"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  error={!!formErrors.subject}
                  helperText={formErrors.subject}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="رسالتك"
                  name="message"
                  multiline
                  rows={4}
                  variant="outlined"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  error={!!formErrors.message}
                  helperText={formErrors.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    padding: '12px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    backgroundColor: 'rgb(15, 64, 61)',
                    '&:hover': {
                      backgroundColor: 'rgb(10, 45, 43)',
                    },
                  }}
                >
                  إرسال
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>

      <Footer1 />
    </ThemeProvider>
  );
};

export default Consultation;
