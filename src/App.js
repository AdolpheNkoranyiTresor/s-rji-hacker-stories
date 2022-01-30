import React from "react";
import "./App.css";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    age: 56,
    nationality: 'American',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    age: 45,
    nationality: 'Russian',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
function App() {
  return (
    <div>
      <h1>My hacker Stories</h1>

      <label htmlFor="serch">Search: </label>
      <input type="text" id="search" />

      <hr />

      {list.map(function (item) {
        return (
          <div key={item.objectID} className="container">
            <span>
              <a href={item.url}>{item.title} </a>
            </span>
            <span>{item.author} </span>
            <span> {item.nationality} </span>
            <span>is {item.age} years old.</span>
            <span> {item.num_comments} </span>
            <span> {item.points} </span>
            <span> {item.objectID} </span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
