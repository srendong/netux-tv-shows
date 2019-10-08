import React from "react";

const FormPage = props => {
  return (
    <form className="Form w-100" onSubmit={props.handleSubmit}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <input
          className="w-50 mb-3 text-center"
          type="text"
          placeholder="Find your TV Show!"
          name="name"
          value={props.value}
          onChange={props.handleChange}
        />
        <button className="w-25" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default FormPage;
