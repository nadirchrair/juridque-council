import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppNavBar from './AppNavBar';
import Footer1 from './Footer1';
import { Box, CssBaseline ,Grid} from '@mui/material';
import AdvancedSearch from './AdvancedSearch';
import LawyerCard from './LawyerCard';

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

const Services = () => {
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
    <ThemeProvider theme ={theme}>
         <Box sx={{ display: 'flex' }}>
        <CssBaseline />
       <AppNavBar/>
      </Box>
      <Box sx={{mt:12}}>
      <AdvancedSearch theme={theme}/>
      </Box>
      <Grid container  sx={{ marginTop: 5,marginBottom:10 }}>
          {lawyers.map((lawyer, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{pb:2,       }}>
              <LawyerCard {...lawyer}  />
            </Grid>
          ))}
        </Grid>
        <Footer1/>
    </ThemeProvider>
  )
}

export default Services