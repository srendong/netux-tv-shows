import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// components
import NavBarPage from "./NavBarPage";
//actions
import searchTvShows from "../../redux/actions/searchTvShows";
import searchName from "../../redux/actions/searchName";
import clearHome from "../../redux/actions/clearHome";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      name: ""
    };
    this.onClick = this.onClick.bind(this);
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(searchName(this.state.name.replace(/ /g, "%20")));
    this.props.dispatch(searchTvShows(this.state.name.replace(/ /g, "%20")));
    this.props.history.push(`/home}`);
    this.setState({ name: "" });
  };
  clearHome = () => {
    this.props.dispatch(clearHome());
  };
  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <NavBarPage
        state={this.state}
        onClick={this.onClick}
        isOpen={this.state.collapse}
        value={this.state.name}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        clearHome={this.clearHome}
      />
    );
  }
}
export default withRouter(connect()(NavBar));
