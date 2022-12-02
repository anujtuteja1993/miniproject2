import React, { useState } from 'react';
import Results from '../Results/Results';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Search = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [gameResults, setGameResults] = useState([])

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSearchTerm(e.target.value);
      console.log(searchTerm);
      let searchKey = searchTerm.split(' ').join('-').toLowerCase();   
      setGameResults([])
      fetch(`https://api.rawg.io/api/games?key=f2b65746f0874d129d3550dd301e2b74&search=${searchKey}`)
      .then(resp => resp.json())
      .then(({results}) => {
        results === undefined ? alert('no games found') : setGameResults(results)
        console.log(results);
      })
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField onKeyDown={handleKeyDown} className="search_bar" id="standard-basic" label="Search" variant="standard" />
      </Box>
      <Results gameResults={gameResults}></Results>
    </>
  );
}

export default Search;



