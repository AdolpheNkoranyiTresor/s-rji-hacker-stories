import React from 'react';

function greetLion(name){
  return name;
}

function App(){
  return(
    <div>
      <h1>Hey Mr {greetLion(`Bonface`)}</h1>
    </div>
    );
}

export default App;
