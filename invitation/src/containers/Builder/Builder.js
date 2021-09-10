import React, {Component} from 'react';
import MainPhoto from '../../components/MainPhoto/MainPhoto';
import './Builder.css'

class Builder extends Component {

    state = {
        move: false,
        show: false
    }
    

    startedHandler = () => {
        this.setState({
            move: !this.state.move
        })
      }

      
    render() {
        
        return (
                <div className="MainContainer">
                    <img className="Shadow" src='https://thumb.tildacdn.com/tild6231-3132-4131-a434-323461653861/-/resize/920x/-/format/webp/_82x.png' alt="альтернативный текст"/>
                    <img className="Form" src='https://static.tildacdn.com/tild3861-6363-4363-a230-363532383263/_6.svg' alt="альтернативный текст"/>
                    <img className="FormSecond" src='https://static.tildacdn.com/tild3938-3730-4664-b064-663962383632/_7.svg' alt="альтернативный текст"/>
                    <MainPhoto/>
                       
                </div>

            
        );
    }
}

export default Builder;