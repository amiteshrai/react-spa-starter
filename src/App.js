import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Sidebar from './components/nav/sidebar/Sidebar';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

function App() {
    const classes = useStyles();

    return (
        <Container display="flex" maxWidth="xl" className="app-wrapper" fixed>
            <Grid
                container
                spacing={4}
                // justify="flex-start"
                // alignContent="flex-start"
            >
                <Grid item md={1}>
                    <Sidebar className={classes.paper} />
                </Grid>
                <Grid item md={11}>
                    <Home></Home>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
