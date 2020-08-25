import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "./common/TextFieldGroup";

import { registerPrice } from "../actions/inputAct";

//commodity, month, floorprice, ratio
export class MonthPrices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commodity: "",
      month: "",
      floorprice: "",
      constant1: "",
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    /* 
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    } */
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newPrice = {
      commodity: this.state.commodity,
      month: this.state.month,
      floorprice: this.state.floorprice,
      constant1: this.state.constant1,
    };

    axios
      .post("api/beyi/enregistrer", newPrice)
      .then((res) => console.log(res.data))
      .catch((err) => this.setState({ errors: err.response.data }));
    this.setState({ month: "", commodity: "", floorprice: "", constant1: "" });

    // this.props.registerPrice(newPrice, this.props.history);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Prices </h1>
              <p className="lead text-center">
                Input Price projections for a month
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <select
                    id="mnth"
                    name="month"
                    value={this.state.month}
                    className="form-control form-control-lg"
                    onChange={(e) =>
                      this.setState({
                        month: e.target.value,
                        validationError:
                          e.target.value === "" ? "Select a month" : "",
                      })
                    }
                  >
                    <option value="">-- Select a month --</option>
                    {this.state.months
                      .slice(new Date().getMonth(), 12)
                      .map((lemois) => (
                        <option key={lemois.value} value={lemois.value}>
                          {lemois + " " + new Date().getFullYear()}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="form-group">
                  <select
                    name="commodity"
                    value={this.state.commodity}
                    onChange={this.onChange}
                    className="form-control form-control-lg"
                  >
                    <option value="">-- Select Commodity --</option>
                    <option value="Copper">Copper</option>
                    <option value="Gold">Gold</option>
                  </select>
                </div>

                <TextFieldGroup
                  placeholder="Floor price"
                  name="floorprice"
                  type="number"
                  value={this.state.floorprice}
                  onChange={this.onChange}
                />

                <TextFieldGroup
                  placeholder="constant"
                  name="constant1"
                  type="number"
                  value={this.state.constant1}
                  onChange={this.onChange}
                />

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MonthPrices.protoTypes = {
  registerPrice: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  input: state.input,
});

export default connect(mapStateToProps, {
  /* registerPrice, */
})(MonthPrices);
