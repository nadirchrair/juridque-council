import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CarouselComponent from './CarouselComponent';
import Aprops from './Aprops';
import CustomerServicePage from './CustomerServicePage';
import LawyerCard from './LawyerCard';
import {  Grid } from '@mui/material';
import CardWork from './CardWork';
import ContactForm from './ContactForm';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/system';
import AppNavBar from './AppNavBar';
import Footer1 from './Footer1';
import { fetchLawyers } from '../Fetch';

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

const Principle = () => {
  const [offers, setOffers] = useState([]);
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const [totalCards, setTotalCards] = useState(0);
  const [error, setError] = useState(null);
  useEffect(() => {
    const loadLawyers = async () => {
      try {
        const data = await fetchLawyers(); // Fetch with pagination and filters
        setLawyers(data.data); // Assuming the API returns the lawyers in 'data.lawyers'
        setLoading(false);
      } catch (err) {
        setError('Failed to load lawyers');
        setLoading(false);
      }
    };

    loadLawyers(); // Fetch lawyers when the page or filters change
  }, []);//currentPage, filters]);

  const StyledIcon = styled(ArrowBackIcon)(({ theme }) => ({
    marginRight: '10px',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '50%',
    fontSize: '3rem', // Increase the size of the icon
    padding: '8px', // Add padding to give more space around the icon
    transition: 'all 0.3s ease-in-out',
    verticalAlign: 'middle',

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
  }));
 

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentOffers = offers.slice(startIndex, endIndex);


 
  const data = [
    {
      title: 'خطوات الاستشارة القانونية',
      subtitle: 'كيفية الحصول على استشارة قانونية مخصصة لمساعدتك في حل مشكلاتك القانونية.',
      items: [
        'التسجيل على المنصة وإنشاء حساب',
        'تحديد نوع الاستشارة القانونية المطلوبة',
        'اختيار المحامي المناسب بناءً على التخصص',
        'حجز موعد للاستشارة ودفع الرسوم',
      ],
    },
    {
      title: 'الخدمات القانونية للشركات',
      subtitle: 'دعم قانوني شامل للشركات لتلبية احتياجاتها المختلفة وضمان الامتثال القانوني.',
      items: [
        'تقديم استشارات قانونية في مجالات متعددة',
        'إعداد وصياغة العقود والاتفاقيات',
        'تقديم المشورة القانونية حول قضايا العمل والموارد البشرية',
        'المساعدة في حل النزاعات التجارية',
      ],
    },
    {
      title: 'الوثائق المطلوبة للاستشارات القانونية',
      subtitle: 'المستندات المطلوبة للحصول على استشارة قانونية دقيقة وفعالة.',
      items: [
        'نسخة من الهوية الوطنية أو الإقامة',
        'مستندات أو عقود ذات صلة بالقضية',
        'تفاصيل القضية أو المشكلة القانونية',
        'أي مراسلات قانونية سابقة',
      ],
    },
  ];
  
  

return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
       <AppNavBar/>
      </Box>

      <Box sx={{ mt: 3 }}>
        <CarouselComponent />
      </Box>
      
      <Box sx={{ mt: 0 }}>
        <Aprops />
        <Box sx={{ p: 3,mt:5,mr:4 }}>
        <Typography variant="h4" gutterBottom>
      <Box display="inline-flex" alignItems="center">
        المحامين
        <StyledIcon />
      </Box>
    </Typography>
      <Typography variant="subtitle1" gutterBottom>
        يمكنك اختيار المحامي المناسب لك
      </Typography>

      </Box>
        <Grid container  sx={{ marginTop: 5 }}>
        {lawyers.map((lawyer, index) => (
  <Grid item xs={12} sm={6} md={4} key={index} sx={{ pb: 2 }}>
    {lawyer.role.name === "lawyers" ? (
      <LawyerCard {...lawyer} />
    ) : (
      <div></div>  
    )}
  </Grid>
))}
        </Grid>
        <Box sx={{ p: 3, mt: 5 ,mr:4}}>
        <Typography variant="h4" gutterBottom>
        <Box display="inline-flex" alignItems="center">

المترجمين
<StyledIcon />
</Box>

      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        يمكنك اختيار المترجم المناسب لك
      </Typography>

      </Box>
        <Grid container  sx={{ marginTop: 5 }}>
          {lawyers.map((lawyer, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{pb:2}}>
    {lawyer.role.name === "translateur" ? (
      <LawyerCard {...lawyer} />
    ) : (
      <div></div>  
    )}            </Grid>
          ))}
        </Grid>

        <Box sx={{ p: 3, mt: 5 ,mr:4}}>
        <Typography variant="h4" gutterBottom>
        <Box display="inline-flex" alignItems="center">

المحضر القضائي
<StyledIcon />
</Box>

      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        يمكنك اختيار المحضر القضائي المناسب لك
      </Typography>

      </Box>
        <Grid container  sx={{ marginTop: 5 }}>
          {lawyers.map((lawyer, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{pb:2}}>
    {lawyer.role.name === "notaire" ? (
      <LawyerCard {...lawyer} />
    ) : (
      <div></div>  
    )}            </Grid>
          ))}
        </Grid>
       <CustomerServicePage/>
       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f9f9f9' }}>
    {data.map((cardData, index) => (
      <CardWork key={index} {...cardData} />
    ))}
  </Box>
  <ContactForm/>
      </Box>
    <Footer1/>
    </ThemeProvider>
  );
};

Principle.propTypes = {
  window: PropTypes.func,
};

export default Principle;
