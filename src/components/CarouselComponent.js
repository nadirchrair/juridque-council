import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import image1 from '../assets/pag.png';
import image2 from '../assets/page2.jpg';

const items = [
    {
        name: "E-SAJ",
        description: "اكتشف كيف يمكن أن تعزز كفاءة أعمالك القانونية ",
        image: image1 // Replace with your image URL
    },
    {
        name: "E-SAJ",
        description: "اكتشف كيف يمكن أن تسرع من عملياتك القانوني",
        image: image2 // Replace with your image URL
    }
];

function CarouselComponent() {
    return (
        <Carousel
            NextIcon={<ArrowForwardIos />}
            PrevIcon={<ArrowBackIos />}
            fullHeightHover={false}
            navButtonsProps={{
                style: {
                    backgroundColor: 'transparent',
                    color: 'white'
                }
            }}
            indicatorIconButtonProps={{
                style: {
                    padding: '10px',
                    color: 'white'
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    color: 'white'
                }
            }}
            indicatorContainerProps={{
                style: {
                    marginTop: '50px',
                    textAlign: 'center'
                }
            }}
        >
            {items.map((item, i) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    );
}

function Item(props) {
    const { name, description, image } = props.item;

    return (
        <Paper
            style={{
                position: 'relative',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '580px',
                width: '100%' // Ensure it takes the full width of its container
            }}
        >
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
               
                padding: '20px',
                textAlign: 'center',
                borderRadius: '10px'
            }}>
                <h1>{name}</h1>
                <p   style={{ 
                        fontSize: '40px',
                       
                    }}>{description}</p>
                <Button 
                    variant="contained" 
                    style={{ 
                        marginTop: '20px',
                        backgroundColor: 'white', 
                        color: 'black' ,
                        padding:'15px'
                    }}
                >
                    شاهد العروض
                </Button>
            </div>
        </Paper>
    );
}

export default CarouselComponent;
