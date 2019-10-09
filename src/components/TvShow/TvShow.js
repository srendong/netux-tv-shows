import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";

const tvShow = ({ tvShow, showDetails }) => {
  return (
    <MDBCard className="h-100 tvShow">
      {tvShow.poster_path ? (
        <Link  onClick={showDetails} className="tvShowImage">
          <MDBCardImage
            className="w-100 h-100 img"
            src={`http://image.tmdb.org/t/p/w342/${tvShow.poster_path}`}
            waves
          />
        </Link>
      ) : (
        <div className="noFound w-100 d-flex flex-column align-items-center justify-content-center">
          <p className="subtitle text-center text-white">{tvShow.name}</p>
          <p>Image not Found </p>
        </div>
      )}
      <MDBCardBody>
        <MDBCardTitle className="title">{tvShow.name}</MDBCardTitle>
        {tvShow.overview.length > 100 ? (
          <MDBCardText className="subtitle">
            {tvShow.overview.slice(0, 100)}...
          </MDBCardText>
        ) : (
          <MDBCardText className="subtitle">{tvShow.overview}</MDBCardText>
        )}
        <div className="d-flex align-items-baseline justify-content-between">
          <button
            className="btn blue-grey darken-1 text-white"
            onClick={showDetails}
          >
            Details
          </button>
          <div className="d-flex align-items-center">
          <span className="mr-4">{tvShow.vote_average}</span>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default tvShow;

// const tvShow = ({ tvShow, showDetails, handleFavorites, saved }) => {
//   return (
//     <div className="tvShow  p-0 pb-2">
//       {tvShow.poster_path ? (
//         <Link onClick={showDetails} to={`/details/${tvShow.id}`}>
//           <img
//             className="w-100"
//             src={`http://image.tmdb.org/t/p/w342/${tvShow.poster_path}`}
//             alt={tvShow.name}
//           />
//         </Link>
//       ) : (
//         <div className="noFound w-100 d-flex flex-column align-items-center justify-content-center">
//           <p className="titulo text-center">{tvShow.name}</p>
//           <p>Image not Found </p>
//         </div>
//       )}

//       <div className="w-100 p-0 py-2 d-flex justify-content-around align-items-center ">
//         <Link
//           to={`/details/${tvShow.id}`}
//           className="detalles"
//           onClick={showDetails}
//         >
//           Details
//         </Link>
//         <i
//           className=" material-icons save d-inline float-right align-text-middle"
//           onClick={handleFavorites}
//         >
//           {saved ? "favorite" : "favorite_border"}
//         </i>
//       </div>
//     </div>
//   );
// };

// export default tvShow;
