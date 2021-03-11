import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      { id: 'ab', name: 'Gulnaz', age: 30},
      { id: 'cd', name: 'Rustam', age: 30},
      { id: 'ef', name: 'Munir', age: 5},
      { id: 'gk', name: 'Damir', age: 3}
    ],
    otherState: 'THE BEST FAMILY',
    showPersons: false
  }

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

   deletePersonHandler = (personIndex) => {
      const persons = this.state.persons.slice();
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
   }
   
   togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
     this.setState( { showPersons: !doesShow });
   }

   render() {
    let persons = null;

    if ( this.state.showPersons ) {
    persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person
          click={() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age} 
          key={person.id}
          changed={(event) => this.nameChangedHandler(event, person.id)} />
        })}
      </div>
    );

  }

  return (
    <div className="App">
    <h1>Hi, Let's learn together</h1>
    <p>It works!</p>
    <button onClick={this.togglePersonsHandler}>Click</button>  
    {persons
    }
    </div>
  ); 
//return React.createElement('div', {className: 'App' }, null, React.createElement('h1', null, "Hi! Let's learn together!"))
 }
}

export default App;
