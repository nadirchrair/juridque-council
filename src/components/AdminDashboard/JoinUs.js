import * as React from 'react';
import { Box, Button, Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const JoinUs = () => {
  return (
    <ThemeProvider theme={theme}>
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
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="شهادة جامعية في القانون" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="خبرة لا تقل عن 5 سنوات في المجال القانوني" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="إلمام كامل بالقوانين المحلية والدولية" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="القدرة على التواصل بشكل فعال مع العملاء والزملاء" />
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
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="فرصة العمل مع فريق قانوني محترف" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="تطوير مهاراتك من خلال التدريب المستمر" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="الحصول على فرص توظيف دولية" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="التقدم في مسيرتك المهنية في بيئة داعمة" />
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

export default JoinUs;
