import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Features/authSlice';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import logoesaj from '../assets/logoesaj.jpg';
const drawerWidth = 240;

const AppNavBar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

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
    const token = localStorage.getItem('token');
const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mx: 2 }}>
        E-SAJ
          </Typography>
          <Divider />
          <List>
            {['الرئيسية ', 'خدماتنا', 'استشارة','للشركات'].map((item) => (
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
              <Button variant="contained" sx={{ bgcolor: 'black', border: `1px solid ${theme.palette.primary.main}`, color: theme.palette.primary.main,  '&:hover': {
                          backgroundColor: theme.palette.primary.main,
                          color: 'white',
                          transition: 'all 0.3s ease-in-out',
                        }, }} onClick={() => navigate('/login')}>Login</Button>
              <Button variant="contained" sx={{ bgcolor: 'black', border: `1px solid ${theme.palette.primary.main}`, color: theme.palette.primary.main }} onClick={() => navigate('/register')}>Register</Button>
            </Box>
          )}
        </Box>
      );
      const [mobileOpen, setMobileOpen] = useState(false);
  
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <>
      <AppBar component="nav" sx={{ backgroundColor: '#ffff', borderBottom: `1px solid ${theme.palette.primary.main}`, boxShadow: 'none' }}>
          <Toolbar sx={{ justifyContent: 'space-between'}}>
          <img 
    src={logoesaj} // Replace with your actual logo path
    alt="Platform Logo" 
    style={{ marginRight: '115px', height: '50px' }} // Adjust styles accordingly
  />
            <Box sx={{ 
              display: { xs: 'none', sm: 'flex' }, 
              alignItems: 'center', 
              gap: 3,
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              {['الرئيسية ', 'خدماتنا', 'استشارة','للشركات','انظم الينا'].map((item) => (
                <Typography variant="h6" key={item} sx={{ color: `${theme.palette.primary.main}`, marginRight: 3 ,'&:hover':{cursor:'pointer'}}} onClick={() => navigate(`/${item}`)}>
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
                  <Button variant="outlined" sx={{ mr:4,bgcolor: 'white', border: `1px solid ${theme.palette.primary.main}`, color: theme.palette.primary.main,  '&:hover': {
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      transition: 'all 0.3s ease-in-out',
                    }, }} onClick={() => navigate('/login')}>التسجيل</Button>
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
    </>
  )
}

export default AppNavBar