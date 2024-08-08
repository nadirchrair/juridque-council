import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { styled } from '@mui/system';
import image from '../assets/page2.jpg'; // Replace with your actual image path
import Cardcomponents from './Cardcomponents';

const StyledPaper = styled(Paper)({
    backgroundColor: '#f5f5f5',
    padding: '60px',
     display: 'flex',
    alignItems: 'center',

});

const ImageBox = styled(Box)({
    width: '90%',
    height: '100%',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    minHeight: '400px' // Adjust as needed
});

const ContentBox = styled(Box)({
    padding: '40px',
    textAlign: 'right',
    color: '#333'
});

function Aprops() {
    return (
        <StyledPaper elevation={3}>
            <Grid container spacing={2}>
               
                <Grid item xs={12} md={6}>
                    <ContentBox>
                        <Typography variant="h2" component="h4" gutterBottom>
                            من نحن
                        </Typography>
                        <Typography variant="h6" paragraph>
                            انطلق مكتب روافد نجد لخدمات استقدام العمالة المنزلية برؤية عالمية، 
                            يقودها الطموح نحو خلق آليات جديدة وسهلة للوصول إلى أيدي عاملة 
                            أمينة وعلى قدر عالٍ من الكفاءة وذلك لتقديم حلول الاستقدام لإيجاد 
                            العمالة المنزلية الأنسب لعملائنا. يعتبر مكتب روافد نجد أفضل مكتب 
                            استقدام عمالة منزلية حاصل على ترخيص من منصة مساند الحكومية لتوفير 
                            خدمات استقدام عمالة منزلية بمعايير الجودة العالمية.
                        </Typography>
                    </ContentBox>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ImageBox />
                </Grid>
                <Cardcomponents/>
            </Grid>
        </StyledPaper>
    );
}

export default Aprops;
