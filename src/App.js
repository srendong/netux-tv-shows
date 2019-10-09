import React, { Component } from "react";
//React-router-dom
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import { Router, browserHistory } from "react-router";
//redux
import store from "./redux/store";
import { Provider } from "react-redux";
//scss & bootstrap
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./styles/app.scss";
//components
import Home from "./components/Home/HomeIndex";
import Details from "./components/Details/DetailsIndex";
import Popular from "./components/Popular/PopularIndex";
import Genres from "./components/Genres/GenresIndex";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/details" component={Details} />
            <Route path="/popular" component={Popular} />
            <Route path="/genres" component={Genres} />
            <Redirect path="/" to="/home" />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;

// {/* <HashRouter>
//           <Switch>
//             <Route path="/home" component={Home} />
//             <Route path="/details" component={Details} />
//             <Route path="/popular" component={Popular} />
//             <Route path="/genres" component={Genres} />
//             <Redirect path="/" to="/home" />
//           </Switch>
//         </HashRouter> */}