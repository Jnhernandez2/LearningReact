import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a REACT app!</h1>
      <p>This is really working</p>
      <Person name="John" age="30"/>
      <Person name="Erica" age="28"/>
      <Person name="Adom" age="05">Loves to climb.</Person>
      <Person name="Ira" age="00"/>
    </div>
  );

  ///return React.createElement('div', {className: 'App'}, React.createElement('h1', null, '8===D~~~~~ ERICA'));
}

export default App;
