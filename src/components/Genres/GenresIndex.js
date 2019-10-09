import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//components
import GenresPage from "./GenresPage";
//actions
import showDeatails from "../../redux/actions/showDetails";
import loadCharacters from "../../redux/actions/loadCharacters";
import loadReviews from "../../redux/actions/loadReviews";
import loadSimilarTvShows from "../../redux/actions/loadSimilarTvShows";
import loadTrailer from "../../redux/actions/loadTrailer";
import upDownPageGenre from "../../redux/actions/upDownPageGenre";

let pageGenres = 1;

class Genres extends Component {
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
      case "upPageGenre":
        pageGenres++;
        console.log(
          pageGenres,
          this.props.genreNameId.id,
          this.props.genreNameId.name
        );
        return this.props.dispatch(
          upDownPageGenre(this.props.genreNameId.id, pageGenres)
        );
      case "downPageGenre":
        if (pageGenres > 1) {
          pageGenres--;
          return this.props.dispatch(
            upDownPageGenre(this.props.genreNameId.id, pageGenres)
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
        upPage={() => this.aditional("upPageGenre")}
        downPage={() => this.aditional("downPageGenre")}
        pageGenre={pageGenres}
        name={this.props.name}
        genreNameId={this.props.genreNameId}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    tvShowsByGenre: state.tvShowsByGenre,
    genreNameId: state.genreNameId
  };
};

export default withRouter(connect(mapStateToProps)(Genres));
