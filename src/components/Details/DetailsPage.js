import React from "react";
import ReactPlayer from "react-player";
//components
import NavBarIndex from "../NavBar/NavBarIndex";

import Actor from "../Actor/Actor";

const DetailsPage = ({ tvShow, trailer, characters }) => {
  return (
    <div className="DetailsPage">
      <NavBarIndex />
      <div className="contenedor container-fluid">
        <div className="fila1 row">
          <div className="col-12 col-md-8 bg-success p-3">
            <div className="row">
              <div className="col-12 col-md-4 d-flex justify-content-center">
                <img
                  src={`http://image.tmdb.org/t/p/w342/${tvShow.poster_path}`}
                  alt=""
                />
              </div>
              <div className="col-12 col-md-8 d-flex flex-column justify-content-between">
                <div className="d-flex flex-column justify-items-start">
                  <h2 className="text-center">{tvShow.name}</h2>
                  <div className="d-flex  align-items-baseline mt-4">
                    <p className="text-justify">
                      {tvShow.overview.length === 0
                        ? "Overview not found"
                        : tvShow.overview}
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column justify-items-start bg-primary">
                  <div className="d-flex align-items-baseline">
                    <h3>Genres:</h3>
                    {tvShow.genres.map(genre => (
                      <p className="mx-2" key={genre.id}>
                        {genre.name}
                      </p>
                    ))}
                  </div>
                  <div className="d-flex  align-items-baseline">
                    <h3>Qualification:</h3>
                    <p>{tvShow.vote_average}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-center p-4 bg-primary">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${trailer}`} />
          </div>
          <div className="col-12 col-md-8 m-0 bg-secondary">
          <div>
            <h3>Actors</h3>
          </div>
            <div className="row">
              {characters.map(actor => (
                <div className="col-4" key={actor.id}>
                  <Actor actor={actor} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-4 bg-danger">hola</div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
