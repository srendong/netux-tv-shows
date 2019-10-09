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
  state = {
    order: false,
    orderByRating: false
  };
  componentDidMount() {
    this.props.dispatch(loadPopularTvShows());
  }
  changeOrder = () => {
    this.setState({ ...this.state, order: !this.state.order });
    this.props.dispatch(upDownPage(pagePopular));
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
  tvShowSort = () => {
    if (this.state.orderByRating) {
      return this.props.popularTvShows.sort(
        (a, b) => a.vote_average - b.vote_average
      );
    } else {
      return this.props.popularTvShows.sort(
        (a, b) => b.vote_average - a.vote_average
      );
    }
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
        currentState={this.state}
        tvShows={this.state.order ? this.tvShowSort() : this.props.popularTvShows}
        showDetails={this.showDetails}
        upPage={() => this.aditional("upPage")}
        downPage={() => this.aditional("downPage")}
        pagePopular={pagePopular}
        name={this.props.name}
        changeOrder={this.changeOrder}
        changeOrderByRating={this.changeOrderByRating}
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
