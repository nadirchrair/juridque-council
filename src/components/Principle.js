import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { logout } from '../Features/authSlice';
import { useNavigate } from 'react-router-dom';
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
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

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

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentOffers = offers.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
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
  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ mx: 2 }}>
        Platforme
      </Typography>
      <Divider />
      <List>
        {['Home', 'About', 'Contact'].map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {token ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ my: 1 }}>Welcome</Typography>
          <Button variant="contained" onClick={() => navigate('/admin')}>Dashboard</Button>
          <Button variant="contained" onClick={handleLogout}>Logout</Button>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center', my: 2 }}>
          <Button variant="contained" sx={{ bgcolor: 'black', border: `1px solid ${theme.palette.primary.main}`, color: theme.palette.primary.main }} onClick={() => navigate('/login')}>Login</Button>
          <Button variant="contained" sx={{ bgcolor: 'black', border: `1px solid ${theme.palette.primary.main}`, color: theme.palette.primary.main }} onClick={() => navigate('/register')}>Register</Button>
        </Box>
      )}
    </Box>
  );
  const lawyers = [
    {
      name: 'John Doe',
      title: 'Attorney at Law',
      wilaya: 'Algiers',
      licenseNumber: '123456789',
      phone: '+213 123 456 789',
      email: 'john.doe@example.com',
      address: '1234 Lawyer St, Algiers, Algeria',
      profilePicture: 'https://via.placeholder.com/150',
      firmLogo: 'https://via.placeholder.com/40',
    },
    {
      name: 'Jane Smith',
      title: 'Attorney at Law',
      wilaya: 'Oran',
      licenseNumber: '987654321',
      phone: '+213 987 654 321',
      email: 'jane.smith@example.com',
      address: '5678 Lawyer Ave, Oran, Algeria',
      profilePicture: 'https://via.placeholder.com/150',
      firmLogo: 'https://via.placeholder.com/40',
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
      profilePicture: 'https://via.placeholder.com/150',
      firmLogo: 'https://via.placeholder.com/40',
    },
    {
      name: 'Fatima Zahra',
      title: 'Attorney at Law',
      wilaya: 'Annaba',
      licenseNumber: '515161718',
      phone: '+213 515 161 718',
      email: 'fatima.zahra@example.com',
      address: '1234 Lawyer St, Annaba, Algeria',
      profilePicture: 'https://via.placeholder.com/150',
      firmLogo: 'https://via.placeholder.com/40',
    },
    {
      name: 'Omar Ibn Khattab',
      title: 'Attorney at Law',
      wilaya: 'Blida',
      licenseNumber: '919293949',
      phone: '+213 919 293 949',
      email: 'omar.khattab@example.com',
      address: '5678 Lawyer Ave, Blida, Algeria',
      profilePicture: 'https://via.placeholder.com/150',
      firmLogo: 'https://via.placeholder.com/40',
    },
    {
      name: 'Khadija Bint Khuwaylid',
      title: 'Attorney at Law',
      wilaya: 'Tlemcen',
      licenseNumber: '010203040',
      phone: '+213 010 203 040',
      email: 'khadija.khuwaylid@example.com',
      address: '9101 Lawyer Rd, Tlemcen, Algeria',
      profilePicture: 'https://via.placeholder.com/150',
      firmLogo: 'https://via.placeholder.com/40',
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: '#ffff', borderBottom: `1px solid ${theme.palette.primary.main}`, boxShadow: 'none' }}>
          <Toolbar sx={{ justifyContent: 'space-between'}}>
            <Typography variant="h6" component="div" color="primary" sx={{marginRight:'115px'}}>
              Platforme
            </Typography>
            <Box sx={{ 
              display: { xs: 'none', sm: 'flex' }, 
              alignItems: 'center', 
              gap: 3,
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              {['Home', 'About', 'Contact'].map((item) => (
                <Typography variant="h6" key={item} sx={{ color: `${theme.palette.primary.main}`, marginRight: 3 }}>
                  {item}
                </Typography>
              ))}
              {token ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography variant="h6">Welcome</Typography>
                  <Button variant="outlined" sx={{ bgcolor: 'white', border: `1px solid ${theme.palette.primary.main}`, color: theme.palette.primary.main }} onClick={() => navigate('/admin')}>Dashboard</Button>
                  <Button variant="outlined" sx={{ bgcolor: 'white', border: `1px solid ${theme.palette.primary.main}`, color: theme.palette.primary.main }} onClick={handleLogout}>Logout</Button>
                </Box>
              ) : (
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button variant="outlined" sx={{ bgcolor: 'white', border: `1px solid ${theme.palette.primary.main}`, color: theme.palette.primary.main }} onClick={() => navigate('/login')}>Login</Button>
                  <Button variant="outlined" sx={{ bgcolor: 'white', border: `1px solid ${theme.palette.primary.main}`, color: theme.palette.primary.main }} onClick={() => navigate('/register')}>Register</Button>
                </Box>
              )}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box sx={{ mt: 3 }}>
        <CarouselComponent />
      </Box>
      
      <Box sx={{ mt: 0 }}>
        <Aprops />
        <Box sx={{ p: 3, mt: 4,ml:3 }}>
        <Typography variant="h4" gutterBottom>
المحامين
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        يمكنك اختيار المحامي المناسب لك
      </Typography>

      </Box>
        <Grid container  sx={{ marginTop: 5 }}>
          {lawyers.map((lawyer, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{pb:2}}>
              <LawyerCard {...lawyer} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ p: 3, mt: 4 ,ml:3}}>
        <Typography variant="h4" gutterBottom>
المترجمين
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
    </ThemeProvider>
  );
};

Principle.propTypes = {
  window: PropTypes.func,
};

export default Principle;
