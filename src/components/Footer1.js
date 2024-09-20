import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';

import { Twitter, Instagram,  YouTube, LinkedIn } from '@mui/icons-material';
import Link from '@mui/material/Link';


const Footer1 = () => {
  return (
    <Box sx={{ bgcolor: '#5da79c', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>خدماتنا</Typography>
            <Box sx={{ mb: 2 }}>
              <Link href="#" color="inherit" underline="none"> اختيار المجلس</Link><br />
              <Link href="#" color="inherit" underline="none">تسجيل الدخول</Link><br />
              <Link href="#" color="inherit" underline="none">سياسة المنصة</Link><br />
              <Link href="#" color="inherit" underline="none">ايمايل المصة : slamadda11@gmail.com </Link><br />

              <Link href="#" color="inherit" underline="none">رقم المسؤول: 0799747851</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>المزيد</Typography>
            <Box sx={{ mb: 2 }}>
              <Typography>عنوان مكتبنا: ولاية معسكر,الجزائر</Typography>
             
              <Typography>رقم السجل التجاري للمكتب: 0000</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="h6" sx={{ mb: 2 }}>  E-SAJ</Typography>
            <Typography>أفضل منصة لرقمنة خدمات المساعدين القضائيين بالجزائر
"مرحبًا بكم في منصتنا القانونية الرائدة، حيث ندمج الخبرة والتقنية لتقديم استشارات وحلول قانونية متكاملة تلبي جميع احتياجاتكم"</Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" href="#"><Twitter /></IconButton>
              <IconButton color="inherit" href="#"><Instagram /></IconButton>
              <IconButton color="inherit" href="#"><YouTube /></IconButton>
              <IconButton color="inherit" href="#"><LinkedIn /></IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={4}>
          <Typography>© جميع الحقوق محفوظة E-SAJ-2024</Typography>
        </Box>
      </Container>
    </Box>  
  );
}

export default Footer1;
