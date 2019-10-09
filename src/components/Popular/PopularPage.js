import React from "react";
//components
import NavBarIndex from "../NavBar/NavBarIndex";
import TvShow from "../TvShow/TvShow";

const PopularPage = props => {
  return (
    <div className="PopularPage">
      <NavBarIndex />
      <div>
        <div className="container">
          <h2 className="text-center mt-3 ">Popular Tv shows</h2>
        </div>
        <div className="d-flex justify-content-center w-100 my-3">
          <button
            type="button"
            className={
              props.currentState.order
                ? "sort btn btn-rounded blue-grey lighten-1 text-white "
                : "sort btn btn-rounded  blue-grey darken-1 text-white"
            }
            onClick={props.changeOrder}
          >
            {props.currentState.order ? "No order" : "Order"}
          </button>
          <button
            type="button"
            className={
              props.currentState.order
                ? "sort2 btn "
                : "sort2 d-none btn unique-color-dark text-white"
            }
            onClick={props.changeOrderByRating}
          >
            {props.currentState.orderByRating
              ? "wors to Best"
              : "Best to worst"}
          </button>
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
              {props.pagePopular}
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

export default PopularPage;
