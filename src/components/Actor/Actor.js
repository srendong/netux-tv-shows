import React from "react";

const Actor = ({ actor }) => {
  return (
    <div className="card d-flex justify-content-center">
      <div
        className="card card-image"
        style={{
          "backgroundImage":
          `url(https://image.tmdb.org/t/p/original${actor.profile_path})`
        }}
      ></div>

      {/* <img
        src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
        alt=""
      /> */}
    </div>
  );
};

export default Actor;

// {/* <div className="card testimonial-card h-100">
// <div className="card-up grey lighten-1" />
// <div className="avatar mx-auto white">
//   <img
//     src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
//     className="image-fluid "
//     alt="woman avatar"
//   />
// </div>
// <div className="card-body">
//   <h4 className="card-title">{actor.name}</h4>
//   <hr />
//   <p className="card-texte"></p>
// </div>
// </div> */}
