import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const staffMembers = [
  { name: 'ا.منار الشمري', avatar: '/path/to/female-avatar.png' },
  { name: 'ا.رانيا شمسان', avatar: '/path/to/female-avatar.png' },
  { name: 'ا.محمد الكليبي', avatar: '/path/to/male-avatar.png' },
];

const CustomerServicePage = () => {
  return (
    <Box sx={{ p: 3, direction: 'rtl' }}>
      <Typography variant="h4"  gutterBottom>
        خدمة العملاء والمبيعات
      </Typography>
      <Typography variant="subtitle1"  gutterBottom>
        يمكنك التواصل مع طاقمنا المميز بكل سهولة ويسر
      </Typography>

      <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
        {staffMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar src={member.avatar} sx={{ width: 80, height: 80, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Box>
                  <IconButton color="primary" aria-label="phone">
                    <PhoneIcon />
                  </IconButton>
                  <IconButton color="secondary" aria-label="whatsapp">
                    <WhatsAppIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomerServicePage;