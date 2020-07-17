import React from 'react';
import styled from 'styled-components';
import {CharacterCard} from './CharacterCard';


const Container = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    border-radius: 7px;
`;

export const CharactersContainer = ({characters, searchRequest}) => {

return (
    <Container>
     {searchRequest === "" && characters.flat().map((x, index) => {
        return <CharacterCard key={index} info={x} />
    })}
    {searchRequest !== "" && characters.flat().filter(p => p.name.includes(searchRequest)).map((x, index) => {
        return <CharacterCard key={index} info={x} />
    })}
    </Container>
)
}
