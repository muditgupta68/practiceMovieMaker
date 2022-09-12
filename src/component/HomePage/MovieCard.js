import React from "react";
import { GlobalContext } from "../../context";
import { NavLink } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const MovieCard = () => {
  const { data, loading } = GlobalContext();
  console.log(loading);
  if (loading) {
    return <CircularProgress color="primary" className="d-flex m-auto h-100" />;
  }

  return (
    <div className="container content-row">
      <div className="row">
        <div class="card-deck">
          {data?.map((curr) => {
            const { Poster, Title, Year, imdbID } = curr;
            const movieName = Title.substring(0, 21);
            return (
              <div
                class="mt-4 pt-2 col-lg-3 col-md-4 col-sm-9"
                key={`${imdbID}`}
              >
                <NavLink to={`/movie/${imdbID}`} key={`${imdbID}`}>
                  <div>
                    <div class="card w-auto mx-auto h-100">
                      <img
                        src={`${Poster}`}
                        class="card-img-top img-fluid mt-3"
                        alt={`${Title}`}
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          {Title.length > 15 ? `${movieName}...` : Title}
                        </h5>
                        <p class="card-text">{Year}</p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
