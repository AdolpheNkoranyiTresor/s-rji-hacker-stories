import React from "react";
import "./index.css";

const myDetails = {
  firstName: "Adolphe",
  lastName: "Trésor ",
  age: 25,
};

function App() {
  return (
    <div className="myDetails">
      <p>
        Hello, <br /> My name is {myDetails.firstName} {myDetails.lastName}
        I am {myDetails.age} years old.
      </p>
    </div>
  );
}
export default App;
