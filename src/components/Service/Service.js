import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(props) {
    const { coursename , company , img , price , instructor , coursehour } = props.service;
  return (
    <Card sx={{ textAlign:'left' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img}
      />
      <CardContent sx={{alignItems: 'left'}}>
        <Typography gutterBottom variant="body1" component="div">
          Course Name : {coursename}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          Organization: {company}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          Instructor : {instructor}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          Duration : {coursehour}
        </Typography>
        <Typography gutterBottom variant="h3" component="div">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
