import React from "react";

const Actor = ({ actor }) => {
  return (
    <div className="actor card testimonial-card h-100 ">
      <div className="card-up grey lighten-1" />
      <div className="avatar mx-auto white">
        <img
          src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
          className="w-100 "
          alt="woman avatar"
        />
      </div>
      <div className="character card-body">
        <h5 className="card-title text-center">{actor.name}</h5>
        <hr />
        <p className="card-text text-center">{actor.character}</p>
      </div>
    </div>
  );
};

export default Actor;
