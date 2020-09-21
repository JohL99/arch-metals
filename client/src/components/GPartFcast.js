import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GraphPartGold from "./GraphPartGold";
class GPartFcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      users: [],
      augusts: [],
      septembers: [],
      octobers: [],
      novembers: [],
      decembers: [],
      recents: [],
      prixaug: [],
      prixsept: [],
      prixoct: [],
      prixnov: [],
      prixdec: [],
      donnees1: [],
      evaug: "",
      evsep: "",
      evoct: "",
      evnov: "",
      evdec: "",
      comaug: "",
      comsep: "",
      comoct: "",
      comnov: "",
      comdec: "",
    };
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    this.onChange = this.onChange.bind(this);
    this.fillprices = this.fillprices.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  convert_to_utc = (dateStr) => {
    //check whether time is in PM or AM
    var hours = dateStr.getHours();
    var hours = (hours + 24 - 2) % 24;
    var mid = "am";
    if (hours == 0) {
      //At 00 hours we need to show 12 am
      hours = 12;
    } else if (hours > 12) {
      hours = hours % 12;
      mid = "pm";
    }
    var newdate =
      dateStr.toUTCString().split(" ")[0] +
      dateStr.toUTCString().split(" ")[1] +
      " " +
      dateStr.toUTCString().split(" ")[2] +
      " " +
      dateStr.toUTCString().split(" ")[3] +
      " " +
      dateStr.toUTCString().split(" ")[4].split(":")[0] +
      ":" +
      dateStr.toUTCString().split(" ")[4].split(":")[1];

    return newdate + " " + mid;
  };
  componentDidMount() {
    fetch("/api/users/tous/" + "Gold" + "&Gold")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let utilisateurFromApi = data.map((utilisateur) => {
          return { value: utilisateur.name, display: utilisateur.name };
        });
        this.setState({
          users: [{ value: "", display: "(Choose Participant)" }].concat(
            utilisateurFromApi
          ),
        });
      })
      .catch((error) => {
        console.log(error);
      });
      window.scrollTo(0,0);
  }
  fillprices(utilisateur, produit) {
    let psepFromApi = {};
    let poctFromApi = {};
    let pnovFromApi = {};
    let pdecFromApi = {};
    var donnees1 = [];
    fetch("/api/beyi/commois/" + "September 2020" + "&Gold")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        psepFromApi = data.map((mutengo) => {
          return {
            pour1: mutengo.floorprice + mutengo.constant1 * 0,
            pour2: mutengo.floorprice + mutengo.constant1 * 1,
            pour3: mutengo.floorprice + mutengo.constant1 * 2,
            pour4: mutengo.floorprice + mutengo.constant1 * 3,
            pour5: mutengo.floorprice + mutengo.constant1 * 4,
            pour6: mutengo.floorprice + mutengo.constant1 * 5,
            pour7: mutengo.floorprice + mutengo.constant1 * 6,
            pour8: mutengo.floorprice + mutengo.constant1 * 7,
            pour9: mutengo.floorprice + mutengo.constant1 * 8,
          };
        });
        this.setState({ prixsept: [].concat(psepFromApi) });
      })
      .catch((error) => {
        console.log(error);
      });
    fetch("/api/beyi/commois/" + "October 2020" + "&Gold")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        poctFromApi = data.map((mutengo) => {
          return {
            pour1: mutengo.floorprice + mutengo.constant1 * 0,
            pour2: mutengo.floorprice + mutengo.constant1 * 1,
            pour3: mutengo.floorprice + mutengo.constant1 * 2,
            pour4: mutengo.floorprice + mutengo.constant1 * 3,
            pour5: mutengo.floorprice + mutengo.constant1 * 4,
            pour6: mutengo.floorprice + mutengo.constant1 * 5,
            pour7: mutengo.floorprice + mutengo.constant1 * 6,
            pour8: mutengo.floorprice + mutengo.constant1 * 7,
            pour9: mutengo.floorprice + mutengo.constant1 * 8,
          };
        });
        this.setState({
          prixoct: [].concat(poctFromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    fetch("/api/beyi/commois/" + "November 2020" + "&Gold")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        pnovFromApi = data.map((mutengo) => {
          return {
            pour1: mutengo.floorprice + mutengo.constant1 * 0,
            pour2: mutengo.floorprice + mutengo.constant1 * 1,
            pour3: mutengo.floorprice + mutengo.constant1 * 2,
            pour4: mutengo.floorprice + mutengo.constant1 * 3,
            pour5: mutengo.floorprice + mutengo.constant1 * 4,
            pour6: mutengo.floorprice + mutengo.constant1 * 5,
            pour7: mutengo.floorprice + mutengo.constant1 * 6,
            pour8: mutengo.floorprice + mutengo.constant1 * 7,
            pour9: mutengo.floorprice + mutengo.constant1 * 8,
          };
        });
        this.setState({
          prixnov: [].concat(pnovFromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    fetch("/api/beyi/commois/" + "December 2020" + "&Gold")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        pdecFromApi = data.map((mutengo) => {
          return {
            pour1: mutengo.floorprice + mutengo.constant1 * 0,
            pour2: mutengo.floorprice + mutengo.constant1 * 1,
            pour3: mutengo.floorprice + mutengo.constant1 * 2,
            pour4: mutengo.floorprice + mutengo.constant1 * 3,
            pour5: mutengo.floorprice + mutengo.constant1 * 4,
            pour6: mutengo.floorprice + mutengo.constant1 * 5,
            pour7: mutengo.floorprice + mutengo.constant1 * 6,
            pour8: mutengo.floorprice + mutengo.constant1 * 7,
            pour9: mutengo.floorprice + mutengo.constant1 * 8,
          };
        });
        this.setState({
          prixdec: [].concat(pdecFromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    
    fetch("/api/menji/userd/September 2020&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let septemberFromApi = data.map((september) => {
          let xEV =
            psepFromApi[0].pour1 * september.price1 +
            psepFromApi[0].pour2 * september.price2 +
            psepFromApi[0].pour3 * september.price3 +
            psepFromApi[0].pour4 * september.price4 +
            psepFromApi[0].pour5 * september.price5 +
            psepFromApi[0].pour6 * september.price6 +
            psepFromApi[0].pour7 * september.price7 +
            psepFromApi[0].pour8 * september.price8 +
            psepFromApi[0].pour9 * september.price9;
          this.setState({ evsep: xEV });
          this.setState({ comsep: september.generalcomments });

          return {
            EV: xEV,
            price1: september.price1,
            price2: september.price2,
            price3: september.price3,
            price4: september.price4,
            price5: september.price5,
            price6: september.price6,
            price7: september.price7,
            price8: september.price8,
            price9: september.price9,
            lemedian: september.lemedian,
            dateforecast: this.convert_to_utc(new Date(september.dateforecast)),
            specificcomments: september.specificcomments,
            generalcomments: september.generalcomments,
          };
        });
        this.setState({
          septembers: [].concat(septemberFromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    
    fetch("/api/menji/userd/October 2020&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let octoberFromApi = data.map((october) => {
          let xEV =
            poctFromApi[0].pour1 * october.price1 +
            poctFromApi[0].pour2 * october.price2 +
            poctFromApi[0].pour3 * october.price3 +
            poctFromApi[0].pour4 * october.price4 +
            poctFromApi[0].pour5 * october.price5 +
            poctFromApi[0].pour6 * october.price6 +
            poctFromApi[0].pour7 * october.price7 +
            poctFromApi[0].pour8 * october.price8 +
            poctFromApi[0].pour9 * october.price9;
          this.setState({ evoct: xEV });
          this.setState({ comoct: october.generalcomments });
          return {
            EV: xEV,
            price1: october.price1,
            price2: october.price2,
            price3: october.price3,
            price4: october.price4,
            price5: october.price5,
            price6: october.price6,
            price7: october.price7,
            price8: october.price8,
            price9: october.price9,
            lemedian: october.lemedian,
            dateforecast: this.convert_to_utc(new Date(october.dateforecast)),
            specificcomments: october.specificcomments,
            generalcomments: october.generalcomments,
          };
        });
        this.setState({
          octobers: [].concat(octoberFromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    
    fetch("/api/menji/userd/November 2020&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let novemberFromApi = data.map((november) => {
          let xEV =
            pnovFromApi[0].pour1 * november.price1 +
            pnovFromApi[0].pour2 * november.price2 +
            pnovFromApi[0].pour3 * november.price3 +
            pnovFromApi[0].pour4 * november.price4 +
            pnovFromApi[0].pour5 * november.price5 +
            pnovFromApi[0].pour6 * november.price6 +
            pnovFromApi[0].pour7 * november.price7 +
            pnovFromApi[0].pour8 * november.price8 +
            pnovFromApi[0].pour9 * november.price9;
          this.setState({ evnov: xEV });
          this.setState({ comnov: november.generalcomments });
          return {
            EV: xEV,
            price1: november.price1,
            price2: november.price2,
            price3: november.price3,
            price4: november.price4,
            price5: november.price5,
            price6: november.price6,
            price7: november.price7,
            price8: november.price8,
            price9: november.price9,
            lemedian: november.lemedian,
            dateforecast: this.convert_to_utc(new Date(november.dateforecast)),
            specificcomments: november.specificcomments,
            generalcomments: november.generalcomments,
          };
        });
        this.setState({
          novembers: [].concat(novemberFromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    
    fetch("/api/menji/userd/December 2020&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let decemberFromApi = data.map((december) => {
          let xEV =
            pdecFromApi[0].pour1 * december.price1 +
            pdecFromApi[0].pour2 * december.price2 +
            pdecFromApi[0].pour3 * december.price3 +
            pdecFromApi[0].pour4 * december.price4 +
            pdecFromApi[0].pour5 * december.price5 +
            pdecFromApi[0].pour6 * december.price6 +
            pdecFromApi[0].pour7 * december.price7 +
            pdecFromApi[0].pour8 * december.price8 +
            pdecFromApi[0].pour9 * december.price9;
          this.setState({ evdec: xEV });
          this.setState({ comdec: december.generalcomments });
          return {
            EV: xEV,
            price1: december.price1,
            price2: december.price2,
            price3: december.price3,
            price4: december.price4,
            price5: december.price5,
            price6: december.price6,
            price7: december.price7,
            price8: december.price8,
            price9: december.price9,
            lemedian: december.lemedian,
            dateforecast: this.convert_to_utc(new Date(december.dateforecast)),
            specificcomments: december.specificcomments,
            generalcomments: december.generalcomments,
          };
        });
        this.setState({
          decembers: [].concat(decemberFromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    fetch("/api/menji/recentdauser/" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let recentFromApi = data.map((recent) => {
          //this.setState({ evdec: xEV });
          //this.setState({ comdec: recent.generalcomments });
          return {
            price1: recent.detail.price1 * 100,
            price2: recent.detail.price2 * 100,
            price3: recent.detail.price3 * 100,
            price4: recent.detail.price4 * 100,
            price5: recent.detail.price5 * 100,
            price6: recent.detail.price6 * 100,
            price7: recent.detail.price7 * 100,
            price8: recent.detail.price8 * 100,
            price9: recent.detail.price9 * 100,
            lemois: recent.detail.mois,
          };
        });
        this.setState({
          recents: [].concat(recentFromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ donnees1 });
  }
  render() {
    const renderSeptember = (septemberFromApi) => {
      return (
        <tr key={septemberFromApi.id}>
          <td align="center"><b>${septemberFromApi.EV}/oz</b>
          {"  "}
          {septemberFromApi.dateforecast}
          </td>
          <td align="center">{septemberFromApi.price1 * 100}%</td>
          <td align="center">{septemberFromApi.price2 * 100}%</td>
          <td align="center">{septemberFromApi.price3 * 100}%</td>
          <td align="center">{septemberFromApi.price4 * 100}%</td>
          <td align="center">{septemberFromApi.price5 * 100}%</td>
          <td align="center">{septemberFromApi.price6 * 100}%</td>
          <td align="center">{septemberFromApi.price7 * 100}%</td>
          <td align="center">{septemberFromApi.price8 * 100}%</td>
          <td align="center">{septemberFromApi.price9 * 100}%</td>
          <td colSpan="8" align="left">{septemberFromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderOctober = (octoberFromApi) => {
      return (
        <tr key={octoberFromApi.id}>
          <td align="center"><b>${octoberFromApi.EV}/oz</b>
          {"  "}
          {octoberFromApi.dateforecast}
          </td>
          <td align="center">{octoberFromApi.price1 * 100}%</td>
          <td align="center">{octoberFromApi.price2 * 100}%</td>
          <td align="center">{octoberFromApi.price3 * 100}%</td>
          <td align="center">{octoberFromApi.price4 * 100}%</td>
          <td align="center">{octoberFromApi.price5 * 100}%</td>
          <td align="center">{octoberFromApi.price6 * 100}%</td>
          <td align="center">{octoberFromApi.price7 * 100}%</td>
          <td align="center">{octoberFromApi.price8 * 100}%</td>
          <td align="center">{octoberFromApi.price9 * 100}%</td>
          <td colSpan="8" align="left">{octoberFromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderNovember = (novemberFromApi) => {
      return (
        <tr key={novemberFromApi.id}>
          <td align="center"><b>${novemberFromApi.EV}/oz</b>
          {"  "}
          {novemberFromApi.dateforecast}
          </td>
          <td align="center">{novemberFromApi.price1 * 100}%</td>
          <td align="center">{novemberFromApi.price2 * 100}%</td>
          <td align="center">{novemberFromApi.price3 * 100}%</td>
          <td align="center">{novemberFromApi.price4 * 100}%</td>
          <td align="center">{novemberFromApi.price5 * 100}%</td>
          <td align="center">{novemberFromApi.price6 * 100}%</td>
          <td align="center">{novemberFromApi.price7 * 100}%</td>
          <td align="center">{novemberFromApi.price8 * 100}%</td>
          <td align="center">{novemberFromApi.price9 * 100}%</td>
          <td colSpan="8" align="left">{novemberFromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderDecember = (decemberFromApi) => {
      return (
        <tr key={decemberFromApi.id}>
          <td align="center"><b>${decemberFromApi.EV}/oz</b>
          {"  "}
          {decemberFromApi.dateforecast}
          </td>
          <td align="center">{decemberFromApi.price1 * 100}%</td>
          <td align="center">{decemberFromApi.price2 * 100}%</td>
          <td align="center">{decemberFromApi.price3 * 100}%</td>
          <td align="center">{decemberFromApi.price4 * 100}%</td>
          <td align="center">{decemberFromApi.price5 * 100}%</td>
          <td align="center">{decemberFromApi.price6 * 100}%</td>
          <td align="center">{decemberFromApi.price7 * 100}%</td>
          <td align="center">{decemberFromApi.price8 * 100}%</td>
          <td align="center">{decemberFromApi.price9 * 100}%</td>
          <td colSpan="8" align="left">{decemberFromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderPrixSept = (psepFromApi) => {
      return (
        <tr key={psepFromApi.id}>
          <td align="center"><b>{"Expected Value"}</b></td>
          <td align="center"><b>${psepFromApi.pour1}/oz</b></td>
          <td align="center"><b>${psepFromApi.pour2}/oz</b></td>
          <td align="center"><b>${psepFromApi.pour3}/oz</b></td>
          <td align="center"><b>${psepFromApi.pour4}/oz</b></td>
          <td align="center"><b>${psepFromApi.pour5}/oz</b></td>
          <td align="center"><b>${psepFromApi.pour6}/oz</b></td>
          <td align="center"><b>${psepFromApi.pour7}/oz</b></td>
          <td align="center"><b>${psepFromApi.pour8}/oz</b></td>
          <td align="center"><b>${psepFromApi.pour9}/oz</b></td>
          <td colSpan="8" align="center"><b>{"Justifications"}</b></td>
        </tr>
      );
    };
    const renderPrixOct = (poctFromApi) => {
      return (
        <tr key={poctFromApi.id}>
          <td align="center"><b>{"Expected Value"}</b></td>
          <td align="center"><b>${poctFromApi.pour1}/oz</b></td>
          <td align="center"><b>${poctFromApi.pour2}/oz</b></td>
          <td align="center"><b>${poctFromApi.pour3}/oz</b></td>
          <td align="center"><b>${poctFromApi.pour4}/oz</b></td>
          <td align="center"><b>${poctFromApi.pour5}/oz</b></td>
          <td align="center"><b>${poctFromApi.pour6}/oz</b></td>
          <td align="center"><b>${poctFromApi.pour7}/oz</b></td>
          <td align="center"><b>${poctFromApi.pour8}/oz</b></td>
          <td align="center"><b>${poctFromApi.pour9}/oz</b></td>
          <td colSpan="8" align="center"><b>{"Justifications"}</b></td>
        </tr>
      );
    };
    const renderPrixNov = (pnovFromApi) => {
      return (
        <tr key={pnovFromApi.id}>
          <td align="center"><b>{"Expected Value"}</b></td>
          <td align="center"><b>${pnovFromApi.pour1}/oz</b></td>
          <td align="center"><b>${pnovFromApi.pour2}/oz</b></td>
          <td align="center"><b>${pnovFromApi.pour3}/oz</b></td>
          <td align="center"><b>${pnovFromApi.pour4}/oz</b></td>
          <td align="center"><b>${pnovFromApi.pour5}/oz</b></td>
          <td align="center"><b>${pnovFromApi.pour6}/oz</b></td>
          <td align="center"><b>${pnovFromApi.pour7}/oz</b></td>
          <td align="center"><b>${pnovFromApi.pour8}/oz</b></td>
          <td align="center"><b>${pnovFromApi.pour9}/oz</b></td>
          <td colSpan="8" align="center"><b>{"Justifications"}</b></td>
        </tr>
      );
    };
    const renderPrixDec = (pdecFromApi) => {
      return (
        <tr key={pdecFromApi.id}>
          <td align="center"><b>{"Expected Value"}</b></td>
          <td align="center"><b>${pdecFromApi.pour1}/oz</b></td>
          <td align="center"><b>${pdecFromApi.pour2}/oz</b></td>
          <td align="center"><b>${pdecFromApi.pour3}/oz</b></td>
          <td align="center"><b>${pdecFromApi.pour4}/oz</b></td>
          <td align="center"><b>${pdecFromApi.pour5}/oz</b></td>
          <td align="center"><b>${pdecFromApi.pour6}/oz</b></td>
          <td align="center"><b>${pdecFromApi.pour7}/oz</b></td>
          <td align="center"><b>${pdecFromApi.pour8}/oz</b></td>
          <td align="center"><b>${pdecFromApi.pour9}/oz</b></td>
          <td colSpan="8" align="center"><b>{"Justifications"}</b></td>
        </tr>
      );
    };
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td colSpan="6" align="center">
              <b>Most Recent Gold Forecasts - Expected Value</b>
              </td>
            </tr>
            <tr>
              <td align="center"><b>Participant</b></td>
              <td align="center"><b>September 2020</b></td>
              <td align="center"><b>October 2020</b></td>
              <td align="center"><b>November 2020</b></td>
              <td align="center"><b>December 2020</b></td>
            </tr>
            <tr>
              <td align="center">
                <span className="label label-primary"></span>
                <select
                  className=""
                  value={this.state.user}
                  onChange={(e) => {
                    this.setState({
                      user: e.target.value,
                      validationError:
                        e.target.value === "" ? "Choose a participant" : "",
                    });
                    this.fillprices(e.target.value, "Gold");
                  }}
                >
                  {this.state.users.map((user) => (
                    <option key={user.value} value={user.value}>
                      {user.display}
                    </option>
                  ))}
                </select>
              </td>
              <td align="center"><b>${this.state.evsep}/oz</b></td>
              <td align="center"><b>${this.state.evoct}/oz</b></td>
              <td align="center"><b>${this.state.evnov}/oz</b></td>
              <td align="center"><b>${this.state.evdec}/oz</b></td>
            </tr>
            <tr>
            <td rowSpan="12" colSpan="6" width="60%" align="center">
                <GraphPartGold
                  mweji={this.state.recents}
                  mweji1={this.state.prixsept}
                />
              </td>
            </tr>
            </tbody>
        </table>
      <table className="table table-bordered">
        <tbody>
        <tr><td align="center"><b>General Comments</b></td></tr>
        <tr><td align="left"><b>September:</b> {this.state.comsep}</td></tr>
        <tr><td align="left"><b>October:</b> {this.state.comoct}</td></tr>
        <tr><td align="left"><b>November:</b> {this.state.comnov}</td></tr>
        <tr><td align="left"><b>December:</b> {this.state.comdec}</td></tr>
          </tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr><td align="center" colSpan="18"><b>Forecasts - September 2020</b></td></tr>
            {this.state.prixsept.map(renderPrixSept)}
          </thead>
          <tbody>{this.state.septembers.map(renderSeptember)}</tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr><td align="center" colSpan="18"><b>Forecasts - October 2020</b></td></tr>
            {this.state.prixoct.map(renderPrixOct)}
          </thead>
          <tbody>{this.state.octobers.map(renderOctober)}</tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr><td align="center" colSpan="18"><b>Forecasts - November 2020</b></td></tr>
            {this.state.prixnov.map(renderPrixNov)}
          </thead>
          <tbody>{this.state.novembers.map(renderNovember)}</tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr><td align="center" colSpan="18"><b>Forecasts - December 2020</b></td></tr>
            {this.state.prixdec.map(renderPrixDec)}
          </thead>
          <tbody>{this.state.decembers.map(renderDecember)}</tbody>
        </table>
      </div>
    );
  }
}

GPartFcast.propTypes = {
  //logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(GPartFcast);
