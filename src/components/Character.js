// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  width: 20%;
  margin: 5%;
  padding: 1%;
  border-radius: 10px;
  text-align: justify;
  background-color: ${pr => pr.theme.primaryColor};
  color: ${pr => pr.theme.color};
  text-shadow: ${pr => pr.theme.textShadow}
`;

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
