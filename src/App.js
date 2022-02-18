import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  //I only need one useState for now, as I'm choosing to display a Character component for each character
  const [character, setCharacter] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // I created a Character componet for each character in the .get(`https://swapi.dev/api/people`) . I also gave it a key of it's own index
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people`)
      .then((results) => {
        setCharacter(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Passing all the needed info for each character
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {character.map((element, index) => {
        return (
          <Character
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
