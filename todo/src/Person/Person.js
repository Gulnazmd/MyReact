import React from 'react';
import Radium from 'radium';
//import CopyExample from './Copy/Copy';
import PropTypes from 'prop-types';

import './Person.css';

const person = (props) => {
     return (
          <div className="Person">
               <p>
                I'm {props.name}. I'm {props.text}.
               </p>
               <p>{props.children}</p>
               <input type="text" onChange={props.changed} value={props.name}/>
               <button  onClick={props.click}>Send</button>
          </div>
     )
}

person.protoTypes = {
     click: PropTypes.func,
     name: PropTypes.string,
     age: PropTypes.number,
     changed: PropTypes.func
}

export default Radium(person);