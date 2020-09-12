import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p></p>
                <p></p>
                <h1 className="display-4 mb-4">
                  Consensus Metals Forecasting Panel
                </h1>
                <h2 class="display-4 mb-5">Copper and Gold</h2>
                <hr />
                
                <Link to="/register" className="btn btn-md btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-md btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
