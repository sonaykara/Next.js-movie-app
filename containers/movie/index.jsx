import React from 'react'
import FeaturedMovie from '../../components/featured-movie/index'

const MovieContainer = ({movie}) => {
  return (
    <div>
        <FeaturedMovie movie={movie} isCompact = {false}/>
    </div>
  )
}

export default MovieContainer
