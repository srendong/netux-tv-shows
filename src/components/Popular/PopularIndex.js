import React, { Component } from "react";
import { connect } from "react-redux";
//components
import PopularPage from "./PopularPage";
import showDeatails from "../../redux/actions/showDetails";
import loadCharacters from "../../redux/actions/loadCharacters";
import loadReviews from "../../redux/actions/loadReviews";
import loadSimilarTvShows from "../../redux/actions/loadSimilarTvShows";
import loadTrailer from "../../redux/actions/loadTrailer";
import upDownPageSearch from "../../redux/actions/upDownPageSearch";
import loadPopularTvShows from "../../redux/actions/loadPopularTvShows";
let pageHome = 1;
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
  };
  aditional = action => {
    switch (action) {
      case "upPageSearch":
        pageHome++;
        return this.props.dispatch(upDownPageSearch(this.props.name, pageHome));
      case "downPageSearch":
        if (pageHome > 1) {
          pageHome--;
          return this.props.dispatch(
            upDownPageSearch(this.props.name, pageHome)
          );
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
        upPage={() => this.aditional("upPageSearch")}
        downPage={() => this.aditional("downPageSearch")}
        pageHome={pageHome}
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

export default connect(mapStateToProps)(Popular);
