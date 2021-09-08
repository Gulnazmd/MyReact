import React from 'react';
import './Validation.css';

const validation = (props) => {
    let validationMessage = 'Text long enough';

    if (props.inputLength <= 5) {
        validationMessage = 'Text too short';
    }
    return (
        <div className='Mydiv'>
         <p>{validationMessage}</p>
        </div>
    );
};

export default validation;