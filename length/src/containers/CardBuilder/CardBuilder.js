import React, { Component } from 'react';
import './CardBuilder.css';
//import Validation from '../../components/Validation/Validation';
import Aux from '../../hoc/_Aux';
import Wish from '../../components/Wishes_card/Wishes_card';
import axios from '../../axios-my-card';
import Counter from '../../components/Counter/Counter';

class CardBuilder extends Component {
    state = {
        userName: "",
        userInput: "",
        loading: false,
    }

    componentDidMount() {
        axios.get('https://my-card-f18cf-default-rtdb.firebaseio.com/create-card/-MaT9595wX754_ly20Qv.json').then(
            response => {
                this.setState({userName: response.data, userInput: response.data});
            }
        )
    }

    inputChangedHandler = (event) => {
        this.setState({userInput: event.target.value});
    }
    nameChangeHandler = (event) => {
        this.setState({ userName: event.target.value});
    }

    cardCreatedHandler = () => {
        this.setState({loading: true})
       // alert('Created!');
       const card = {
           userName: this.state.userName,
           userInput: this.state.userInput
       }
       axios.post('/create-card.json', card)
       .then( response =>  {
                this.setState({loading: false, card: card });
        })
        .catch( error => {
                this.setState({loading: false});  
               })
        this.props.history.replace('/create-card');
    } 
    orderHandler = (event) => {
       
        this.setState({loading: true});
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price, 
            orderData: formData  
        }
        axios.post('/contact-data.json', order).then(response => {
            this.setState({loading: false});
    })
            .catch(error => {
                this.setState({loading: false})
            });
            this.props.history.replace('/contact-data');
    }
    render() {
        const style = {
            alignItems: 'center',
            width: '350px',
            padding: '26px',
            margin: '50px',
            textAlign: 'center',
            borderRadius: '10px',
            justifyContent: 'center',
            display: 'block',
            backgroundColor: '#F9F1F0',
       };
       const inputStyle = {
           border: 'none',
           borderRadius: '5px',
           height: '30px',
           width: '200px',
           fontFamily: "'Akaya Telivigala', cursive",
           margin: '15px',
           outline: 'none'
       }
      
        return (
            <Aux>
               <div style={style}>
                    <input type="text"
                        placeholder="name"
                        value={this.state.userName}
                        style={inputStyle}
                        onChange={this.nameChangeHandler } 
                    />
                    <textarea type="text"
                        placeholder="your wishes"
                        onChange={this.inputChangedHandler} 
                        value={this.state.userInput}
                        style={inputStyle}
                    />
                   
                </div>
                <Wish
                        name={this.state.userName}
                        wishes={this.state.userInput}
                        createdHandler={this.cardCreatedHandler}
                        orderHandler={this.orderHandler}
                />
                <Counter/>
            </Aux>
        );
    }

}


export default CardBuilder;
