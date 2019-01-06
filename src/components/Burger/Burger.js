import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
    // Object.keys() creates an array of keys from the object passed as an argument
    // we then .map() that array to use the keys that make up the array
    const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        // we use the keys to create an array that has a length equal to the value
        // provided with the give key, so the key salad might have a value of 1
        // so an array of length 1 is created. This is done for each key in the object
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            // then we have an empty array of the length required for the identified number of ingredients
            // so we only use the array length (i.e index) to create that many BurgerIngredient Components
            // We are mapping through this blank array and outputting a component for each empty position
            // of the array
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
