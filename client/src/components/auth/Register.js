import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
class Register extends Component {
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
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
      q7: "",
      q8: "",
      q9: "",
      q10: "",
      q11: "",
      q12: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      //  this.props.history.push("/dashboard");
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
    alert(this.state.q10);
    if (
      this.state.q1 !== "Yes" ||
      this.state.q2 !== "Yes" ||
      this.state.q3 !== "Yes" ||
      this.state.q4 !== "Yes" ||
      this.state.q6 !== "Yes" ||
      this.state.q7 !== "Yes" ||
      this.state.q8 !== "Yes" ||
      this.state.q9 !== "Yes" ||
      this.state.q10 !== "Yes" ||
      this.state.q11 !== "Yes" ||
      this.state.q12 !== "Yes"
    ) {
      alert("Thank you answer, you will not be registered for this search");
    } else {
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
        q1: this.state.q1,
        q2: this.state.q2,
        q3: this.state.q3,
        q4: this.state.q4,
        q5: this.state.q5,
        q6: this.state.q6,
        q7: this.state.q7,
        q8: this.state.q8,
        q9: this.state.q9,
        q10: this.state.q10,
        q11: this.state.q11,
        q12: this.state.q12,
      };
      this.props.registerUser(newUser, this.props.history);
    }
  }
  render() {
    const { errors } = this.state;
    const { user } = this.props.auth;
    //equivalent à
    //const user = this.props.auth.user;
    return (
      <div class="register">
        {/*user ? user.name : null*/}
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Registration</h1>
              <p className="lead text-center">Create your account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Username (Max. 8 characters & to ensure anonymity)"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                />
                <TextFieldGroup
                  placeholder="Email – For Logon & Confidential official communication only"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                />
                <TextFieldGroup
                  placeholder="Alternative email (Optional)"
                  name="altemail"
                  type="email"
                  value={this.state.altemail}
                  onChange={this.onChange}
                  error={errors.altemail}
                />
                <TextFieldGroup
                  placeholder="Real Name (For official communication only)"
                  name="realname"
                  type="text"
                  value={this.state.realname}
                  onChange={this.onChange}
                  error={errors.realname}
                />
                <div className="form-group">
                  <select
                    name="commodity"
                    value={this.state.commodity}
                    onChange={this.onChange}
                    error={errors.commodity}
                    className="form-control form-control-lg"
                  >
                    <option value="">Metal(s) to be forecasted</option>
                    <option value="Copper">Copper</option>
                    <option value="Gold">Gold</option>
                    <option value="CopperGold"> Copper &amp; Gold</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    name="Gender"
                    value={this.state.sex}
                    onChange={this.onChange}
                    error={errors.sex}
                    className="form-control form-control-lg"
                  >
                    <option value="">Gender (Optional)</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Blank">Prefer not to answer</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    name="age"
                    value={this.state.age}
                    onChange={this.onChange}
                    error={errors.age}
                    className="form-control form-control-lg"
                  >
                    <option value="">Age (Years) </option>
                    <option value="<25">&lt; 25 </option>
                    <option value="25-35">25-35</option>
                    <option value="35-45">35-45</option>
                    <option value="45-55">45-55</option>
                    <option value="55-65">55-65</option>
                    <option value=">65">&gt;65</option>
                    <option value="Blank">Prefer not to answer</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    name="geolocation"
                    value={this.state.geolocation}
                    onChange={this.onChange}
                    error={errors.geolocation}
                    className="form-control form-control-lg"
                  >
                    <option value="">Your geographic location </option>
                    <option value="Africa">Africa</option>
                    <option value="AsiaChina">Asia / China</option>
                    <option value="Australia">Australia / New Zealand</option>
                    <option value="Europe">Europe</option>
                    <option value="FarEast">Far East</option>
                    <option value="MiddleEast">Middle East</option>
                    <option value="NorthAmerica">North America / Canada</option>
                    <option value="SouthAmerica">South America</option>
                    <option value="Blank">Prefer not to answer</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    name="professionBackground"
                    value={this.state.professionBackground}
                    onChange={this.onChange}
                    error={errors.professionBackground}
                    className="form-control form-control-lg"
                  >
                    <option value="">Professional Background </option>
                    <option value="AccountingFinancial">
                      Accounting / Financial
                    </option>
                    <option value="HR">Human Resources</option>
                    <option value="Journalism">Journalism</option>
                    <option value="Legal">Legal</option>
                    <option value="Technical">Technical</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    name="workplace"
                    value={this.state.workplace}
                    onChange={this.onChange}
                    error={errors.workplace}
                    className="form-control form-control-lg"
                  >
                    <option value="">Nature Of Your Workplace</option>
                    <option value="Academic">Academic Institution</option>
                    <option value="Consultancy">Consultancy / Independent</option>
                    <option value="Financial Institution">Financial Institution</option>
                    <option value="Mining Organisation">Mining Organisation</option>
                    <option value="Technical services">Technical Services</option>
                    <option value="Research organization">Research Organization</option>
		    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    name="forecastingapproach"
                    value={this.state.forecastingapproach}
                    onChange={this.onChange}
                    error={errors.forecastingapproach}
                    className="form-control form-control-lg"
                  >
                    <option value="">Forecasting Approach</option>
                    <option value="Econometric Modeling">
                      Econometric Modeling
                    </option>
                    <option value="Fundamental Analysis">
                      Fundamental Analysis
                    </option>
                    <option value="Gut Feel">&quot;Gut Feel&quot;</option>
                    <option value="Historical Averages">
                      Historical Averages
                    </option>
                    <option value="Market Futures Prices">
                      Market Futures prices
                    </option>
                    <option value="Mineral Economics">Mineral Economics</option>
                    <option value="Technical analysis">
                      Technical Analysis
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Short Bio (Optional)"
                    name="bio"
                    type="textarea"
                    value={this.state.bio}
                    onChange={this.onChange}
                    error={errors.bio}
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-group">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <td colspan="2" align="center">
                          <b>PARTICIPANT CONSENT</b>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Consent questions</b>
                        </td>
                        <td align="center">Yes/No</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td align="left">
                          I confirm that I have read and have understood the
                          Participant Information Page for this study. I have
                          had the opportunity to consider the information, ask
                          questions, and have had these answered satisfactorily.
                        </td>
                        <td align="center">
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q1"
                                value="Yes"
                                checked={this.state.q1 === "Yes"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q1"
                                value="No"
                                checked={this.state.q1 === "No"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              No
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left">
                          I confirm part of my skill set is preparing and/or
                          using longer-term metal price forecasts, and it is
                          an expected requirement to be accepted on to the
                          survey panel for this research project. Please check
                          the appropriate box alongside. If you do not meet the
                          skill requirement, please decline the opportunity to
                          participate in this research project.
                        </td>
                        <td align="center">
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q2"
                                value="Yes"
                                checked={this.state.q2 === "Yes"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q2"
                                value="No"
                                checked={this.state.q2 === "No"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              No
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left">
                          I understand that my participation is voluntary and
                          that I am free to withdraw at any time without giving
                          any reason, without my rights being affected. In
                          addition, should I not wish to answer any question or
                          questions, I am free to decline.
                        </td>
                        <td align="center">
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q3"
                                value="Yes"
                                checked={this.state.q3 === "Yes"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q3"
                                value="No"
                                checked={this.state.q3 === "No"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              No
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left">
                          I understand that, under the UK Data Protection Act, I
                          can at any time ask for access to the information I
                          provide, and I can also request the destruction of
                          that information if I wish.
                        </td>
                        <td align="center">
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q4"
                                value="Yes"
                                checked={this.state.q4 === "Yes"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q4"
                                value="No"
                                checked={this.state.q4 === "No"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              No
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left">
                          The information you have submitted will be published
                          as a dissertation; please indicate whether you would 
                          like to receive an electronic copy of the research report.
                        </td>
                        <td align="center">
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q5"
                                value="Yes"
                                checked={this.state.q5 === "Yes"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q5"
                                value="No"
                                checked={this.state.q5 === "No"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              No
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left">
                          I understand that confidentiality and anonymity will
                          be maintained, and it will not be possible to identify
                          me in any publications.
                        </td>
                        <td align="center">
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q6"
                                value="Yes"
                                checked={this.state.q6 === "Yes"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q6"
                                value="No"
                                checked={this.state.q6 === "No"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              No
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left">
                          I agree for the data collected from me to be used in
                          future research and understand that any such use of
                          identifiable data would be reviewed and approved by a
                          research ethics committee.
                        </td>
                        <td align="center">
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q7"
                                value="Yes"
                                checked={this.state.q7 === "Yes"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q7"
                                value="No"
                                checked={this.state.q7 === "No"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              No
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left">
                          I understand and agree that my participation will be
                          recorded/captured. I am aware of and consent to your
                          use of this recorded information for the purpose of
                          data analysis.
                        </td>
                        <td align="center">
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q8"
                                value="Yes"
                                checked={this.state.q8 === "Yes"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q8"
                                value="No"
                                checked={this.state.q8 === "No"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              No
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left">
                          I agree with the data collected from me to be used in
                          other relevant future research.
                        </td>
                        <td align="center">
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q9"
                                value="Yes"
                                checked={this.state.q9 === "Yes"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q9"
                                value="Yes"
                                checked={this.state.q9 === "Yes"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              No
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left">
                          I understand that my responses will be kept strictly
                          confidential. I give permission for members of the
                          research team to have access to my anonymized
                          responses. I understand that my name will not be
                          linked with the research materials, and I will not be
                          identified or identifiable in the report or reports
                          that result from the research.
                        </td>
                        <td align="center">
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q10"
                                value="Yes"
                                checked={this.state.q10 === "Yes"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q10"
                                value="No"
                                checked={this.state.q10 === "No"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              No
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left">
                          I understand the purpose of the study is to
                          investigate metal price forecasting and
                          specifically acknowledge the intention of the research
                          is not to provide any trading or financial
                          recommendation on future metal price levels. Any
                          inferences drawn or made about future metal prices
                          because of participating in the research are solely
                          mine, and I take full responsibility for any actions I
                          may take stemming from such expectations.
                        </td>
                        <td align="center">
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q11"
                                value="Yes"
                                checked={this.state.q11 === "Yes"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q11"
                                value="No"
                                checked={this.state.q11 === "No"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              No
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left">I agree to take part in the this study.</td>
                        <td align="center">
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q12"
                                value="Yes"
                                checked={this.state.q12 === "Yes"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <label>
                              <input
                                type="radio"
                                name="q12"
                                value="No"
                                checked={this.state.q12 === "No"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              No
                            </label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Register.prototypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { registerUser })(Register);
