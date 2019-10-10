import React from "react";
const SimilarTvShows = ({ tvShow, showDetails }) => {
  return (
    <div className="similarTvShow my-1">
      <div className="row align-items-center">
        <div className="col-5 col-md-4">
          {tvShow.poster_path ? (
            <img
              className="w-100 h-100"
              src={`https://image.tmdb.org/t/p/original${tvShow.poster_path}`}
              alt=""
            />
          ) : (
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
              <p>Image Not Found </p>
            </div>
          )}
        </div>
        <div className="col-7 col-md-8d-flex flex-column align-items-center">
          <h4 className="mt-2">{tvShow.name}</h4>
          {tvShow.overview.length > 60 ? (
            <p className="subtitle">{tvShow.overview.slice(0, 60)}...</p>
          ) : (
            <p className="subtitle">{tvShow.overview}</p>
          )}
          <button
            onClick={() => showDetails(tvShow.id)}
            className="btn blue-grey darken-1 text-white"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimilarTvShows;
