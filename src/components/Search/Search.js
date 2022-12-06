import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Results from '../Results/Results';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Search = (props) => {

  const [searchTerm, setSearchTerm] = useState("")
  const setGameResults = props.resultsHandler
  const navigate = useNavigate()

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let latestSearchTerm = e.target.value; //need to store and use this value within the function, as setSearchTerm doesnt run immediately

      setSearchTerm(latestSearchTerm);
      let searchKey = latestSearchTerm.split(' ').join('-').toLowerCase();   
      setGameResults([])
      fetch(`https://api.rawg.io/api/games?key=f2b65746f0874d129d3550dd301e2b74&search=${latestSearchTerm}`)
      .then(resp => resp.json())
      .then(({results}) => {
        results === undefined ? alert('no games found') : setGameResults(results)
        console.log(results);
        navigate('/results') //once we have search results, go to the results page
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
    </>
  );
}

export default Search;



