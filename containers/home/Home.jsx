import React from 'react'
import Movies from "../../mocks/movies.json"
import Genres from "../../mocks/genres.json"
import FeaturedMovie from '@/components/featured-movie'
import Categories from '../../components/catagories/index'
import MoviesSection from "../../components/movies-section/index"
const Home = () => {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]}/>
      <Categories categories={Genres.genres.slice(0, 5)}/>
      <MoviesSection title="Populer Films" movies={Movies.results.slice(1, 7)} />
      <MoviesSection title="Your Favorites Films" movies={Movies.results.slice(7, 13)} />
    </div>
  )
}

export default Home
