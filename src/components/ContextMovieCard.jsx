import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { get } from '../data/httpClient'
import './contextMovieCard.css'

const ContextMovieCard = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    get('/discover/movie').then((data) => {
      setMovies(data.results)
    })
  }, [])
  return (
    <ul className='container'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      )
      )}
    </ul>
  )
}

export default ContextMovieCard
