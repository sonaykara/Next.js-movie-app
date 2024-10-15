import HomeContainer from "../../containers/home/Home";
import React from "react";

import Movies from "../../mocks/movies.json"
import { notFound } from "next/navigation";
async function delay (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const Page = async({ params }) => {
  await delay(2000)
  let selectedCategory;
  console.log(params);


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
