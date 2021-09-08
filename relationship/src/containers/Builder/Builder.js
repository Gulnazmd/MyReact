import React, {Component} from 'react';
import './Builder.css'
import Navigator from '../../components/Nav/Nav';
import Articles from '../Articles/Articles'
import Aux from '../../hoc/_Aux';

class Builder extends Component {

    state = {
        open: false,
    }

    startedHandler = () => {
        this.setState({
            open: !this.state.open
        })
      }

      
    render() {
        const container = {
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
            height: "70vh",
            width: "70vw",
            position: "relative",
            overflow: "hidden",
            borderRadius: "3px"
        }
        const main = {
            backgroundImage: "url('https://data.whicdn.com/images/325855085/original.jpg')",
        }
        const style = {
            backgroundImage: "url('https://data.whicdn.com/images/325855085/original.jpg')",
        }
        const style1 = {
            backgroundImage: "url('https://thecompanion.in/wp-content/uploads/2020/08/3641641090_0fab9beaf4_relationships-1.jpg')"
        }
        return (
            <Aux>
                <div className="MainContainer"
                    style={main}>
                        <div style={container}>
                            <div className="Slide active"
                            style={style}></div>
                            <div className="Slide"
                            style={style1}></div>
                        </div>
                        <Articles/>
                        <Navigator
                            open={this.state.open}
                            clicked={this.startedHandler}/>
                </div>
            </Aux>
            
        );
    }
}

export default Builder;