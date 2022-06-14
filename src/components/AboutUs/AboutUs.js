import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
import React from 'react';
import { HeroContainer, HeroContent, HeroDescription, HeroImage, HeroTitle } from '../../styles/heroStyles/heroStyles';

const AboutUs = () => {
    const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <HeroContainer>
            <HeroImage src="/images/hero-img.png" />
            <HeroContent>
                <HeroTitle variant="h2">About Us</HeroTitle>
                <HeroDescription variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus ratione, maiores cumque dolore hic ullam. Nihil aut ut deserunt, fugiat voluptatibus nam in expedita natus. Dolorum, cupiditate consequuntur debitis voluptatem minus deleniti ipsum incidunt explicabo laboriosam quo sed nulla temporibus necessitatibus magnam impedit aliquam distinctio a maiores eveniet porro sint! Facere harum accusantium illo odio possimus necessitatibus maxime dolores sapiente! Natus perferendis maiores est. Ducimus nam quaerat tempore tenetur at, hic repellendus molestias reiciendis nesciunt. Magni alias quis quaerat soluta nam praesentium iure placeat iusto neque eveniet dignissimos laborum incidunt dolore, voluptatem, assumenda dolor, ipsam doloremque nesciunt numquam quasi.</HeroDescription>
            </HeroContent>
        </HeroContainer>
    );
};

export default AboutUs;