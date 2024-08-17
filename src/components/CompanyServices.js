import React from 'react';
import { Container,Box, Typography, Grid, TextField, Button,CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

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
const CompanyServices = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <ThemeProvider theme={theme}>
         <Box sx={{ display: 'flex' }}>
        <CssBaseline />
       <AppNavBar/>
      </Box>
      <Container component="main" maxWidth="md" sx={{ mt: 12, mb: 4 }}>

    <Box component="section" sx={{ mt: 6, mb: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        خدمات قانونية متكاملة للشركات
      </Typography>
      <Typography variant="body1" paragraph align="center">
        في SAJ-E، نحن نقدم خدمات قانونية متكاملة للشركات، ونعمل كفريق قانوني مخصص لهم. فريقنا من الخبراء هنا لدعمك في جميع جوانب القضايا القانونية التي تواجه شركتك.
      </Typography>
      <Typography variant="h6" gutterBottom>
        خدماتنا للشركات تشمل:
      </Typography>
      <ul>
        <li><Typography variant="body1">تقديم استشارات قانونية مخصصة لكل شركة بناءً على احتياجاتها وأهدافها.</Typography></li>
        <li><Typography variant="body1">التعامل مع جميع القضايا القانونية التي تواجه الشركة بما في ذلك النزاعات التجارية، العقود، والامتثال القانوني.</Typography></li>
        <li><Typography variant="body1">توفير الدعم القانوني اليومي للشركات بما في ذلك إعداد العقود، المراجعات القانونية، وتقديم المشورة القانونية في الوقت الحقيقي.</Typography></li>
        <li><Typography variant="body1">الدفاع عن الشركة في المحاكم والجهات القانونية المختصة.</Typography></li>
        <li><Typography variant="body1">التفاوض على تسويات قانونية وتمثيل الشركة في الاجتماعات والصفقات التجارية الهامة.</Typography></li>
        <li><Typography variant="body1">تقديم حلول قانونية فعّالة للأزمات القانونية الطارئة التي قد تواجه الشركة.</Typography></li>
      </ul>
      <Typography variant="h6" gutterBottom>
        اتصل بنا اليوم لتحديد موعد استشارة مجانية ومعرفة كيف يمكننا أن نكون فريقك القانوني المخصص ونساعدك في تحقيق أهدافك القانونية بكفاءة وفعالية.
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField variant="outlined" fullWidth id="companyName" label="اسم الشركة" name="companyName" required />
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" fullWidth id="contactPerson" label="اسم الشخص المسؤول" name="contactPerson" required />
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" fullWidth id="companyEmail" label="البريد الإلكتروني للشركة" name="companyEmail" required />
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" fullWidth id="companyPhone" label="رقم هاتف الشركة" name="companyPhone" required />
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" fullWidth id="companyMessage" label="موضوع الاستشارة" name="companyMessage" multiline rows={4} required />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
          إرسال
        </Button>
      </Box>
    </Box>
    </Container>
    <Footer1/>

    </ThemeProvider>

  );
};

export default CompanyServices;
