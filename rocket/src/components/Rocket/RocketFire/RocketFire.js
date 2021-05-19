import React from 'react';
import './RocketFire.css';
import Aux from '../../../hoc/_Aux/_Aux';

const RocketFire = (props) => (
    <Aux>
        <div
            className="FireContainer"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-10vh)' ,
                opacity: props.show ? '1' : '0',
                transition: 'all 3s ease-in',
                zIndex: '-1'
            }}>
                <div class="Fire"></div>
                <div class="Fire"></div>
                <div class="Fire"></div>
                 {props.children}
        </div>
    </Aux>
);

export default RocketFire;