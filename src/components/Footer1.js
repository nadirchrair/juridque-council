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
              <Link href="#" color="inherit" underline="none">اختيار العمالة</Link><br />
              <Link href="#" color="inherit" underline="none">تعاقد الاستقدام</Link><br />
              <Link href="#" color="inherit" underline="none">سياسات الاستقدام</Link><br />
              <Link href="#" color="inherit" underline="none">مركز المساعدة</Link><br />
              <Link href="#" color="inherit" underline="none">الأسئلة الشائعة</Link><br />
              <Link href="#" color="inherit" underline="none">المقالات</Link><br />
              <Link href="#" color="inherit" underline="none">رقم مسؤول نقل الكفالة: 0548454148</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>المزيد</Typography>
            <Box sx={{ mb: 2 }}>
              <Typography>عنوان مكتبنا: الشيخ جابر الاحمد الصباح حي المعيزيلة الرياض 13231</Typography>
              <Typography>البريد الإلكتروني: info@rawafadnejd.sa</Typography>
              <Typography>المبيعات: 8003030309</Typography>
              <Typography>الشكاوى والاقتراحات: 8003030309</Typography>
              <Typography>رقم السجل التجاري للمكتب: 1010595382</Typography>
              <Typography>رقم المسجلة لدى وزارة الموارد البشرية: 41012064</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="h6" sx={{ mb: 2 }}>رواد نجد للاستقدام</Typography>
            <Typography>أفضل مكتب استقدام العمالة المنزلية السعودية بمقاييس دولية موثوقة عالية نسعى لتقديم تجربة استقدام مثالية لعملائنا.</Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" href="#"><Twitter /></IconButton>
              <IconButton color="inherit" href="#"><Instagram /></IconButton>
              <IconButton color="inherit" href="#"><YouTube /></IconButton>
              <IconButton color="inherit" href="#"><LinkedIn /></IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={4}>
          <Typography>© جميع الحقوق محفوظة رواد نجد للاستقدام 2024</Typography>
        </Box>
      </Container>
    </Box>  
  );
}

export default Footer1;
