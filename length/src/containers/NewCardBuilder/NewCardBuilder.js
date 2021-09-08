import React from 'react';
import MyCard from '../../components/CreateCard/CreateCard';
import { Route } from 'react-router-dom';


class NewCard extends Component {
    state = {
        userName: "",
        userInput: ""
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const userName = "";
        const userInput = "";
        for(let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1]
            } else {
                ingredients[param[0]] = +param[1];
            }
            
        }
        this.setState({name: userName, input: userInput})
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/create-card/');
    }

    render() {
        return (
            <div>
                <MyCard 
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}
                name={this.state.userName}
                input={this.state.userInput}/>
                <Route 
                    path={this.props.match.path + '/create-card' }
                    render={(props) => (<ContactData name={this.state.userName} input={this.state.userInput} {...props}/>)}/>
            </div>
        )
    }
}

export default NewCard;