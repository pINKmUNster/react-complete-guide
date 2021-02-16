import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {


  constructor(props)
  {
      super(props);
      this.state = {
        persons: [
          { id: 'asfa1', name: 'Max', age: 28 },
          { id: 'vasdf1', name: 'Manu', age: 29 },
          { id: 'asdf11', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
      }
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
   
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Persons  
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            nameChangedHandler={ this.nameChangedHandler} />
        </div>
      );
    }

    const classes = [];
    if ( this.state.persons.length <= 2 ) {
      classes.push( 'red' );
    }
    if ( this.state.persons.length <= 1 ) {
      classes.push( 'bold' );
    }

    return (
        <div className="App">
          <Cockpit 
          clicked={this.togglePersonsHandler} 
          classes={classes.join( ' ' )} 
          persons={persons} 
          showPersons={this.state.showPersons} />
        </div>
    );
  }
}

export default App ;
