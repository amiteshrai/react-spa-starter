/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Sidebar.css';
import { Typography, ListItem, List } from '@material-ui/core';

/**
 * Sidebar Navigation Component
 */
class Sidebar extends React.Component {
    state = {
        expanded: false
    };

    constructor(props) {
        super(props);
        this.state.onHover = false;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        return (
            <div>
                {/* <div className="area"></div> */}
                <nav className="main-menu">
                    <List disablePadding dense>
                        <ListItem>
                            <Typography>GAP CAMPAIGN TRACKER</Typography>
                        </ListItem>
                    </List>
                    <ul>
                        <li>
                            <a href="http://justinfarrow.com">
                                <i className="fa fa-home fa-2x"></i>
                                <span className="nav-text">Home</span>
                            </a>
                        </li>
                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-laptop fa-2x"></i>
                                <span className="nav-text">
                                    Stars Components
                                </span>
                            </a>
                        </li>
                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-list fa-2x"></i>
                                <span className="nav-text">Forms</span>
                            </a>
                        </li>
                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-folder-open fa-2x"></i>
                                <span className="nav-text">Pages</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-bar-chart-o fa-2x"></i>
                                <span className="nav-text">
                                    Graphs and Statistics
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-font fa-2x"></i>
                                <span className="nav-text">Quotes</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-table fa-2x"></i>
                                <span className="nav-text">Tables</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-map-marker fa-2x"></i>
                                <span className="nav-text">Maps</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-question-circle fa-2x"></i>
                                <span className="nav-text">Help</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="logout">
                        <li>
                            <a href="#">
                                <i className="fa fa-power-off fa-2x"></i>
                                <span className="nav-text">Logout</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Sidebar;
