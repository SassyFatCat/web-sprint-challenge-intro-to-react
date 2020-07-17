import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import {charPageOne, charPageTwo, charPageThree, charPageFour, charPageFive, charPageSix, charPageSeven, charPageeight, charPageEight} from './constants'
import {CharactersContainer} from './CharactersContainer';
import styled from 'styled-components'


const App = () => {
const [characters, setCharacters] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [searchRequest, setSearchRequest] = useState("");

const AppContainer = styled.div`

`;
const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  margin-bottom: 2%;
`;

const TextInput = styled.input`
  background: rgba(23, 23, 23, .7);
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  width: 100px;
  transition: width .5s ease-in-out;
  &:focus {
    width: 200px;
    transition: width .5s ease-in-out;
  }
`;

const IconSpan = styled.span`
  &:hover {
    cursor: pointer;
  }
  i {
    font-size: 1.8rem;
    color: white;
  }
`;

useEffect(() => {
axios.get(charPageOne)
    .then(success => setCharacters([success.data.results]))
    .catch(fail => console.log('fail'))

// axios.get(charPageTwo)
//     .then(success => setCharacters(oldArray => [...oldArray, success.data.results]))
//     .catch(fail => console.log('fail'))

// axios.get(charPageThree)
//     .then(success => setCharacters(oldArray => [...oldArray, success.data.results]))
//     .catch(fail => console.log('fail'))

// axios.get(charPageFour)
//     .then(success => setCharacters(oldArray => [...oldArray, success.data.results]))
//     .catch(fail => console.log('fail'))

// axios.get(charPageFive)
//     .then(success => setCharacters(oldArray => [...oldArray, success.data.results]))
//     .catch(fail => console.log('fail'))

// axios.get(charPageSix)
//     .then(success => setCharacters(oldArray => [...oldArray, success.data.results]))
//     .catch(fail => console.log('fail'))

// axios.get(charPageSeven)
//     .then(success => setCharacters(oldArray => [...oldArray, success.data.results]))
//     .catch(fail => console.log('fail'))

// axios.get(charPageEight)
//     .then(success => setCharacters(oldArray => [...oldArray, success.data.results]))
//     .catch(fail => console.log('fail'))
}, [])

  return (
    <AppContainer className="App">
      <h1 className="Header">Star Wars Characters</h1>
      <SearchBar>
    
      </SearchBar>
      <CharactersContainer searchRequest={searchRequest} characters={characters}/>
    </AppContainer>
  );

}

export default App;
