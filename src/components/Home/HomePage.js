import React from "react";
import NavBarIndex from "../NavBar/NavBarIndex";
import FormIndex from "../Form/FormIndex";
import TvShow from "../TvShow/TvShow";

const HomePage = props => {
  return (
    <div className="HomePage">
      <NavBarIndex />
      {props.tvShows.length === 0 ? (
        <div className="rowForm w-80 d-flex justify-content-center align-items-center">
          <FormIndex />
        </div>
      ) : (
        <div>
          <div className="container">
            <h6 className="text-center my-3  text-capitalize">
            Searched: <h2>{props.name.split("%20").join(" ")}</h2>
            </h6>
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
            <div className="col-11 row justify-content-center ">
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
                {props.pageHome}
              </p>
              <button className="boton " onClick={props.upPage}>
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
