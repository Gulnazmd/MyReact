import React from 'react';

import classes from './Cake.css';
import CakeIngredient from './CakeIngredient/CakeIngredient';

const cake = ( props ) => {
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <CakeIngredient key={igKey + i} type={igKey} />;
            } ); 
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Let's build your cake!</p>;
    }
    return (
        <div className={classes.Cake}>
            <CakeIngredient type="bread-top" />
            {transformedIngredients}
            <CakeIngredient type="bread-bottom" />
        </div>
    );
};

export default cake;