import React, { Component } from "react";
import { connect } from "react-redux";
//components
import DetailsPage from "./DetailsPage";
//actions
import showDeatails from "../../redux/actions/showDetails";
import loadCharacters from "../../redux/actions/loadCharacters";
import loadReviews from "../../redux/actions/loadReviews";
import loadSimilarTvShows from "../../redux/actions/loadSimilarTvShows";
import loadTrailer from "../../redux/actions/loadTrailer";

class Details extends Component {
  state = {
    details: {
      backdrop_path: "/6c7jtKFCjKF0x8uIJIbUfnvtisv.jpg",
      created_by: [],
      episode_run_time: [60],
      first_air_date: "2019-09-07",
      genres: [
        {
          id: 18,
          name: "Drama"
        }
      ],
      homepage: "https://www.antena3.com/series/toyboy/",
      id: 87763,
      in_production: true,
      languages: ["es"],
      last_air_date: "2019-09-28",
      last_episode_to_air: {
        air_date: "2019-09-28",
        episode_number: 4,
        id: 1941603,
        name: "Episode 4",
        overview: "",
        production_code: "",
        season_number: 1,
        show_id: 87763,
        still_path: null,
        vote_average: 0,
        vote_count: 0
      },
      name: "Toy Boy",
      next_episode_to_air: null,
      networks: [
        {
          name: "Antena 3",
          id: 400,
          logo_path: "/l7MngINTyv0O6mNlwNsUlhQ9iwZ.png",
          origin_country: "ES"
        }
      ],
      number_of_episodes: 4,
      number_of_seasons: 1,
      origin_country: ["ES"],
      original_language: "es",
      original_name: "Toy Boy",
      overview: "",
      // overview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ducimus ut rerum quisquam possimus non dignissimos a inventore ipsam. Deleniti ullam aliquid, quibusdam accusamus est totam necessitatibus eaque quo quasi?",
      popularity: 3.706,
      poster_path: "/6PICbFc9JyiiUwwZws7eB4EYNMm.jpg",
      production_companies: [
        {
          id: 52864,
          logo_path: null,
          name: "Atresmedia Corporación",
          origin_country: ""
        }
      ],
      seasons: [
        {
          air_date: "2019-09-07",
          episode_count: 4,
          id: 120864,
          name: "Season 1",
          overview: "",
          poster_path: "/92W96Y0kvcHj1HbUqs4H3Hv2NZi.jpg",
          season_number: 1
        }
      ],
      status: "Returning Series",
      type: "Scripted",
      vote_average: 10,
      vote_count: 2
    },
    trailer: {
      key: "oIRkuav64Gk",
      site: "YouTube"
    },

    characters: [
      {
        character: "Triana Marín",
        credit_id: "5c927e16c3a36850150c2659",
        id: 1757167,
        name: "María Pedraza",
        gender: 1,
        profile_path: "/75xm6Ri4UNWokfO1bEEx6Oj4xIA.jpg",
        order: 1
      },
      {
        character: "Hugo Beltrán González",
        credit_id: "5c927e380e0a267cd8165dec",
        id: 2269561,
        name: "Jesús Mosquera",
        gender: 2,
        profile_path: "/wzybR4bO0rsDzp3utnInThq2viz.jpg",
        order: 0
      },
      {
        character: "Macarena Medina",
        credit_id: "5c927e4d0e0a267cd2165909",
        id: 1405734,
        name: "Cristina Castaño",
        gender: 1,
        profile_path: "/mVBq0ntBuHubhdlBksNyge4Wjm.jpg",
        order: 2
      },
      {
        character: "Iván",
        credit_id: "5c927e769251413c105d5dee",
        id: 1204081,
        name: "José de la Torre",
        gender: 0,
        profile_path: "/ksfqZxHtiIDPNJkKgVA2Jkz37YD.jpg",
        order: 3
      },
      {
        character: "Jairo",
        credit_id: "5c927e920e0a267cd51658b3",
        id: 2269562,
        name: "Carlo Costanzia Jr",
        gender: 0,
        profile_path: "/r8ZE8YKtpGiQVD78xfkxNZ3hpBD.jpg",
        order: 4
      },
      {
        character: "Andrea Norman Medina",
        credit_id: "5c927eb10e0a267cd8165e87",
        id: 2269563,
        name: "Juanjo Almeida",
        gender: 0,
        profile_path: "/bvzIWlGCaFbkuQjArORX5xU41IA.jpg",
        order: 5
      },
      {
        character: "Germán",
        credit_id: "5d8fec21109cd00021433feb",
        id: 2420900,
        name: "Raudel Raúl Martiato",
        gender: 0,
        profile_path: "/TyhQnMTilIaLWWi3Z7Sj6aEEAR.jpg",
        order: 6
      }
    ],
    similar: [
      {
        backdrop_path: "/jqLv26q1BcU6mIEWBl0z7nmUYr8.jpg",
        first_air_date: "2005-09-19",
        genre_ids: [35],
        id: 1100,
        name: "How I Met Your Mother",
        origin_country: ["US"],
        original_language: "en",
        original_name: "How I Met Your Mother",
        overview:
          "How I Met Your Mother is an American sitcom that originally aired on CBS from September 19, 2005, to March 31, 2014. The series follows the main character, Ted Mosby, and his group of friends in Manhattan. As a framing device, Ted, in the year 2030, recounts to his son and daughter the events that led to his meeting their mother.",
        popularity: 52.124,
        poster_path: "/izncB6dCLV7LBQ5MsOPyMx9mUDa.jpg",
        vote_average: 7.5,
        vote_count: 1204
      }
    ]
  };
  showDetails = id => {
    this.props.dispatch(showDeatails(id));
    this.props.dispatch(loadCharacters(id));
    this.props.dispatch(loadReviews(id));
    this.props.dispatch(loadSimilarTvShows(id));
    this.props.dispatch(loadTrailer(id));
  };

  render() {
    return (
      <DetailsPage
        tvShow={this.state.details}
        // tvShow={this.props.details}
        characters={this.state.characters}
        // characters={this.props.characters}
        trailer={this.state.trailer}
        // trailer={this.props.trailer}
        similarTvShows={this.state.similar}
        // similarTvShows={this.props.similarTvShows}
        reviews={this.state.reviews}
        // reviews={this.props.reviews}
        //
        showDetails={this.showDetails}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    details: state.details,
    characters: state.characters,
    reviews: state.reviews,
    similarTvShows: state.similarTvShows,
    trailer: state.trailer
  };
};
export default connect(mapStateToProps)(Details);
