import React from 'react';
import "./index.css";

const myDetails = {
  firstName: 'Adolphe',
  lastName: 'Tresor',
  age: 25,
};

function getTitle(title){
  return title;
}

function App() {
  return(
    // <div>
    //   <h1>Hello {getTitle('React')}</h1>

    //   <label htmlFor='search'>Search: </label>
    //   <input id="search" type="text" />
    // </div>
    <div className='myDetails'>
      <p>Hello, <br /> My name is {myDetails.firstName} {myDetails.lastName} and I am {myDetails.age} years old. </p>
    </div>
  );
}

export default App;
