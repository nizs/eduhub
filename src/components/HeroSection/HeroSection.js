import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
import React from 'react';
import { HeroContainer, HeroContent, HeroDescription, HeroImage, HeroTitle } from '../../styles/heroStyles/heroStyles';

const HeroSection = () => {
    const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <HeroContainer>
            <HeroContent>
                <Typography variant='h6'>Edu HUB</Typography>
                <HeroTitle variant="h2">Education Never Been So Smooth!</HeroTitle>
                <HeroDescription variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, amet!</HeroDescription>
            </HeroContent>
            <HeroImage src="/images/hero-img.png" />
        </HeroContainer>
    );
};

export default HeroSection;