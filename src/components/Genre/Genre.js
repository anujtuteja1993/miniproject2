import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Genre.css';

function Genre() {
    useEffect(() => {
        fetchGames()
      }, [])
    
      const [genre, setGenre] = useState([])
    
      const fetchGames = () => {
        fetch('https://api.rawg.io/api/genres?key=f2b65746f0874d129d3550dd301e2b74')
          .then(resp => resp.json())
          .then(({ results }) => setGenre(results))
      }
    
      return (
        <div className='container'>
          {
            genre.map(genre => (
    
              <Card className='gamecard' sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={genre.image_background}
                    alt="genre"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {genre.name}
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
      )
    }

export default Genre;