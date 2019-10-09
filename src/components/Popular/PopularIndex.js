import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
//components
import PopularPage from "./PopularPage";
import showDeatails from "../../redux/actions/showDetails";
import loadCharacters from "../../redux/actions/loadCharacters";
import loadReviews from "../../redux/actions/loadReviews";
import loadSimilarTvShows from "../../redux/actions/loadSimilarTvShows";
import loadTrailer from "../../redux/actions/loadTrailer";
import upDownPage from "../../redux/actions/upDownPage";
import loadPopularTvShows from "../../redux/actions/loadPopularTvShows";
let pagePopular = 1;
class Popular extends Component {
  state = {};
  componentDidMount() {
    this.props.dispatch(loadPopularTvShows());
  }
  showDetails = id => {
    this.props.dispatch(showDeatails(id));
    this.props.dispatch(loadCharacters(id));
    this.props.dispatch(loadReviews(id));
    this.props.dispatch(loadSimilarTvShows(id));
    this.props.dispatch(loadTrailer(id));
    this.props.history.push(`/details/${id}`);
  };
  aditional = action => {
    switch (action) {
      case "upPage":
        pagePopular++;
        return this.props.dispatch(upDownPage(pagePopular));
      case "downPage":
        if (pagePopular > 1) {
          pagePopular--;
          return this.props.dispatch(upDownPage(pagePopular));
        } else {
          break;
        }
      default:
        return null;
    }
  };
  render() {
    return (
      <PopularPage
        tvShows={this.props.popularTvShows}
        showDetails={this.showDetails}
        upPage={() => this.aditional("upPage")}
        downPage={() => this.aditional("downPage")}
        pagePopular={pagePopular}
        name={this.props.name}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    popularTvShows: state.popularTvShows
  };
};

export default withRouter(connect(mapStateToProps)(Popular));
