import React from 'react'
import { useState,useEffect } from 'react';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import MovieState from '../MovieState';

const MovieDetail = () => {
    const navigate = useNavigate();
    const url =navigate.location.pathname;
    const [movies,setMovies ] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    //use effect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie);
    },[movies, url]);

    
    return (
        <div>
            <h1>Movie Details</h1>
        </div>
    )
}

export default MovieDetail
