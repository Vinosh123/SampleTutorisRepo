import React, { Component } from "react";
import { withRouter } from "react-router";
import { MenuItems } from "./MenuItems";
// import { Button } from "../Button";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  routeNav = () => {
    this.props.history.push("/Home");
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          Ksheera<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={item.cName}
                  href={item.url}
                  onClick={this.routeNav}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        {/* <Button>Sign Up</Button> */}
      </nav>
    );
  }
}

export default withRouter(Navbar);
