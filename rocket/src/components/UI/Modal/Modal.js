import React from 'react';
import './Modal.css';
import Aux from '../../../hoc/_Aux/_Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = ( props ) => (
    <Aux>
        <Backdrop opened={props.open} clicked={props.modalClosed} />
        <div class='Modal'
        style={{
            transform: props.open ? 'translateY(0)' : 'translateY(-100vh)' ,
            opacity: props.open ? '1' : '0'
        }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;