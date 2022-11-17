import React from 'react'
import { Link } from 'react-router-dom'
import './movieCard.css'

const MovieCard = ({ movie }) => {
  const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path
  return (
    <li className='card'>
      <Link to={'/movies/' + movie.id} style={{ textDecoration: 'none' }}>
        <img className='card__image' src={imageUrl} alt={movie.title} />
        <div>
          <h3 className='card__title'>{movie.title}</h3>
        </div>
      </Link>
    </li>
  )
}

export default MovieCard
