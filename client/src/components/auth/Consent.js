import React, { Component } from "react";

class Consent extends Component {
  render() {
    return (
      <body>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <td colspan="2">PARTICIPANT CONSENT TERMS</td>
            </tr>
            <tr>
              <td>Consent questions</td>
              <td>yes/no</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                I confirm that I have read and have understood the Participant
                Information Page for this study. I have had the opportunity to
                consider the information, ask questions, and have had these
                answered satisfactorily.
              </td>
              <td>
                <div className="radio">
                  <label>
                    <input type="radio" name="question1" id="y1" value="yes" />
                    yes
                  </label>
                </div>
                <div class="answ">
                  <label for="n1">
                    <input type="radio" name="question1" id="n1" value="no" />
                    no
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                I confirm part of my skill set is preparing and/or using
                longer-term commodity price forecasts, and it is an expected
                requirement to be accepted on to the survey panel for this
                research project. Please check the appropriate box alongside. If
                you do not meet the skill requirement, please decline the
                opportunity to participate in this research project.
              </td>
              <td>
                <div className="radio">
                  <label>
                    <input type="radio" name="question2" id="y2" value="yes" />
                    yes
                  </label>
                </div>
                <div class="answ">
                  <label for="n2">
                    <input type="radio" name="question2" id="n2" value="no" />
                    no
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                I understand that my participation is voluntary and that I am
                free to withdraw at any time without giving any reason, without
                my rights being affected. In addition, should I not wish to
                answer any question or questions, I am free to decline.
              </td>
              <td>
                <div className="radio">
                  <label>
                    <input type="radio" name="question3" id="y3" value="yes" />
                    yes
                  </label>
                </div>
                <div class="answ">
                  <label for="n3">
                    <input type="radio" name="question3" id="n3" value="no" />
                    no
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                I understand that, under the Data Protection Act, I can at any
                time ask for access to the information I provide, and I can also
                request the destruction of that information if I wish.
              </td>
              <td>
                <div className="radio">
                  <label>
                    <input type="radio" name="question4" id="y4" value="yes" />
                    yes
                  </label>
                </div>
                <div class="answ">
                  <label for="n4">
                    <input type="radio" name="question4" id="n3" value="no" />
                    no
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                The information you have submitted will be published as a
                report; please indicate whether you would like to receive an
                electronic copy of the research report.
              </td>
              <td>
                <div className="radio">
                  <label>
                    <input type="radio" name="question5" id="y5" value="yes" />
                    yes
                  </label>
                </div>
                <div class="answ">
                  <label for="n5">
                    <input type="radio" name="question5" id="n3" value="no" />
                    no
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                I understand that confidentiality and anonymity will be
                maintained, and it will not be possible to identify me in any
                publications.
              </td>
              <td>
                <div className="radio">
                  <label>
                    <input type="radio" name="question6" id="y6" value="yes" />
                    yes
                  </label>
                </div>
                <div class="answ">
                  <label for="n6">
                    <input type="radio" name="question6" id="n6" value="no" />
                    no
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                I agree for the data collected from me to be used in future
                research and understand that any such use of identifiable data
                would be reviewed and approved by a research ethics committee.
              </td>
              <td>
                <div className="radio">
                  <label>
                    <input type="radio" name="question7" id="y7" value="yes" />
                    yes
                  </label>
                </div>
                <div class="answ">
                  <label for="n7">
                    <input type="radio" name="question7" id="n7" value="no" />
                    no
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                I understand and agree that my participation will be
                recorded/captured. I am aware of and consent to your use of this
                recorded information for the purpose of data analysis.
              </td>
              <td>
                <div className="radio">
                  <label>
                    <input type="radio" name="question8" id="y8" value="yes" />
                    yes
                  </label>
                </div>
                <div class="answ">
                  <label for="n8">
                    <input type="radio" name="question8" id="n8" value="no" />
                    no
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                I agree with the data collected from me to be used in other
                relevant future research.
              </td>
              <td>
                <div className="radio">
                  <label>
                    <input type="radio" name="question9" id="y9" value="yes" />
                    yes
                  </label>
                </div>
                <div class="answ">
                  <label for="n9">
                    <input type="radio" name="question9" id="n9" value="no" />
                    no
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                I understand that my responses will be kept strictly
                confidential. I give permission for members of the research team
                to have access to my anonymized responses. I understand that my
                name will not be linked with the research materials, and I will
                not be identified or identifiable in the report or reports that
                result from the research.
              </td>
              <td>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="question10"
                      id="y10"
                      value="yes"
                    />
                    yes
                  </label>
                </div>
                <div class="answ">
                  <label for="n10">
                    <input type="radio" name="question10" id="n10" value="no" />
                    no
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                I understand the purpose of the study is to investigate
                commodity price forecasting and specifically acknowledge the
                intention of the research is not to provide any trading or
                financial recommendation on future commodity price levels. Any
                inferences drawn or made about future commodity prices because
                of participating in the research are solely mine, and I take
                full responsibility for any actions I may take stemming from
                such expectations.
              </td>
              <td>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="question11"
                      id="y11"
                      value="yes"
                    />
                    yes
                  </label>
                </div>
                <div class="answ">
                  <label for="n11">
                    <input type="radio" name="question11" id="n11" value="no" />
                    no
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td>I agree to take part in the this study.</td>
              <td>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="question12"
                      id="y12"
                      value="yes"
                    />
                    yes
                  </label>
                </div>
                <div class="answ">
                  <label for="n12">
                    <input type="radio" name="question12" id="n12" value="no" />
                    no
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    );
  }
}
export default Consent;
