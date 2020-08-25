import React, { Component } from "react";
import { connect } from "react-redux";

export class MonthForecast1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      password2: "",
      email: "",
      altemail: "",
      realname: "",
      commodity: "",
      sex: "",
      age: "",
      geolocation: "",
      background: "",
      workplace: "",
      forecastingapproach: "",
      bio: "",

      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
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

    const newUser = {
      name: this.state.name,
      password: this.state.password,
      password2: this.state.password2,
      email: this.state.email,
      altemail: this.state.altemail,
      realname: this.state.realname,
      commodity: this.state.commodity,
      sex: this.state.sex,
      age: this.state.age,
      geolocation: this.state.geolocation,
      professionBackground: this.state.professionBackground,
      workplace: this.state.workplace,
      forecastingapproach: this.state.forecastingapproach,
      bio: this.state.bio,
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  //auth: state.auth,
});

const mapDispatchToProps = {};

/* 
Register.prototypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
 */
const mapStateToProps = (state) => ({
  auth: state.auth,
});

//export default connect(mapStateToProps, { registerUser })(Register);

export default connect(mapStateToProps, mapDispatchToProps)(MonthForecast1);
