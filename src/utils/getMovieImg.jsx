import image from '../img/descarga.png'

const getMovieImg = (path, width) => {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : image
}

export default getMovieImg
