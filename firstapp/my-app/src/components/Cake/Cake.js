import React from 'react';

import classes from './Cake.css';
import CakeIngredient from './Cakeingr/Cakeingr';

const cake = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
         return <CakeIngredient key={igKey + i} type={igKey} />
        });
    });
    return (
        <div className={classes.Cake}>
            <CakeIngredient type="cake-top" />
            {transformedIngredients}
            <CakeIngredient type="cake-bottom" />
        </div>
    );
};

export default cake;