import React from 'react';
import { createTheme } from '@mui/material';

export const colors = {
    primary: '#F77E21',
    secondary: '#3f6aae',
    success: '#2e7d32',
    light: '#CDF0EA',

}

const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secondary,
        }
    },
});

export default theme;