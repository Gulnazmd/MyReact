import React from 'react';

import Button from '../../UI/Button/Button';
import Aux from '../../hoc/_Aux';

const MyCard = (props) => {
    const style = {
        width: '400px',
        height: '300px',
        backgroundColor: '#d99879',
        borderRadius: '5px',
    }
    return(
        <Aux>
                <p>This is your wish card!</p>
                <div style={style}>
                    <h1>{props.userName}</h1>
                    <p>{props.userInput}</p>
                </div>
                <div>
                <Button>Cancel</Button>
                <Button clicked={props.createdHandler}>Save</Button>
                </div>
        </Aux>
    )
}

export default MyCard;