import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navigator = (props) => (
    
    <div    id="about"
            opened={props.open}
            style={{
                width: props.open ? '180px' : '50px' ,
                transition: 'all 1s ease-in',
                cursor: 'pointer'
            }}>
            <ul style={{
                opacity: props.open ? '1' : '0',
                marginRight:  props.open ? '150px' : 'null',
                transition: 'transform 1s linear, opacity 1s linear'
            }}
                opened={props.open}>
                <li><Link to="/about" exact>About</Link></li>
                <li><Link to="/contact" exact>Contact</Link></li>
            </ul>
            <div
             onClick={props.clicked}
             class="icon"
                style={{
                    position: props.open ? 'relative' : 'absolute',
                }}>
                <div class="line line1"
                style={{
                transform: props.open ? 'rotate(-765deg) translateY(6.5px)' : null}}></div>
                <div class="line line2"
                 style={{
                    transform: props.open ? 'rotate(765deg) translateY(-6.9px)' : null}}></div>
                <div class="line line3"
                style={{
                    display: props.open ? 'none' : null}}></div>
            </div>
            {props.children}
        </div>
);

export default Navigator;


