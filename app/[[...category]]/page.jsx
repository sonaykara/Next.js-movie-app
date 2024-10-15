import HomeContainer from "../../containers/home/Home";
import React from "react";

import Movies from "../../mocks/movies.json"

const Page = ({ params }) => {
  let selectedCategory;
  console.log(params);

  if (params.category?.length > 0) {
    selectedCategory = true;
  }

  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(1, 7) : [],
      }}
    />
  );
};

export default Page;
