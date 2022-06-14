import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1, padding: '90px 0px' }}>
            <Typography gutterBottom variant="h3" component="div">
                Our Courses
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ textAlign: 'left' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image='./images/course-image1.jpg'
                        />
                        <CardContent sx={{ alignItems: 'left' }}>
                            <Typography gutterBottom variant="body1" component="div">
                                Course Name : WebDev
                            </Typography>
                            <Typography gutterBottom variant="body1" component="div">
                                Organization: WebTech
                            </Typography>
                            <Typography gutterBottom variant="body1" component="div">
                                Instructor : Jhon Doe
                            </Typography>
                            <Typography gutterBottom variant="body1" component="div">
                                Duration : 120 Hour
                            </Typography>
                            <Typography gutterBottom variant="h3" component="div">
                                70$
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ textAlign: 'left' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image='./images/course-image2.jpg'
                        />
                        <CardContent sx={{ alignItems: 'left' }}>
                            <Typography gutterBottom variant="body1" component="div">
                                Course Name : AppDev
                            </Typography>
                            <Typography gutterBottom variant="body1" component="div">
                                Organization: AppTech
                            </Typography>
                            <Typography gutterBottom variant="body1" component="div">
                                Instructor : Ava Del
                            </Typography>
                            <Typography gutterBottom variant="body1" component="div">
                                Duration : 100 Hour
                            </Typography>
                            <Typography gutterBottom variant="h3" component="div">
                                65$
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ textAlign: 'left' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image='./images/course-image3.jpg'
                        />
                        <CardContent sx={{ alignItems: 'left' }}>
                            <Typography gutterBottom variant="body1" component="div">
                                Course Name : PythonDev
                            </Typography>
                            <Typography gutterBottom variant="body1" component="div">
                                Organization: PythonTech
                            </Typography>
                            <Typography gutterBottom variant="body1" component="div">
                                Instructor : Roger Von
                            </Typography>
                            <Typography gutterBottom variant="body1" component="div">
                                Duration : 90 Hour
                            </Typography>
                            <Typography gutterBottom variant="h3" component="div">
                                95$
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ textAlign: 'left' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image='./images/course-image4.jpg'
                        />
                        <CardContent sx={{ alignItems: 'left' }}>
                            <Typography gutterBottom variant="body1" component="div">
                                Course Name : Oracle DB
                            </Typography>
                            <Typography gutterBottom variant="body1" component="div">
                                Organization: DB Oracle
                            </Typography>
                            <Typography gutterBottom variant="body1" component="div">
                                Instructor : Kathy James
                            </Typography>
                            <Typography gutterBottom variant="body1" component="div">
                                Duration : 80 Hour
                            </Typography>
                            <Typography gutterBottom variant="h3" component="div">
                                120$
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
