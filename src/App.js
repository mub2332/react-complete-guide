import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Mahir', age: 20 },
      { name: 'Meherwan', age: 19 },
      { name: 'Marcel', age: 21 }
    ],
    showPersons: false
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  }

  nameChangedHandler = (event) => {
    this.setState({ 
      persons: [
        { name: event.target.value, age: 20 },
        { name: 'Meherwan', age: 19 },
        { name: 'Marcel', age: 21 }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}></Person>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Learn React</h1>
        <button
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle display</button>
        {persons}
      </div>
    );
  }
}

export default App;
