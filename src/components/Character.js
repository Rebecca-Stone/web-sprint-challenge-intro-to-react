// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  color: 'sand';
`;

export default function Character(props) {
  return (
    <StyledCharacter>
      <h2>name: {props.name}</h2>
      <h3>birthday: {props.birthday}</h3>
      <h3>eye color: {props.eyeColor}</h3>
      <h3>gender: {props.gender}</h3>
    </StyledCharacter>
  );
}
