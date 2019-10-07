import React, { Component } from "react";
// components
import NavBarPage from "./NavBarPage";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <NavBarPage
        state={this.state}
        onClick={this.onClick}
        isOpen={this.state.collapse}
      />
    );
  }
}

export default NavBar;
