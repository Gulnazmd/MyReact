import React from 'react';
import './Backdrop.css';

const backdrop = (props) => (
    props.opened ? <div className="Backdrop" onClick={props.clicked}></div> : null
);

export default backdrop;