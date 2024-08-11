import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const staffMembers = [
  { name: 'ا.منار الشمري', avatar: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60', phone: '1234567890', whatsapp: '1234567890' },
  { name: 'ا.رانيا شمسان', avatar: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60', phone: '2345678901', whatsapp: '2345678901' },
  { name: 'ا.محمد الكليبي', avatar: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60', phone: '3456789012', whatsapp: '3456789012' },
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
            <Card sx={{ width: { xs: '90%', sm: '70%' }, padding: '15px', backgroundColor: '#edf2f7', margin: 0 ,   transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)', // Move card up on hover
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Add shadow on hover
                },}}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box 
                  sx={{ 
                    borderRadius: '10%', 
                    padding: '10px' ,
                    mb:2,
backgroundColor:'white',
                  }}
                >
                  <Avatar 
                    src={member.avatar} 
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: '50%' 
                    }} 
                  />
                </Box>
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                <Box 
                  sx={{ 
                    borderRadius: '50%', 
                    padding: '2px' ,
                    mb:2,
backgroundColor:'white',
                  }}
                >
                  <IconButton
                    color="primary"
                    aria-label="phone"
                    onClick={() => window.location.href = `tel:${member.phone}`}
                    sx={{ p: 1 }}
                  >
                    <PhoneIcon />
                  </IconButton>
                 </Box>
                 <Box 
                  sx={{ 
                    borderRadius: '50%', 
                    padding: '2px' ,
                    mb:2,
backgroundColor:'white',
                  }}
                >
                  <IconButton
                    color="secondary"
                    aria-label="whatsapp"
                    onClick={() => window.location.href = `https://wa.me/${member.whatsapp}`}
                    sx={{ p: 1 }}
                  >
                    <WhatsAppIcon />
                  </IconButton>
                  </Box>
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
