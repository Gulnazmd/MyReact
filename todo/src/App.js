import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';
//import Copy from './Copy/Copy';




class App extends Component {
  state = {
    persons: [
      { id: 'ab', name: 'Gulnaz', text: 'experienced web developer with extreme attention to details and desire to make a website visually appealing. Have a big experience working on websites with creative and complex layouts. Highly experienced with animations and SVG'},
      { id: 'cd', name: 'Rustam', text: ''},
      { id: 'ef', name: 'Munir', text: ''},
      { id: 'gk', name: 'Damir', text: ''},
    ],
    otherState: 'THE BEST FAMILY',
    showPersons: false
  }
  /*
    copyTextHandler = (id) => {
    const text = document.getElementById(id);
    var code = document.createElement("textarea");
    code.innerHTML = text.lastChild.innerHTML;
    document.body.append(code);
    code.select();
    document.execCommand('copy');
    document.body.removeChild(code);
  } 
  */
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.person[personIndex])
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }
   togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
     this.setState( { showPersons: !doesShow });
   }

   render() {
    let persons = null;
    const style = {
  backgroundColor:'#3a6351',
  ':hover': {
    backgroundColor: 'lightgreen',
  }
    };

    if ( this.state.showPersons ) {
    persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person
          name={person.name}
          text={person.text}
          key={person.id}
          changed={(event) => this.nameChangedHandler(event, person.id)} />
        })}
      </div>
    );
  style.backgroundColor = "#e48257";
  style[':hover'] = {
    backgroundColor: '#f5c0c0',
  }
  }

  return (
    <div className="App">
    <h1>Hi, Let's learn together</h1>
    <p>It works!</p>
    <button onClick={this.togglePersonsHandler}
    style={style}>Click</button>  
    {persons
    }
    </div>
  ); 
//return React.createElement('div', {className: 'App' }, null, React.createElement('h1', null, "Hi! Let's learn together!"))
 }
}

export default Radium(App);
