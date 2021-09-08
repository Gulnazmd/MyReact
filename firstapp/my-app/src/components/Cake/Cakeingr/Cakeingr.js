import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Cakeingr.css';

class CakeIngredient extends Component {
    render () {
        let ingredient = null;

    switch ( this.props.type) {
        case ('cake-bottom'):
            ingredient = <div className={classes.Main}></div>;
            break;
        case ('cake-top'):
            ingredient = 
                <div className={classes.Main2}></div>
            break;
        case ('chocolate'):
            ingredient = 
                <div className={classes.Chocolate}></div>
            break;
        case ('cream'):
                ingredient = (
                    <div className={classes.Cream}>
                        <div className={classes.Drip1}></div>
                        <div className={classes.Drip2}></div>
                        <div className={classes.Drip3}></div>
                    </div>
                );
                break;
        default:
            ingredient = null;
    }

    return ingredient;
    }
}

CakeIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default CakeIngredient;