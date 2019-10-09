import React from "react";
import ReactPlayer from "react-player";
//components
import NavBarIndex from "../NavBar/NavBarIndex";

import Actor from "../Actor/Actor";
import SimilarTvShow from "../SimilarTvShow/SimilarTvShow";

const DetailsPage = ({
  tvShow,
  trailer,
  characters,
  similarTvShows,
  showDetails,
  tvShowsByGenre
}) => {
  const tvTrailer = trailer[0];
  return (
    <div className="DetailsPage">
      <NavBarIndex />
      <div className="contenedor container-fluid">
        <div className="fila1 row">
          <div className="col-12 col-md-8">
            <div className="row">
              <div className="col-12 elegant-color special-color p-3">
                <div className="row">
                  <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                    {tvShow.poster_path ? (
                      <img
                        src={`http://image.tmdb.org/t/p/w342/${tvShow.poster_path}`}
                        alt=""
                      />
                    ) : (
                      <div className="imgNotFound border d-flex justify-content-center align-items-center">
                        <p>Image Not found</p>
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-md-8 d-flex flex-column justify-content-between">
                    <div className="d-flex flex-column justify-items-start">
                      <h2 className="text-center my-3">{tvShow.name}</h2>
                      <div className="d-flex align-items-baseline mt-4">
                        <p className="text-justify">
                          {tvShow.overview.length === 0 ? (
                            <div className="overviewNotFound  d-flex justify-content-center align-items-center">
                              <p>Overview Not Found</p>
                            </div>
                          ) : (
                            tvShow.overview
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-column justify-items-start ">
                      <div className="d-flex align-items-baseline">
                        <h4>Genres:</h4>
                        {tvShow.genres.map(genre => (
                          <button
                            className="genreBtn mx-2"
                            key={genre.name}
                            onClick={() => tvShowsByGenre(genre.id, genre)}
                          >
                            {genre.name}
                          </button>
                        ))}
                      </div>
                      <div className="d-flex align-items-baseline">
                        <h4>Rating:</h4>
                        <p className="rating mx-2">{tvShow.vote_average}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="trailer col-12 d-flex flex-column justify-content-center align-items-center p-4 elegant-color border-bottom">
                <div>
                  <h3 className="text-center my-4">Trailer</h3>
                </div>
                {trailer.length > 0 ? (
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${tvTrailer.key}`}
                    className="w-100 h-100"
                  />
                ) : (
                  <div className="w-100 h-100 border d-flex justify-content-center align-items-center">
                    <p>Trailer Not Found</p>
                  </div>
                )}
              </div>
              <div className=" col-12 m-0 elegant-color">
                <div>
                  <h3 className="text-center my-4">Actors</h3>
                </div>
                <div
                  className={
                    characters.length < 5
                      ? "row justify-content-center"
                      : "row justify-content-start"
                  }
                >
                  {characters.length > 0 ? (
                    characters.map(actor => (
                      <div
                        className="col-6 col-md-4 col-lg-3 col-xl-2 my-1 p-1"
                        key={actor.id}
                      >
                        <Actor actor={actor} />
                      </div>
                    ))
                  ) : (
                    <div className="actorsNotFound border d-flex justify-content-center align-items-center">
                      <p>Actors Not Found</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 elegant-color-dark">
            <div>
              <h3 className="text-center my-4">Similar Tv Shows</h3>
            </div>
            <div className="row justify-content-center">
              {similarTvShows.length > 0 ? (
                similarTvShows.map(tvShow => (
                  <div className="col-12" key={tvShow.id}>
                    <SimilarTvShow tvShow={tvShow} showDetails={showDetails} />
                  </div>
                ))
              ) : (
                <div className="similarShowsNotFound  border d-flex justify-content-center align-items-center">
                  <p>Similar Shows Not Found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

// {/* <div className="DetailsPage">
//       <NavBarIndex />
//       <div className="contenedor container-fluid">
//         <div className="fila1 row">
//           <div className="col-12 col-md-8 elegant-color special-color p-3">
//             <div className="row">
//               <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
//                 <img
//                   src={`http://image.tmdb.org/t/p/w342/${tvShow.poster_path}`}
//                   alt=""
//                 />
//               </div>
//               <div className="col-12 col-md-8 d-flex flex-column justify-content-between">
//                 <div className="d-flex flex-column justify-items-start">
//                   <h2 className="text-center">{tvShow.name}</h2>
//                   <div className="d-flex align-items-baseline mt-4">
//                     <p className="text-justify">
//                       {tvShow.overview.length === 0 ? (
//                         <span className="border ">Overview not found</span>
//                       ) : (
//                         tvShow.overview
//                       )}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="d-flex flex-column justify-items-start ">
//                   <div className="d-flex align-items-baseline">
//                     <h4>Genres:</h4>
//                     {tvShow.genres.map(genre => (
//                       <button
//                         className="mx-2"
//                         key={genre.name}
//                         onClick={() => tvShowsByGenre(genre.id)}
//                       >
//                         {genre.name}
//                       </button>
//                     ))}
//                   </div>
//                   <div className="d-flex  align-items-baseline">
//                     <h4>Qualification:</h4>
//                     <p className="mx-2">{tvShow.vote_average}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-md-4 d-flex justify-content-center align-items-center p-4 elegant-color-dark">
//             {trailer.length > 0 ? (
//               <ReactPlayer
//                 url={`https://www.youtube.com/watch?v=${tvTrailer.key}`}
//               />
//             ) : (
//               <div className="w-100 h-100 border d-flex justify-content-center align-items-center">
//                 <p>Trailer Not Found</p>
//               </div>
//             )}
//           </div>
//           <div className="col-12 col-md-8 m-0 elegant-color">
//             <div>
//               <h3 className="text-center my-4">{tvShow.name} actors</h3>
//             </div>
//             <div className="row justify-content-around">
//               {characters.map(actor => (
//                 <div
//                   className="col-6 col-md-4 col-lg-3 col-xl-2  p-1"
//                   key={actor.id}
//                 >
//                   <Actor actor={actor} />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="col-12 col-md-4 elegant-color-dark">
//             <div>
//               <h3 className="text-center my-4">Similar Tv Shows</h3>
//             </div>
//             <div className="row">
//               {similarTvShows.map(tvShow => (
//                 <div className="col-12" key={tvShow.id}>
//                   <SimilarTvShow tvShow={tvShow} showDetails={showDetails} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div> */}
