import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Results.css';


const Results = (props) => {

  return (
    <div className='container'>
    {
      props.gameResults.map(game => (
      <Card className='gamecard' sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={game.background_image}
              alt="game"
            />
            <CardContent className='content'>
              <Typography gutterBottom variant="h5" component="div">
                {game.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))
    }

  </div>
  );
 
}

export default Results;


