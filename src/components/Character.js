// Write your Character component here

// imported needed things
import React from "react";
import styled from "styled-components";

// I used my styled-components to be able to call from my theme
const StyledCharacter = styled.div`
  width: 20%;
  margin: 5%;
  padding: 1%;
  border-radius: 10px;
  text-align: justify;
  background-color: ${(pr) => pr.theme.primaryColor};
  color: ${(pr) => pr.theme.color};
  text-shadow: ${(pr) => pr.theme.textShadow};
`;

//Only using basic info for now. 
//May add a button for more details
export default function Character(props) {
  return (
    <StyledCharacter>
      <h2>Name: {props.name}</h2>
      <h3>Birthday: {props.birthday}</h3>
      <h3>Eye Color: {props.eyeColor}</h3>
      <h3>Gender: {props.gender}</h3>
    </StyledCharacter>
  );
}
