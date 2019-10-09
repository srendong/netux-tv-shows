import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
//components
import DetailsPage from "./DetailsPage";
//actions
import showDeatails from "../../redux/actions/showDetails";
import loadCharacters from "../../redux/actions/loadCharacters";
import loadReviews from "../../redux/actions/loadReviews";
import loadSimilarTvShows from "../../redux/actions/loadSimilarTvShows";
import loadTrailer from "../../redux/actions/loadTrailer";
import loadByGenres from "../../redux/actions/loadByGenres";
import getGenreNameId from "../../redux/actions/getGenreNameId";

class Details extends Component {
  showDetails = id => {
    this.props.dispatch(loadCharacters(id));
    this.props.dispatch(loadReviews(id));
    this.props.dispatch(loadSimilarTvShows(id));
    this.props.dispatch(loadTrailer(id));
    this.props.dispatch(showDeatails(id));
    this.props.history.push(`/details/${id}`);
  };
  tvShowsByGenre = (id, genre) => {
    this.props.dispatch(loadByGenres(id));
    this.props.dispatch(getGenreNameId(genre));
    this.props.history.push(`/genres/${id}`);
  };

  render() {
    return (
      <DetailsPage
        tvShow={this.props.details}
        characters={this.props.characters}
        trailer={this.props.trailer}
        similarTvShows={this.props.similarTvShows.slice(0, 8)}
        reviews={this.props.reviews}
        showDetails={this.showDetails}
        tvShowsByGenre={this.tvShowsByGenre}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    popularTvShows: state.popularTvShows,
    details: state.details,
    characters: state.characters,
    reviews: state.reviews,
    similarTvShows: state.similarTvShows,
    trailer: state.trailer
  };
};
export default withRouter(connect(mapStateToProps)(Details));
