// ContactPage.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Container, Typography, Grid, TextField, Button, Paper, Box, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import AppNavBar from './AppNavBar';
import Footer1 from './Footer1';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(15, 64, 61)',
    },
    secondary: {
      main: 'rgb(15, 64, 61)',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});
const Consultation = () => {
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
        <Typography variant="h3" gutterBottom align="center">
          مرحبًا بكم في قسم الاستشارات القانونية الخاصة بنا!
        </Typography>
        <Typography variant="h6" paragraph align="center">
          نحن في SAJ-E نؤمن بأن الاستشارة القانونية الفعّالة يمكن أن تُحدث فرقًا كبيرًا في إدارة أعمالك القانونية.
          فريقنا من المحامين والمستشارين القانونيين المتخصصين هنا لمساعدتك في تحقيق أهدافك القانونية بكل كفاءة وفعالية.
        </Typography>
        <Typography variant="h4" gutterBottom>
          لماذا تختار SAJ-E؟
        </Typography>
        <ul>
          <li><Typography variant="body1" sx={{fontSize:'18px'}}>استشارات قانونية موثوقة: احصل على استشارات قانونية دقيقة وسريعة من محامين معتمدين ومتخصصين في مختلف المجالات القانونية.</Typography></li>
          <li><Typography variant="body1" sx={{fontSize:'18px'}}>سهولة الوصول: بفضل منصتنا الرقمية المتقدمة، يمكنك الحصول على الاستشارات القانونية من أي مكان وفي أي وقت يناسبك.</Typography></li>
          <li><Typography variant="body1" sx={{fontSize:'18px'}}>حلول مخصصة: نقدم استشارات قانونية تتناسب مع ظروفك الخاصة واحتياجاتك الفردية، لضمان الحصول على الحلول الأمثل لك.</Typography></li>
          <li><Typography variant="body1" sx={{fontSize:'18px'}}>أمان وحماية البيانات: نضمن حماية بياناتك القانونية الحساسة وخصوصيتك بأعلى مستويات الأمان والتشفير.</Typography></li>
        </ul>
        <Typography variant="h4" gutterBottom>
          كيفية الحصول على الاستشارة القانونية:
        </Typography>
        <ul>
          <li><Typography variant="body1" sx={{fontSize:'18px'}}>املأ النموذج أدناه: يرجى تزويدنا ببعض التفاصيل حول موضوع الاستشارة القانونية التي تحتاجها.</Typography></li>
          <li><Typography variant="body1" sx={{fontSize:'18px'}}>تواصل سريع: سنقوم بمراجعة طلبك والاتصال بك في أقرب وقت لتحديد موعد استشارة مناسب.</Typography></li>
          <li><Typography variant="body1" sx={{fontSize:'18px'}}>استشارة متخصصة: سيتم توجيهك إلى أحد محامينا أو مستشارينا القانونيين المتخصصين للحصول على استشارة تفصيلية وشاملة.</Typography></li>
        </ul>
        <Typography variant="body1" sx={{fontSize:'18px'}} paragraph>
          لا تدع الأمور القانونية تعيق تقدمك. املأ النموذج أدناه لتبدأ رحلتك نحو حلول قانونية مبتكرة وفعّالة.
        </Typography>
        <Typography variant="h6" gutterBottom align="center">
          مستعدون لمساعدتك؟ املأ النموذج أدناه وأرسل طلبك الآن، وسنكون على اتصال بك قريبًا.
        </Typography>
        <Paper elevation={3} sx={{ padding: 3, mt: 4 }}>
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="الاسم الكامل"
                  name="name"
                  variant="outlined"
                  required
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="البريد الإلكتروني"
                  name="email"
                  type="email"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="رقم الهاتف"
                  name="phone"
                  type="tel"
                  variant="outlined"
                  required
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
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  إرسال
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
      <Footer1/>

    </ThemeProvider>
  );
};

export default Consultation;
