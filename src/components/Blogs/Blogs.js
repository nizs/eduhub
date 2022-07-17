import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import Blog from '../Blog/Blog';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./eduDBBlog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 , padding: "50px 0px" }}>
            <Typography gutterBottom variant="h3" component="div">
                Our Blogs
            </Typography>
            <Grid container spacing={2}>
                {
                    blogs.map(blog => <Grid item xs={12} sm={12} md={12} lg={6}>
                        <Blog key={blog.key} blog={blog} ></Blog>
                    </Grid>)
                }

            </Grid>
        </Box>
    );
}
