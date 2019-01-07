import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './Toolbar.module.css';

const toolbar = props => {
    return (
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <Logo height="80%" />
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default toolbar;
