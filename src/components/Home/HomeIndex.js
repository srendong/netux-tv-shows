import React, { Component } from "react";
import HomePage from "./HomePage";
import { connect } from "react-redux";
import showDeatails from "../../redux/actions/showDetails";
import loadGenres from "../../redux/actions/loadGenres";
import upDownPageSearch from "../../redux/actions/upDownPageSearch";

let pageHome = 1;

class Home extends Component {
  // componentDidMount() {
  //   this.props.dispatch(loadGenres());
  // }

  showDetails = id => {
    this.props.dispatch(showDeatails(id));
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
        saved={this.saved}
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
