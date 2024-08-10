import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const staffMembers = [
  { name: 'ا.منار الشمري', avatar: '/path/to/female-avatar.png', phone: '1234567890', whatsapp: '1234567890' },
  { name: 'ا.رانيا شمسان', avatar: '/path/to/female-avatar.png', phone: '2345678901', whatsapp: '2345678901' },
  { name: 'ا.محمد الكليبي', avatar: '/path/to/male-avatar.png', phone: '3456789012', whatsapp: '3456789012' },
];

const CustomerServicePage = () => {
  return (
    <Box sx={{ p: 3, direction: 'rtl', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        خدمة العملاء والمبيعات
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        يمكنك التواصل مع طاقمنا المميز بكل سهولة ويسر
      </Typography>

      <Grid container spacing={0} justifyContent="center" sx={{ mt: 4 }}>
        {staffMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: { xs: '90%', sm: '70%' }, padding: '15px', backgroundColor: '#f5f5f5', margin: 0 }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar src={member.avatar} sx={{ width: 80, height: 80, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Box>
                  <IconButton
                    color="primary"
                    aria-label="phone"
                    onClick={() => window.location.href = `tel:${member.phone}`}
                  >
                    <PhoneIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    aria-label="whatsapp"
                    onClick={() => window.location.href = `https://wa.me/${member.whatsapp}`}
                  >
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
