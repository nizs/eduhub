import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaControlCard(props) {
    const { category, img, description, title } = props.blog;

    return (
        <Card sx={{ }}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardMedia
                    component="img"
                    sx={{ width: 200, height: 200 }}
                    image={img}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ textAlign: 'left' }}>
                        <Typography component="div" variant="h4" color="#F77E21">
                            {title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" component="div">
                            {description}
                        </Typography>
                    </CardContent>
                </Box>
            </Grid>

        </Card>
    );
}
