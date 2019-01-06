import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = props => (
    <div className={classes.BuildControls}>
        {controls.map(cntrl => (
            <BuildControl
                key={cntrl.label}
                label={cntrl.label}
                // type={cntrl.type} ---> apparently this would loop through unnecessarily, so he added
                // the arrow function below that will call that method and pass the cntrl.type as an argument
                added={() => props.ingredientAdded(cntrl.type)}
                removed={() => props.ingredientRemoved(cntrl.type)}
                // we can access the specific boolean value for the provided cntrl.type
                disabled={props.disabled[cntrl.type]}
            />
        ))}
    </div>
);

export default buildControls;
