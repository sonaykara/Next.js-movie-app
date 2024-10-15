import React from 'react'
import MovieContainer from '../../../containers/movie/index'
import Movies from '../../../mocks/movies.json'
import { notFound } from 'next/navigation'

async function delay (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const MoviePage = async ({params}) => {
    const movieDetail = Movies.results.find(movie => movie.id === parseInt(params.id))
    await delay(2000)
    
    if (!movieDetail) {
        return notFound()
    }



  return (
    <div>
      <MovieContainer movie={movieDetail} />
    </div>
  )
}

export default MoviePage
