import React from 'react';
import styled from 'styled-components';

const Character = styled.div`
    background: lightblue;
    border: 1px solid red;
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
<p>{`Height: ${info.height}cm`}</p>
<p>{`Mass: ${info.mass}kg`}</p>
<p>{`Hair Color: ${info.hair_color}`}</p>
<p>{`Skin Color: ${info.skin_color}`}</p>
</InfoDiv>
</Character>
) 
}