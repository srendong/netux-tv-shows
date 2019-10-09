import React, { Component } from "react";
import { connect } from "react-redux";
//components
import GenresPage from "./GenresPage";
//actions
import showDeatails from "../../redux/actions/showDetails";
import loadCharacters from "../../redux/actions/loadCharacters";
import loadReviews from "../../redux/actions/loadReviews";
import loadSimilarTvShows from "../../redux/actions/loadSimilarTvShows";
import loadTrailer from "../../redux/actions/loadTrailer";
import upDownPageSearch from "../../redux/actions/upDownPageSearch";

let pageGenres = 1;

class Genres extends Component {
  state = {};
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
        pageGenres++;
        return this.props.dispatch(
          upDownPageSearch(this.props.name, pageGenres)
        );
      case "downPageSearch":
        if (pageGenres > 1) {
          pageGenres--;
          return this.props.dispatch(
            upDownPageSearch(this.props.name, pageGenres)
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
      <GenresPage
        tvShows={this.props.tvShowsByGenre}
        showDetails={this.showDetails}
        upPage={() => this.aditional("upPageSearch")}
        downPage={() => this.aditional("downPageSearch")}
        pageGenres={pageGenres}
        name={this.props.name}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    tvShowsByGenre: state.tvShowsByGenre
  };
};

export default connect(mapStateToProps)(Genres);
