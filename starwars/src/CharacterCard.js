import React from 'react';
import styled, {keyframes} from 'styled-components';

const kf = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0.5);
    
  }
  100% {
    transform: scale(1);
    
  }
`

const Character = styled.div`
    background: rgba(54, 54, 54, .8);
    border: 1px solid black;
    color: white;
    padding-bottom: 1%;
    margin-bottom: 2%;
    border: 5px solid white;
    transform: scale(0);
    animation: ${kf} 1s ease-in-out forwards;
`;

const P = styled.p`
    background-color: white;
    color: black;
    padding: .5%;
    border-radius: 14px;
`;

const InfoDiv = styled.div`
display: flex;
justify-content: space-evenly;
`;

export const CharacterCard = ({info}) => {

return (
<Character>
<h2>{info.name}</h2>
<InfoDiv>
<P>{`Height: ${info.height}cm`}</P>
<P>{`Mass: ${info.mass}kg`}</P>
<P>{`Hair Color: ${info.hair_color}`}</P>
<P>{`Skin Color: ${info.skin_color}`}</P>
</InfoDiv>
</Character>
) 
}