import React from 'react';
import './Wishes_card.css';
import Button from '../../UI/Button/Button';


const Wishes = (props) => {
    return(
            <div className="MyCard">
                <p>Your card</p>
                <select className="MySelect">
                <option value="1">Dear</option>
                <option value="2">Lovely</option>
                <option value="3">Darling</option>
                <option value="4">Honey</option>
                <option value="5">Dearest</option>
                <option value="6">Mi amor</option>
                </select>
                <span className="Pstyle">{props.name}</span>
                <p className="Pstyle">{props.wishes}</p>
                
                <br/>
                <Button clicked={props.createdHandler}>Create card</Button>
                <Button clicked={props.orderHandler}>Go</Button>
            </div>
    )
}

export default Wishes;