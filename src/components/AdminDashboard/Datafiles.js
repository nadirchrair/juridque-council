import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

const DocumentCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'right',
  backgroundColor: '#f9f9f9',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
  height: 'auto',
}));

const DocumentCardContent = ({ title, description }) => (
  <DocumentCard>
    <CardContent>
      <Typography variant="h6" component="div">
        {title}
      </Typography>
      <Divider sx={{ my: 1.5 }} />
      <Typography variant="body2">
        {description}
      </Typography>
    </CardContent>
  </DocumentCard>
);

const Datafiles = () => {
  return (
    <Box sx={{ width: 'auto', marginTop: '50px' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <DocumentCardContent 
            title="العرائض" 
            description="كيما عريضة افتتاح الدعوى والوثائق الرسمية الأخرى المتعلقة بالقضايا." 
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DocumentCardContent 
            title="عريضة افتتاح الدعوى" 
            description="الوثيقة التي يتم فيها تقديم الدعوى للمحكمة، وتشمل ملخص القضية والمطالب." 
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DocumentCardContent 
            title="الطلبات والدفوع" 
            description="الطلبات المقدمة من المحامي أو الطرف الآخر، والدفوع المتعلقة بالقضية." 
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Datafiles;
