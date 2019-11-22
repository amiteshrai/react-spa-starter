import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';

import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';
import theme from './themes';

import './index.css';
import App from './App';

WebFont.load({
    google: {
        families: [
            'Roboto:300,400,500,700',
            'Titillium Web:300,400,500,700',
            'Open Sans Condensed:300,400,500,700',
            'Helvetica',
            'Droid Sans',
            'Droid Serif',
            'sans-serif'
        ]
    },
    events: false,
    classes: false
});

const renderApp = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </MuiThemeProvider>
    );
};

const rootElement = document.querySelector('#root');

ReactDOM.render(renderApp(), rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
