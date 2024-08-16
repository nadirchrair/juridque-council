import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { RechercheOffer, TousOffre } from '../Fetch';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CarouselComponent from './CarouselComponent';
import Aprops from './Aprops';
import Cardcomponents from './Cardcomponents';
import CustomerServicePage from './CustomerServicePage';
import LawyerCard from './LawyerCard';
import { Container, Grid } from '@mui/material';
import CardWork from './CardWork';
import ContactForm from './ContactForm';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/system';
import AppNavBar from './AppNavBar';
import Footer1 from './Footer1';
const drawerWidth = 240;

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
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const [totalCards, setTotalCards] = useState(0);
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadOffers = async () => {
      try {
        const data = await TousOffre();
        setOffers(data);
        setTotalCards(data.length);
      } catch (error) {
        setError(error.message);
      }
    };

    loadOffers();
  }, []);
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
  useEffect(() => {
    const searchOffers = async () => {
      try {
        const data = await RechercheOffer(search);
        setOffers(data);
        setTotalCards(data.length);
      } catch (error) {
        setError(error.message);
      }
    };

    if (search) {
      searchOffers();
    } else {
      const loadOffers = async () => {
        try {
          const data = await TousOffre();
          setOffers(data);
          setTotalCards(data.length);
        } catch (error) {
          setError(error.message);
        }
      };

      loadOffers();
    }
  }, [search]);

  

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentOffers = offers.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

 
  const data = [
    {
      title: 'إجراءات الاستقدام',
      subtitle: 'الدخول الى منصة مساند للتحقق من تأهيلك للحصول على التأشيرة، إدخال البيانات المطلوبة وآليات القدرة المالية، الإقرار بالمعلومات الصحيحة وسداد الرسوم.',
      items: [
        'الدخول الى منصة مساند',
        'التحقق من تأهيلك للحصول على تأشيرات الاستقدام',
        'إدخال البيانات المطلوبة وآليات القدرة المالية',
        'الإقرار بالمعلومات الصحيحة وسداد الرسوم',
      ],
    },
    {
      title: 'الوثائق المطلوبة لإستقدام العماله المنزلية',
      subtitle: 'المستندات المطلوبة لإكمال الإجراءات والحصول على تأشيرة استقدام العمالة المنزلية.',
      items: [
        'تكميل إجراءات الاستقدام',
        'اختيار السيرة الذاتية',
        'صورة الهوية الوطنية أو الإقامة للمقيمين والأرقام المرتبطة في ابشر',
        'تعاقد الاستقدام عبر مساند وسداد الرسوم',
      ],
    },
  ];
  

  const lawyers = [
    {
      name: 'John Doe',
      title: 'Attorney at Law',
      wilaya: 'Algiers',
      licenseNumber: '123456789',
      phone: '+213 123 456 789',
      email: 'john.doe@example.com',
      address: '1234 Lawyer St, Algiers, Algeria',
      profilePicture: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      name: 'Jane Smith',
      title: 'Attorney at Law',
      wilaya: 'Oran',
      licenseNumber: '987654321',
      phone: '+213 987 654 321',
      email: 'jane.smith@example.com',
      address: '5678 Lawyer Ave, Oran, Algeria',
      profilePicture: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
    // Add 4 more lawyers with the same structure
    {
      name: 'Ahmed Ali',
      title: 'Attorney at Law',
      wilaya: 'Constantine',
      licenseNumber: '111213141',
      phone: '+213 111 213 141',
      email: 'ahmed.ali@example.com',
      address: '9101 Lawyer Rd, Constantine, Algeria',
      profilePicture: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      name: 'Fatima Zahra',
      title: 'Attorney at Law',
      wilaya: 'Annaba',
      licenseNumber: '515161718',
      phone: '+213 515 161 718',
      email: 'fatima.zahra@example.com',
      address: '1234 Lawyer St, Annaba, Algeria',
      profilePicture: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      name: 'Omar Ibn Khattab',
      title: 'Attorney at Law',
      wilaya: 'Blida',
      licenseNumber: '919293949',
      phone: '+213 919 293 949',
      email: 'omar.khattab@example.com',
      address: '5678 Lawyer Ave, Blida, Algeria',
      profilePicture: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      name: 'Khadija Bint Khuwaylid',
      title: 'Attorney at Law',
      wilaya: 'Tlemcen',
      licenseNumber: '010203040',
      phone: '+213 010 203 040',
      email: 'khadija.khuwaylid@example.com',
      address: '9101 Lawyer Rd, Tlemcen, Algeria',
      profilePicture: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    }
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
            <Grid item xs={12} sm={6} md={4} key={index} sx={{pb:2,       }}>
              <LawyerCard {...lawyer}  />
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
              <LawyerCard {...lawyer} />
            </Grid>
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
