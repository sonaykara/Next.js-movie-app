import React from "react";

import  FeatureMovieLoading  from "../../components/featured-movie/loading";
import  CategoriesLoading  from "../../components/catagories/loading";
import  MoviesSectionLoading  from "../../components/movies-section/loading";



async function HomeLoading() {
    
  return (
    <>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </>
  );
}

export default HomeLoading;