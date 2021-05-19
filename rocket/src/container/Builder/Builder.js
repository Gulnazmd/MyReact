import React, { Component } from 'react';
import Rocket from '../../components/Rocket/Rocket';
import RocketFire from '../../components/Rocket/RocketFire/RocketFire';
import Aux from '../../hoc/_Aux/_Aux';
import Radium from 'radium';
import Moon from '../../components/Moon/Moon';
import MyChoose from '../../components/MyChoose/MyChoose';
import Modal from '../../components/UI/Modal/Modal';

class Builder extends Component {
    state = {
        decision: {
          money: 0,
          codingSkils: 0,
          health: 0,
          love: 0
        },
        starting: false,
        moonShop: false,
        money: false,
        love: false,
        coding: false
    }

    startedHandler = () => {
      this.setState({
          starting: !this.state.starting
      })
    }

    closedHandler = () => {
      this.setState({moonShop: false});
  }
    openedHandler = () => {
      this.setState({
        moonShop: !this.state.moonShop
      })
    }

    render(){
        return (
            <Aux>
              <Modal open={this.state.moonShop} 
                     modalClosed={this.closedHandler}>
                <MyChoose decision={this.state.decision}
                          modalClosed={this.closedHandler}/>
              </Modal>
              <Moon
                  show={this.state.starting}
                  moon={this.openedHandler}/>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
              <button   style={{
                backgroundColor:'rgb(255, 72, 0)',
                ':hover': {
                    backgroundColor: '#96bb7c',
                  },
                cursor: 'pointer',
                fontSize: '21px',
                outline: 'none',
                border: 'none',
                color: '#fff', 
                borderRadius: '7px',
                margin: '10px'
                }}
                onClick={this.startedHandler}>{this.state.starting ? 'Stop!' : 'Start!'}</button>
              <Rocket ></Rocket>
              <RocketFire show={this.state.starting}></RocketFire>
            </div>
            </Aux>
        ) 
    } 
}

export default Radium(Builder);
