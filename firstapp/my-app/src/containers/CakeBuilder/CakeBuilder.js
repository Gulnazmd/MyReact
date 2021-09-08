import React, { Component } from 'react';

import Auxm from '../../hoc/Auxm';
import Cake from '../../components/Cake/Cake';

class CakeBuilder extends Component {
    /*constructor(props) {
        super(props);
        this.state = {...}
    }  */
    state = {
        ingredients: {
            chocolate: 2,
            cream: 1,
            nuts: 3
        }
    }

    render () {
        return (
            <Auxm>
                <Cake ingredients={this.state.ingredients}/>
                <div>Cake Controls</div>
            </Auxm>
        );
    }
}

export default CakeBuilder;