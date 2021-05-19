import React, { Component } from 'react';
import './Moon.css';
import Aux from '../../hoc/_Aux/_Aux';

class Moon extends Component {
    render() {
        return (
        <Aux>               
                <div className="Moon"
                     style={{
                        width: this.props.show ? '200px' : '100px' ,
                        height: this.props.show ? '200px' : '100px',
                        left: this.props.show ? '55%' : '60%',
                        transition: 'all 5s ease-in',
                        zIndex: '-2'
                    }}>
                </div>
                <button
                        className="MoonBtn"
                        style={{
                            opacity: this.props.show ? '1' : '0',
                            height: this.props.show ? '30px' : '10px',
                            zIndex: this.props.show? '1' : '-5',
                            transition: 'all 4s ease-in',
                        }} 
                        onClick={this.props.moon}>Welcome to the Moon!
                </button>
                {this.props.children}
            </Aux>
        )
    }
}

export default Moon;