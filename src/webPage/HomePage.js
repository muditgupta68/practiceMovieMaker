import React from "react";
import MovieCard from "../component/HomePage/MovieCard";
import Search from "../component/HomePage/Search";

const Homepage = () => {
  return (
    <div>
      <Search />
      <MovieCard />
    </div>
  );
};

export default Homepage;
