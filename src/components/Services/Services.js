import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';
import palette from '@mui/material/colors';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./eduDb.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1, padding: '90px 0px' }}>
            <Typography gutterBottom variant="h3" component="div">
                Our Courses
            </Typography>
            <Grid container spacing={2}>
                {
                    services.map(service => <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Service key={service.key} service={service} ></Service>
                    </Grid>)
                }

            </Grid>
        </Box>
    );
}
