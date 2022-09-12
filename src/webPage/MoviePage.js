import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

const MoviePage = () => {
  const { id } = useParams();

  const [loading, isLoading] = useState(true);
  const [data, setData] = useState([]);
  const api = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&i=${id}`;

  //action
  const getMovie = async () => {
    try {
      isLoading(true);
      const res = await fetch(api);
      const resData = await res.json();
      console.log(resData);
      if (resData.Response === "True") {
        isLoading(false);
        setData(resData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovie(api);
    }, 1000);

    return () => clearTimeout(timeOut);
  });

  if (loading) {
    return <CircularProgress color="primary" className="d-flex m-auto h-100" />;
  }

  return (
    <div>
      <div>MoviePage : {id}</div>
      <h1 className="mt-5 text-warning mb-4">{data?.Title}</h1>
      <img src={data?.Poster} alt="movie" className="img-fluid ml-5" />
    </div>
  );
};

export default MoviePage;
