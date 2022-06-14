import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../theme/theme";

export const HeroContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: ' 90px 60px',
    backgroundColor: colors.light,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

export const HeroContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    textAlign:'left',
    maxWidth: '420',
    padding: '30px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign:'center',
    }
}));


export const HeroTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    fontsize: '72px',
    marginBottom: '20px',
    color: colors.primary,
    [theme.breakpoints.down('md')]: {
        fontsize: '42px',
    },
}));


export const HeroDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: '3em',
    fontsize: '72px',
    textAlign: 'left',
    marginBottom: '20px',
    [theme.breakpoints.down('md')]: {
        lineHeight: 1.25,
        letterSpacing: 1.25,
        marginBottom: '1.5em',
    }
}));


export const HeroImage = styled('img')(({ src ,theme }) => ({
    src: `url(${src})`,
    width: '450px',
    [theme.breakpoints.down('md')]: {
        width: '320px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '300px',
    },

}));