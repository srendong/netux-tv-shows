import React from "react";
const SimilarTvShows = ({ tvShow, showDetails }) => {
  return (
    <div className="similarTvShow my-1">
      <div className="row align-items-center">
        <div className="col-4">
          <img
          className="w-75"
            src={`https://image.tmdb.org/t/p/original${tvShow.poster_path}`}
            alt=""
          />
        </div>
        <div className="col-8 d-flex flex-column align-items-center">
          <h4>{tvShow.name}</h4>
          <button onClick={() => showDetails(tvShow.id)} className="btn blue-grey darken-1 text-white">Details</button>
        </div>
      </div>
    </div>
  );
};

export default SimilarTvShows;
