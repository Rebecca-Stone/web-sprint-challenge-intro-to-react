import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people`)
      .then((results) => {
        console.log(results.data);
        setCharacter(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {character.map((element, index) => {
        return (
          <Character className="mock"
            key={index}
            name={element.name}
            eyeColor={element.eye_color}
            birthday={element.birth_year}
            gender={element.gender}
          />
        );
      })}
    </div>
  );
};

export default App;
