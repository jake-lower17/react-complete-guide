import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'MMax', age: 28 },
      { name: 'Manu', age: 9 },
      { name: 'Steph', age: 99 }
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    // don't do this : this.state.persons[0].name = 'maxmill';
    this.setState({
      persons: [
        { name: newName, age: 282 },
        { name: 'Manu', age: 93 },
        { name: 'Steph', age: 99 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 282 },
        { name: event.target.value, age: 93 },
        { name: 'Steph', age: 99 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button onClick={() => this.switchNameHandler('MAXZZZ')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Maximilian!')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
