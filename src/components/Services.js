import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppNavBar from './AppNavBar';
import Footer1 from './Footer1';
import { Box, CssBaseline, Grid, Button } from '@mui/material';
import AdvancedSearch from './AdvancedSearch';
import LawyerCard from './LawyerCard';
import { fetchLawyers } from "../Fetch"; // Import the fetchLawyers function

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
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Manage current page
  const [totalPages, setTotalPages] = useState(1); // Manage total pages
  const lawyersPerPage = 20; // Show 20 lawyers per page

  // State to store filters
  {/**
  const [filters, setFilters] = useState({
    age: '',
    profession: '',
    religion: '',
    experience: '',
    nationality: ''
  }); */}

  // Fetch lawyers data based on current page and filters
  useEffect(() => {
    const loadLawyers = async () => {
      try {
        const data = await fetchLawyers(); // Fetch with pagination and filters
        setLawyers(data.data); // Assuming the API returns the lawyers in 'data.lawyers'
       // setTotalPages(data.totalPages); // Assuming the API returns the total number of pages
        setLoading(false);
      } catch (err) {
        setError('Failed to load lawyers');
        setLoading(false);
      }
    };

    loadLawyers(); // Fetch lawyers when the page or filters change
  }, []);//currentPage, filters]);

  // Handle page change (Next/Previous)
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  

  if (loading) {
    return <div>Loading...</div>; // Show loading while fetching
  }

  if (error) {
    return <div>{error}</div>; // Show error if fetching fails
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppNavBar />
      </Box>
      <Box sx={{ mt: 12 }}>
        {/* Pass handleApplyFilters to AdvancedSearch */}
        <AdvancedSearch theme={theme}  />
      </Box>
      <Grid container sx={{ marginTop: 5, marginBottom: 10 }}>
        {lawyers.map((lawyer, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ pb: 2 }}>
            <LawyerCard {...lawyer} />
          </Grid>
        ))}
      </Grid>

      {/* Pagination Controls */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
        <Button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1} 
          variant="contained"
          sx={{ mx: 2 }}
        >
          Previous
        </Button>
        <Button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages} 
          variant="contained"
          sx={{ mx: 2 }}
        >
          Next
        </Button>
      </Box>

      <Footer1 />
    </ThemeProvider>
  );
};

export default Services;
