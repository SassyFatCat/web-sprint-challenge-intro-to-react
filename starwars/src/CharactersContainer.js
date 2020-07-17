import React from 'react';
import styled from 'styled-components';
import {CharacterCard} from './CharacterCard';


const Container = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    width: 80%;
    border: 5px solid white;
    margin: 0 auto;
    border-radius: 7px;
`;

export const CharactersContainer = ({characters}) => {

return (
    <Container>
    {characters.map((x, index) => {
        return <CharacterCard key={index} info={x} />
    })}
    </Container>
)
}
