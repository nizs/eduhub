import React from 'react';
import { Box } from '@mui/material';
const error = () => {
    return (
        <Box
            component="img"
            sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 200, md: 167 },
                maxWidth: { xs: 300, md: 250 },
            }}
            alt="404...page not found."
            src="./images/404.jpg"
        />
    );
};

export default error;