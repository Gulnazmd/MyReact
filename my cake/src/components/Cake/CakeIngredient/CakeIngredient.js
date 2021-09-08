import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './CakeIngredient.css';

class CakeIngredient extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredient = <div className={classes.Main}></div>;
                break;
            case ( 'bread-top' ):
                ingredient =
                    <div className={classes.Main2}></div>;
                break;
            case ( 'chocolate biscuit' ):
                ingredient = <div className={classes.Chocolate}></div>;
                break;
            case ( 'vanilla biscuit' ):
                ingredient = <div className={classes.Cream}></div>;
                break;
            case ( 'nut biscuit' ):
                ingredient = (
                 <div className={classes.Cream1}>
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
};

export default CakeIngredient;