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
      commodity1: "",
      commodity2: "",
      sex: "",
      age: "",
      geolocation: "",
      background: "",
      workplace: "",
      approach: "",
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
      errors: {},
    };
    window.onbeforeunload = function () {
      window.scrollTo(0,0);
    }
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

    alert("Thank you for agreeing to participate in the research project");
    if (
      this.state.q1 !== "Yes" ||
      this.state.q2 !== "Yes" ||
      this.state.q3 !== "Yes" ||
      this.state.q4 !== "Yes" ||
      this.state.q5 !== "Yes" ||
      this.state.q6 !== "Yes" ||
      this.state.q7 !== "Yes" ||
      this.state.q8 !== "Yes" ||
      this.state.q9 !== "Yes" ||
      this.state.q10 !== "Yes"
    ) {
      alert("Thank you, you will not be registered for the research project");
    } else {
      const newUser = {
        name: this.state.name,
        password: this.state.password,
        password2: this.state.password2,
        email: this.state.email,
        altemail: this.state.altemail,
        realname: this.state.realname,
        commodity1: this.state.commodity1,
        commodity2: this.state.commodity2,
        sex: this.state.sex,
        age: this.state.age,
        geolocation: this.state.geolocation,
        background: this.state.background,
        workplace: this.state.workplace,
        approach: this.state.approach,
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
        q10: this.state.q10
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
              <p className="lead text-center">Register to participate</p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Username/Pseudonym (Please use to ensure anonymity - Max. 12 characters)"
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
                  placeholder="Email – For Login &amp; official communication only"
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
                  placeholder="Name (Will not be visible to participants on the website / For official communication only)"
                  name="realname"
                  type="text"
                  value={this.state.realname}
                  onChange={this.onChange}
                  error={errors.realname}
                />

                <div className="form-group">
                  <select
                    name="commodity1"
                    value={this.state.commodity1}
                    onChange={this.onChange}
                    error={errors.commodity1}
                    className="form-control form-control-lg"
                  >
                    <option value=""><b>Metal to be forecasted</b></option>
                    <option value="Copper">Copper</option>
                    <option value="Gold">Gold</option>
                  </select>
                </div>

                <div className="form-group">
                  <select
                    name="commodity2"
                    value={this.state.commodity2}
                    onChange={this.onChange}
                    error={errors.commodity2}
                    className="form-control form-control-lg"
                  >
                    <option value=""><b>Additional Metal to be forecasted</b></option>
                    <option value="Copper">Copper</option>
                    <option value="Gold">Gold</option>
                    <option value="Blank">N/A</option>
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
                    <option value=""><b>Gender (Optional)</b></option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
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
                    <option value=""><b>Age (Years)</b></option>
                    <option value="<25">&lt; 25</option>
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
                    <option value=""><b>Your geographic location</b></option>
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
                    name="background"
                    value={this.state.background}
                    onChange={this.onChange}
                    error={errors.background}
                    className="form-control form-control-lg"
                  >
                    <option value=""><b>Professional Background</b></option>
                    <option value="AccountingFinancial">Accounting / Financial</option>
                    <option value="Economics">Economics</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Geology">Geology</option>
                    <option value="HR">Human Resources</option>
                    <option value="Journalism">Journalism</option>
                    <option value="Legal">Legal</option>
                    <option value="MathematicalScience">Mathematics / Science</option>
                    <option value="ProductionTechnical">Production / Technical</option>
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
                    <option value=""><b>Nature Of Your Workplace</b></option>
                    <option value="Academic">Academic Institution</option>
                    <option value="Consultancy">Consultancy / Independent</option>
                    <option value="Financial Institution">Financial Institution</option>
                    <option value="Government Agency">Government Agency</option>
                    <option value="Media Organization">Media Organization</option>
                    <option value="Mining Organization">Mining Organization</option>
                    <option value="Technical Services">Technical Services</option>
                    <option value="Trading Organization">Trading Organization</option>
                    <option value="Research Organization">Research Organization</option>
		                <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <select
                    name="approach"
                    value={this.state.approach}
                    onChange={this.onChange}
                    error={errors.approach}
                    className="form-control form-control-lg"
                  >
                    <option value=""><b>Forecasting Approach</b></option>
                    <option value="Econometric Modeling">Econometric Modeling</option>
                    <option value="Fundamental Analysis">Fundamental Analysis</option>
                    <option value="Gut Feel">&quot;Gut Feel&quot;</option>
                    <option value="Historical Averages">Historical Averages</option>
                    <option value="Market Futures Prices">Market Futures prices</option>
                    <option value="Mineral Economics">Mineral Economics</option>
                    <option value="Technical analysis">Technical Analysis</option>
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
                        <td align="justify">
                          <b>Consent Questions</b> (All questions need to be answered "Yes" in order to register and participate in the research project)
                        </td>
                        <td align="center">Yes/No</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td align="justify">
                        I confirm part of my skill set is preparing, using, or 
			                  tracking metal price forecasts. It is an expectation to 
			                  participate in the research project that you have the 
			                  necessary skill set. Please check the appropriate box 
			                  alongside. If you do not meet the skill requirement, 
			                  please decline the opportunity to participate in the 
			                  research project.
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
                        <td align="justify">
                          I understand that my participation is voluntary and
                          that I am free to withdraw at any time without giving
                          any reason, and without my rights being affected. In
                          addition, should I not wish to answer any questions or
                          submit any forecasts, I am free to decline.
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
                        <td align="justify">
			                  I understand that, under the UK Data Protection Act, I
                        can at any time ask for access to the information I  
                        provided, and I can also request the destruction of
                        that information if I wish, and withdraw from the 
			                  research project.
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
                        <td align="justify">
                          I understand that confidentiality and anonymity will
                          be maintained, and it will not be possible to identify
                          me in any publications.
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
                        <td align="justify">
                          I agree for the data collected from me to be used in
                          future research and understand that any such use of
                          identifiable data would be reviewed and approved by a
                          university research ethics committee.
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
                        <td align="justify">
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
                        <td align="justify">
                          I understand that my responses will be kept strictly
                          confidential. I give permission for members of the
                          research team to have access to my anonymized
                          responses. I understand that my name will not be
                          linked with the research materials, and I will not be
                          identified or identifiable in the report or reports
                          that result from the research project.
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
                        <td align="justify">
                          I agree that the data collected from me may be used in
                          other relevant future research on the same confidential
			                    basis as specified for this research project.
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
                        <td align="justify">
                          I understand the purpose of the research project is to
                          investigate metal price forecasting and
                          specifically acknowledge the intention of the research
                          is not to provide any trading or financial
                          recommendation on future metal prices. Any
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
                                value="No"
                                checked={this.state.q9 === "No"}
                                onChange={this.onChange}
                                className="form-check-input"
                              />
                              No
                            </label>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td align="justify">
                        I agree to take part in the the research project.                          
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

                    </tbody>
                  </table>
                </div>

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
              <div>
                <h4>Additional Information</h4>
	              <p className="text-justify">
	                Should you have any further questions, please read the 
	                Additional Information webpage. If you still have any 
	                questions or concerns thereafter, please use the 
	                contact details provided to contact us for further
	                information or clarification.
	              </p>
	              <h4>Availability of dissertation</h4>
	              <p className="text-justify">
	              When the research project is completed and the final dissertation 
	              is published, a copy will be made available on the website,
	              should any participants wish to have access to a copy.
	              </p>
              </div>
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
