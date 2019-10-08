import React, { Component } from "react";
import HomePage from "./HomePage";
import { connect } from "react-redux";
import showDeatails from "../../redux/actions/showDetails";
import loadCharacters from "../../redux/actions/loadCharacters";
import loadReviews from "../../redux/actions/loadReviews";
import loadSimilarTvShows from "../../redux/actions/loadSimilarTvShows";
import loadTrailer from "../../redux/actions/loadTrailer";
import upDownPageSearch from "../../redux/actions/upDownPageSearch";


let pageHome = 1;

class Home extends Component {

  
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
        return this.props.dispatch(
          upDownPageSearch(this.props.name, pageHome)
        );
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
      <HomePage
        tvShows={this.props.tvShows}
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
    tvShows: state.tvShows,
    name: state.name
  };
};

export default connect(mapStateToProps)(Home);
