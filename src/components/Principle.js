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
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import { logout } from '../Features/authSlice';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart'; // Import the updated Cart component
import { RechercheOffer, TousOffre } from '../Fetch';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
        setTotalCards(data.length); // Assuming data is an array of offers
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
        setTotalCards(data.length); // Assuming data is an array of offers
      } catch (error) {
        setError(error.message);
      }
    };

    if (search) {
      searchOffers();
    } else {
      // If there's no search query, load all offers
      const loadOffers = async () => {
        try {
          const data = await TousOffre();
          setOffers(data);
          setTotalCards(data.length); // Assuming data is an array of offers
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

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentOffers = offers.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: '#ffff', borderBottom: `1px solid ${theme.palette.primary.main}`,boxShadow: 'none' }}>
          <Toolbar sx={{ justifyContent: 'space-between'}}>
            <Typography variant="h6" component="div" color="primary" sx={{marginRight:'115px'}}>
              Platforme
            </Typography>
            <Box  sx={{ 
    display: { xs: 'none', sm: 'flex' }, 
    alignItems: 'center', 
    gap: 3, // Increased gap for better spacing
    marginLeft: 'auto', // Align items to the right
    marginRight: 'auto' // Center items horizontally
  }}>
              {['Home', 'About', 'Contact'].map((item) => (
                <Typography variant="h6" key={item} sx={{ color: `${theme.palette.primary.main}`, marginRight: 3  }}>
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
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Box component="main" sx={{ p: 3, marginLeft: { sm: `${drawerWidth}px` }, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Toolbar />
          <TextField
            id="outlined-basic"
            label="search"
            variant="outlined"
            sx={{ marginBottom: "40px", marginRight: "auto", marginLeft: "auto", justifyContent: "center", width: '440px' }}
            onChange={(e) => setSearch(e.target.value)}
          />

          {error && <Typography color="error">{error}</Typography>}
          <Grid container spacing={2} justifyContent="center">
            {currentOffers.length > 0 ? (
              currentOffers.map((offer, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Cart offer={offer} /> {/* Use the updated Cart component */}
                </Grid>
              ))
            ) : (
              <Typography variant="h6">No offers found.</Typography>
            )}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button variant="outlined" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </Button>
            <Typography variant="body1" sx={{ mx: 2 }}>{currentPage} of {totalPages}</Typography>
            <Button variant="outlined" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

Principle.propTypes = {
  window: PropTypes.func,
};

export default Principle;
