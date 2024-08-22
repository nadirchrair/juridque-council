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
    نحن منصة شاملة تقدم حلولًا متكاملة في مجال الاستشارات القانونية للأفراد والدعم القانوني للشركات. 
    نسعى لتبسيط العمليات القانونية من خلال توفير شبكة واسعة من المحامين والمترجمين المعتمدين 
    المتخصصين في مختلف المجالات القانونية. سواء كنت بحاجة إلى مشورة قانونية شخصية أو دعم قانوني 
    لمؤسستك، نوفر لك الأدوات اللازمة للوصول إلى الخبراء الذين يمكنهم مساعدتك في حل قضاياك 
    بكفاءة وسرعة. منصتنا تمكنك من البحث عن المحامي أو المترجم المناسب بناءً على احتياجاتك 
    الخاصة، مع ضمان تقديم خدمات عالية الجودة تلبي المعايير القانونية العالمية.
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
