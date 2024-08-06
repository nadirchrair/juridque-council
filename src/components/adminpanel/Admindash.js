import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Homeindex from './Homeindex'
import Fetchohonenumbers from './Fetchohonenumbers';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Admindash = () => {
  return (
    <Box sx={{ width: '100%',marginTop:'100px' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <Homeindex/>
      </Grid>
      <Grid item xs={6}>
        <Fetchohonenumbers/>
      </Grid>
     
    </Grid>
  </Box>
  )
}

export default Admindash