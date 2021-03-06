import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    //this.props.clearCurrentProfile();
    // this.props.history.push('/Landing');
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authlinks = (
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink1"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="false"
            aria-expanded="true"
          >
            Home
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink1"
          >
            <Link className="dropdown-item" to="/About">
              About the research
            </Link>
            <Link className="dropdown-item" to="/TetCs">
              T&amp;Cs
            </Link>
            <Link className="dropdown-item" to="/Contacts">
              Contact us
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="/"
            id="navbarDropdownMenuLink2"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Participants
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink2"
          >
            <Link className="dropdown-item" to="/Register">
              Registration Page
            </Link>
            <Link className="dropdown-item" to="/PConsent">
              Participant's Consent
            </Link>
          </div>
        </li>
	<li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="/"
            id="navbarDropdownMenuLink2"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Participant's Rankings
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink2"
            <Link className="dropdown-item" to="/RMethod">
              Ranking Methodology
            </Link>
            <Link className="dropdown-item" to="/CRanking">
              Copper Rankings
            </Link>
            <Link className="dropdown-item" to="/GRanking">
              Gold Rankings
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink2"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Forecast Summaries
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink2"
          >
            <Link className="dropdown-item" to="/CSumFcast">
              Copper Forecast Summary
            </Link>
            <Link className="dropdown-item" to="/GSumFcast">
              Gold Forecast Summary
            </Link>
          </div>
        </li>
	<li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink2"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Monthly Forecast Summaries
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink2"
          >
            <Link className="dropdown-item" to="/CSummary">
              Copper Forecasts
            </Link>
            <Link className="dropdown-item" to="/GSummary">
              Gold Forecasts
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="/"
            id="navbarDropdownMenuLink2"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Forecast Inputs
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink2"
          >
            <Link className="dropdown-item" to="/Copperinput">
              Copper Forecast Inputs
            </Link>
            <Link className="dropdown-item" to="/Goldinput">
              Gold Forecast Inputs
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink3"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            All Forecasts
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink3"
          >
            <Link className="dropdown-item" to="/CForecast">
              Copper Forecasts
            </Link>
            <Link className="dropdown-item" to="/GForecast">
              Gold Forecasts
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink2"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Participant's Forecasts
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink2"
          >
            <Link className="dropdown-item" to="/CPartFcast">
              Participant's Copper Forecast
            </Link>
            <Link className="dropdown-item" to="/GPartFcast">
              Participant's Gold Forecast
            </Link>
          </div>
        </li>
        <li className="nav-item button-toggle">
          <button
            className="btn btn-outline-secondary my-2 my-sm-0"
            onClick={this.onLogoutClick.bind(this)}
          >
            Logout
          </button>
        </li>
      </ul>
    );
    const chrislinks = (
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink1"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="false"
            aria-expanded="true"
          >
            Home
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink1"
          >
            <Link className="dropdown-item" to="/About">
              About the research
            </Link>
            <Link className="dropdown-item" to="/TetCs">
              T&amp;Cs
            </Link>
            <Link className="dropdown-item" to="/Contacts">
              Contact us
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="/"
            id="navbarDropdownMenuLink2"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Participants
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink2"
          >
            <Link className="dropdown-item" to="/Register">
              Registration Page
            </Link>
            <Link className="dropdown-item" to="/PConsent">
              Participant's Consent
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="/"
            id="navbarDropdownMenuLink2"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Participant's Rankings
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink2"
          >
            <Link className="dropdown-item" to="/RMethod">
              Ranking Methodology
            </Link>   
	    <Link className="dropdown-item" to="/CRanking">
              Copper Rankings
            </Link>
            <Link className="dropdown-item" to="/GRanking">
              Gold Rankings
            </Link>
            </div>
        </li>
	<li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink2"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Forecast Summaries
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink2"
          >
            <Link className="dropdown-item" to="/CSumFcast">
              Copper Forecast Summary
            </Link>
            <Link className="dropdown-item" to="/GSumFcast">
              Gold Forecast Summary
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink2"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Monthly Forecast Summaries
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink2"
          >
            <Link className="dropdown-item" to="/CSummary">
              Copper Forecasts
            </Link>
            <Link className="dropdown-item" to="/GSummary">
              Gold Forecasts
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="/"
            id="navbarDropdownMenuLink2"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Forecast Inputs
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink2"
          >
            <Link className="dropdown-item" to="/Copperinput">
              Copper Forecast Inputs
            </Link>
            <Link className="dropdown-item" to="/Goldinput">
              Gold Forecast Inputs
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink3"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            All Forecasts
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink3"
          >
            <Link className="dropdown-item" to="/CForecast">
              Copper Forecasts
            </Link>
            <Link className="dropdown-item" to="/GForecast">
              Gold Forecasts
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink2"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Participant's Forecasts
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink2"
          >
            <Link className="dropdown-item" to="/CPartFcast">
              Participant's Copper Forecast
            </Link>
            <Link className="dropdown-item" to="/GPartFcast">
              Participant's Gold Forecast
            </Link>
          </div>
        </li>
        <li className="nav-item button-toggle">
          <button
            className="btn btn-outline-secondary my-2 my-sm-0"
            onClick={this.onLogoutClick.bind(this)}
          >
            Logout
          </button>
        </li>
      </ul>
    );
    const nonauthlinks = <div></div>;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <Link className="navnav-link" to="/">
          CONSENSUS METALS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <div className="navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {isAuthenticated
                ? user == "Chris Lamprecht"
                  ? chrislinks
                  : authlinks
                : nonauthlinks}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Navbar);
