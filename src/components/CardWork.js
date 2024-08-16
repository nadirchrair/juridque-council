import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const CardWork = ({ title, subtitle, items }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          width: 450,
          textAlign: 'center',
          margin: '20px',
          padding: '30px',
          maxHeight: '100%',
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <CardContent>
          <Typography variant="h6" component="div" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '20px' }}>
            {subtitle}
          </Typography>
          <List>
            {items.map((item, index) => (
              <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'right' }}>
                <ListItemIcon sx={{ minWidth: 'auto', marginRight: '10px' }}>
                  <CheckCircleIcon sx={{ color: 'rgb(15, 64, 61)', fontSize: '28px' }} />
                </ListItemIcon>
                <ListItemText 
                  primary={item} 
                  primaryTypographyProps={{  textAlign: 'right',mr:'15px' }} 
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

export default CardWork;
