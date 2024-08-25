import * as React from 'react';
import { Box, Button, Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  direction: 'rtl', // Set the direction to Right-to-Left (RTL)
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

const JoinUs2 = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: 'auto', marginTop: '50px', padding: '20px' }}>
        <Typography variant="h4" component="div" sx={{ marginBottom: 4, textAlign: 'center' }}>
          انضم لنا
        </Typography>

        <Card sx={{ marginBottom: 4 }}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
              الشروط للانضمام
            </Typography>
            <List>
              <ListItem sx={{ alignItems: 'center' }}>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="شهادة جامعية في القانون" 
                  primaryTypographyProps={{ sx: { textAlign: 'right', lineHeight: 1.5 } }} 
                />
              </ListItem>
              <ListItem sx={{ alignItems: 'center' }}>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="خبرة لا تقل عن 5 سنوات في المجال القانوني" 
                  primaryTypographyProps={{ sx: { textAlign: 'right', lineHeight: 1.5 } }} 
                />
              </ListItem>
              <ListItem sx={{ alignItems: 'center' }}>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="إلمام كامل بالقوانين المحلية والدولية" 
                  primaryTypographyProps={{ sx: { textAlign: 'right', lineHeight: 1.5 } }} 
                />
              </ListItem>
              <ListItem sx={{ alignItems: 'center' }}>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="القدرة على التواصل بشكل فعال مع العملاء والزملاء" 
                  primaryTypographyProps={{ sx: { textAlign: 'right', lineHeight: 1.5 } }} 
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        <Card sx={{ marginBottom: 4 }}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
              المزايا والفوائد
            </Typography>
            <List>
              <ListItem sx={{ alignItems: 'center' }}>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="فرصة العمل مع فريق قانوني محترف" 
                  primaryTypographyProps={{ sx: { textAlign: 'right', lineHeight: 1.5 } }} 
                />
              </ListItem>
              <ListItem sx={{ alignItems: 'center' }}>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="تطوير مهاراتك من خلال التدريب المستمر" 
                  primaryTypographyProps={{ sx: { textAlign: 'right', lineHeight: 1.5 } }} 
                />
              </ListItem>
              <ListItem sx={{ alignItems: 'center' }}>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="الحصول على فرص توظيف دولية" 
                  primaryTypographyProps={{ sx: { textAlign: 'right', lineHeight: 1.5 } }} 
                />
              </ListItem>
              <ListItem sx={{ alignItems: 'center' }}>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="التقدم في مسيرتك المهنية في بيئة داعمة" 
                  primaryTypographyProps={{ sx: { textAlign: 'right', lineHeight: 1.5 } }} 
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          <Button variant="contained" color="primary" sx={{ padding: '10px 20px', fontSize: '16px' }}>
            طلب الانضمام
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default JoinUs2;
