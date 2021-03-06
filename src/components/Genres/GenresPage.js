import React from "react";
//components
import NavBarIndex from "../NavBar/NavBarIndex";
import TvShow from "../TvShow/TvShow";

const GenresPage = props => {
  return (
    <div className="PopularPage">
      <NavBarIndex />
      <div>
        <div className="container">
          <h6 className="text-center my-3  text-capitalize">
            Genre Tv Shows: <h2>{props.genreNameId.name}</h2>
          </h6>
        </div>
        <div className="row justify-content-center ">
          <div className="col-11 row justify-content-center">
            {props.tvShows.map(tvShow => (
              <div
                key={tvShow.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 p-1"
              >
                <TvShow
                  tvShow={tvShow}
                  showDetails={() => props.showDetails(tvShow.id)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="container mt-4">
          <div className="row justify-content-center mb-4">
            <button className="boton " onClick={props.downPage}>
              -
            </button>
            <p className="numero col-1 mx-3 text-center p-0">
              {props.pageGenre}
            </p>
            <button className="boton " onClick={props.upPage}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenresPage;
