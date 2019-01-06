import React from 'react';

import classes from './BuildControl.module.css';

const buildControl = props => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.removed}
            // finally, we can then just suppl,y the disabled boolean value that was passed in props.disabled
            disabled={props.disabled}
        >
            Less
        </button>
        <button className={classes.More} onClick={props.added}>
            More
        </button>
    </div>
);

export default buildControl;
