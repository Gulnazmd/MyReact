import React from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import Button from '../UI/Button/Button';


const MyChoose = (props) => {
    const decisionList = Object.keys(props.decision).map(igKey => {
        return  <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.decision[igKey]}
                </li>
    });
    return (
        <Aux>
            <div>
                <h3>{props.name}It's Moon Shop</h3>
                <p>{props.title}Make your choice</p>

                <ul>
                    {decisionList}
                </ul>
                <p></p>
                <img alt={props.image}></img>
                <Button clicked={props.startedHandler}>Take it</Button>
                <Button clicked={props.modalClosed}>Close</Button>
                {props.children}
            </div>
        </Aux>
    )
};

export default MyChoose;