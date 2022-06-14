import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SchoolIcon from '@mui/icons-material/School';

import { Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import { } from '../../styles/footerStyles/footerStyles';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import { Stack, TextField, TextareaAutosize, Link } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    const theme = useTheme();
    return (
        <Box sx={{ flexGrow: 1, textAlign: 'left', py: "60px", backgroundColor: "warning.light", color: "white" }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Stack>
                            <SchoolIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
                            <Typography pt="10px" variant="body1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus repudiandae earum neque, doloremque cum ad iusto, assumenda a voluptatibus optio esse voluptas? Magni, recusandae molestias deserunt soluta repudiandae repellendus! Illo deserunt animi sed officia repellat consequuntur. Mollitia blanditiis tenetur magni? Aperiam repellendus neque optio culpa tempore ratione earum id!
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Stack direction='column' spacing={1} pb={4}>
                            <Typography variant="h5">Useful Links</Typography>
                            <NavLink to="/Home">Home</NavLink>
                            <NavLink to="/About">About Us</NavLink>
                            <NavLink to="/OurServices">Services</NavLink>
                            <NavLink to="/OurBlog">Blog</NavLink>
                        </Stack>
                        <Stack direction='column' spacing={1}>
                            <Typography variant="h5">Contact Us</Typography>
                            <Typography variant="body1">Kesar Farms, Pakhand, Khamnor, Nathdwara Rajasthan 313323</Typography>
                            <Typography variant="body1">Phone: +91 99741 27473</Typography>
                            <Typography variant="body1">Email: stoxmasterbsc@gmail.com</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Stack spacing={1}>
                            <Typography variant="h5">SEND US A MESSAGE</Typography>
                            <TextField label='Your Name' variant='outlined' color="success"></TextField>
                            <TextField label='Your Email' variant='outlined' color="success" ></TextField>
                            <TextField label='Mobile' variant='outlined' color="success" ></TextField>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={3}
                                placeholder="Message"
                            />
                        </Stack>
                    </Grid>
                </Grid>
                <Stack pt={10}>
                    <Typography variant="body2" color="white" align="center">
                        {'Copyright © '}
                        <Link color="inherit" href="https://material-ui.com/">
                            EduHub
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                        All Rights Reserved
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}
