import React, { Component } from "react";
import FormPage from "./FormPage";
import { connect } from "react-redux";
import searchTvShows from "../../redux/actions/searchTvShows";
import searchName from "../../redux/actions/searchName";

class Form extends Component {
  state = {
    name: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(searchName(this.state.name.replace(/ /g, "%20")));
    this.props.dispatch(searchTvShows(this.state.name.replace(/ /g, "%20")));
    this.setState({ name: "" });
  };

  render() {
    return (
      <FormPage
        value={this.state.name}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect()(Form);
