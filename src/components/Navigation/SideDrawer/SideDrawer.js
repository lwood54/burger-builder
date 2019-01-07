import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './SideDrawer.module.css';

const sideDrawer = props => {
    // add extra CSS classes to have animations

    return (
        <div className={classes.SideDrawer}>
            {/*<Logo height="11%" />*/}

            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;
