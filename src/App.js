import React from 'react';


function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];



function handleClick() {
  
}

function App() {
  const value = 'World';
  return <div>
    Hello {value} ⛵ - static app
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like (0)</button>
    </div>
    </div>;
}

export default App;
