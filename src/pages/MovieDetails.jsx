import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import VolverBoton from '../components/VolverBoton'
import { get } from '../data/httpClient'
import getMovieImg from '../utils/getMovieImg'
import './movieDetails.css'

const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])
  const [generos, setGeneros] = useState([])

  useEffect(() => {
    get('/movie/' + movieId).then((data) => {
      setMovie(data)
      setGeneros(data.genres[0])
    })
  }, [movieId])

  const imageUrl = getMovieImg(movie.poster_path, 300)

  return (
    <div>
      <VolverBoton />
      <div className='details__container'>
        <img src={imageUrl} alt={movie.title} className='details__image col' />
        <div className='details__text col'>
          <p className='details__parrafo--t'>
            <span className='details__parrafo--title'>{movie.title}</span>
          </p>
          <p className='details__parrafo'>
            <span className='details__parrafo--negrita'>Género: </span>
            {generos.name}
          </p>
          <p className='details__parrafo'>
            <span className='details__parrafo--negrita'>Descripción: </span>
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
