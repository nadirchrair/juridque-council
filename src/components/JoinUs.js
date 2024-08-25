import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Container, CssBaseline, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppNavBar from './AppNavBar'; // Assuming you have a NavBar component
import Footer1 from './Footer1'; // Assuming you have a Footer component
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

const JoinUs = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/register'); // Change '/inscrir' to the correct path for your sign-up page
  };

  const content = [
    {
      title: "صفحة التسجيل",
      description: "في بداية التسجيل، يجب أن يكون هناك خيار يتيح للمستخدم اختيار نوع الحساب (محامي، مترجم، محضر قانوني). ملء البيانات الشخصية، وتحميل المستندات المطلوبة.",
    },
    {
      title: "قوانين وشروط الانضمام",
      description: "يجب أن تكون هناك صفحة تشرح الشروط والأحكام الخاصة بالمنصة، مثل الالتزام بالمهنية، السرية، الجودة في تقديم الخدمات، وتجنب النزاعات.",
    },
    {
      title: "عملية الدفع",
      description: "بعد التسجيل، يتم توجيه المستخدم لاختيار طريقة الدفع (بريدي أو CCP)، وإدخال معلومات الدفع، ثم تأكيد الدفع.",
    },
    {
      title: "تأكيد الحساب",
      description: "بعد إتمام التسجيل والدفع، سيتم مراجعة البيانات والمستندات، ثم تفعيل الحساب بعد التأكد من صحتها.",
    },
    {
      title: "الدخول إلى الحساب",
      description: "بعد التفعيل، يمكن للمستخدم الدخول إلى حسابه وإدارة ملفه الشخصي، عرض العروض المتاحة، والبدء في تقديم الخدمات.",
    },
    {
      title: "التدريب والدعم",
      description: "توفير دليل بسيط يساعد المستخدمين في كيفية استخدام المنصة، مع وجود قسم للدعم الفني للتواصل عند مواجهة أي مشكلة.",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppNavBar />
      </Box>

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
        <Typography variant="h3" component="div">
          انضم إلينا الآن وابدأ رحلتك القانونية معنا!
        </Typography>
      </Box>

      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {content.map((item, index) => (
            <Grid item xs={12} md={8} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          onClick={handleNavigate}
        >
          تسجيل
        </Button>
      </Container>

      <Footer1 />
    </ThemeProvider>
  );
};

export default JoinUs;
