import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import GroupIcon from '@mui/icons-material/Group';
import LaptopIcon from '@mui/icons-material/Laptop';
import HeadsetIcon from '@mui/icons-material/Headset';

const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(3),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  width: '30%',
  height: '250px', // Adjust height as needed
  padding: theme.spacing(2),
  transition: 'transform 0.3s, box-shadow 0.3s',
  boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
  '&:hover': {
    transform: 'translateY(-10px)',
    '& .MuiSvgIcon-root': {
      transform: 'scale(1.2)',
      color: theme.palette.primary.main,
    },
  },
}));

const CardContentStyled = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
});

const IconBox = styled(Box)({
  display: 'flex',
  marginBottom: '10px',
});

const icons = {
  group: <GroupIcon fontSize="large" />,
  laptop: <LaptopIcon fontSize="large" />,
  headset: <HeadsetIcon fontSize="large" />,
};

const Cardcomponents = () => {
  const cards = [
    {
      title: 'خدمات قانونية شاملة',
      description: 'نقدم مجموعة واسعة من الاستشارات القانونية التي تغطي احتياجات الأفراد والشركات، مع خبرة في مختلف المجالات القانونية.',
      icon: 'group',
    },
    {
      title: 'منصة رقمية متكاملة',
      description: 'منصة متطورة تتيح لك الوصول إلى أفضل المحامين والمترجمين القانونيين بسرعة وسهولة، مع إمكانيات بحث متقدمة.',
      icon: 'laptop',
    },
    {
      title: 'دعم عملاء متواصل',
      description: 'فريق دعم العملاء مستعد لمساعدتك في كل خطوة، من استشارة قانونية أولية إلى متابعة احتياجاتك القانونية المستمرة.',
      icon: 'headset',
    },
  ];

  return (
    <Root>
      {cards.map((card, index) => (
        <StyledCard key={index}>
          <CardContentStyled>
            <IconBox>
              {icons[card.icon]}
            </IconBox>
            <Typography variant="h6" component="div" sx={{paddingTop:'10px',fontSize:'27px',fontWeight:'bold'}}>
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{paddingTop:'10px'}}>
              {card.description}
            </Typography>
          </CardContentStyled>
        </StyledCard>
      ))}
    </Root>
  );
};

export default Cardcomponents;
