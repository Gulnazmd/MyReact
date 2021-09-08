import React from 'react';
import Cake from '../../Cake/Cake';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Cake ingredients={props.ingredients}/>
            </div>
            <Button clicked={props.checkoutCancelled}>Cancel</Button>
            <Button clicked={props.checkoutContinued}>Continue</Button>
        </div>
    );
}

export default CheckoutSummary;