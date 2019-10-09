import React, { Component } from "react";
import HomePage from "./HomePage";
import { connect } from "react-redux";
import showDeatails from "../../redux/actions/showDetails";
import loadCharacters from "../../redux/actions/loadCharacters";
import loadReviews from "../../redux/actions/loadReviews";
import loadSimilarTvShows from "../../redux/actions/loadSimilarTvShows";
import loadTrailer from "../../redux/actions/loadTrailer";
import upDownPageSearch from "../../redux/actions/upDownPageSearch";
import { withRouter } from "react-router-dom";

let pageHome = 1;

class Home extends Component {
  state = {
    order: false,
    orderByRating: false
  };
  changeOrder = () => {
    this.setState({ ...this.state, order: !this.state.order });
    this.props.dispatch(upDownPageSearch(this.props.name, pageHome));
  };
  changeOrderByRating = () => {
    this.setState({ ...this.state, orderByRating: !this.state.orderByRating });
  };
  
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
  tvShowSort = () => {
    if (this.state.orderByRating) {
      return this.props.tvShows.sort((a, b) => a.vote_average - b.vote_average);
    } else {
      return this.props.tvShows.sort((a, b) => b.vote_average - a.vote_average);
    }
  };

  render() {
    return (
      <HomePage
        currentState={this.state}
        tvShows={this.state.order ? this.tvShowSort(): this.props.tvShows}
        showDetails={this.showDetails}
        upPage={() => this.aditional("upPageSearch")}
        downPage={() => this.aditional("downPageSearch")}
        pageHome={pageHome}
        name={this.props.name}
        changeOrder={this.changeOrder}
        changeOrderByRating={this.changeOrderByRating}
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

export default withRouter(connect(mapStateToProps)(Home));
