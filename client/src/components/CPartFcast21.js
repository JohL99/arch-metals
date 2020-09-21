import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GraphPartCopper from "./GraphPartCopper";
class CPartFcast21 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      users: [],
      septembers20: [],
      octobers20: [],
      novembers20: [],
      decembers20: [],
      marchs21: [],
      junes21: [],
      septembers21: [],
      decembers21: [],
      recents: [],
      prixsept20: [],
      prixoct20: [],
      prixnov20: [],
      prixdec20: [],
      prixsept21: [],
      prixoct21: [],
      prixnov21: [],
      prixdec21: [],
      donnees1: [],
      evsep20: "",
      evoct20: "",
      evnov20: "",
      evdec20: "",
      evmar21: "",
      evjun21: "",
      evsep21: "",
      evdec21: "",
      comsep20: "",
      comoct20: "",
      comnov20: "",
      comdec20: "",
      commar21: "",
      comjun21: "",
      comsep21: "",
      comdec21: "",
    };
    window.onbeforeunload = function () {
      window.scrollTo(0,0);
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
    fetch("/api/users/tous/" + "Copper" + "&Copper")
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
    let pmar21FromApi = {};
    let pjun21FromApi = {};
    let psep21FromApi = {};
    let pdec21FromApi = {};
    var donnees1 = [];
    fetch("/api/beyi/commois/" + "March 2021" + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        pmar21FromApi = data.map((mutengo) => {
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
        this.setState({ prixmar21: [].concat(pmar21FromApi) });
      })
      .catch((error) => {
        console.log(error);
      });
    fetch("/api/beyi/commois/" + "June 2021" + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        pjun21FromApi = data.map((mutengo) => {
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
          prixjun21: [].concat(pjun21FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    fetch("/api/beyi/commois/" + "September 2021" + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        psep21FromApi = data.map((mutengo) => {
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
          prixsep21: [].concat(psep21FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    fetch("/api/beyi/commois/" + "December 2021" + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        pdec21FromApi = data.map((mutengo) => {
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
          prixdec21: [].concat(pdec21FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    let averif = 0;
    fetch("/api/menji/userd/March 2021&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let march21FromApi = data.map((march21) => {
          let xEV =
            pmar21FromApi[0].pour1 * march21.price1 +
            pmar21FromApi[0].pour2 * march21.price2 +
            pmar21FromApi[0].pour3 * march21.price3 +
            pmar21FromApi[0].pour4 * march21.price4 +
            pmar21FromApi[0].pour5 * march21.price5 +
            pmar21FromApi[0].pour6 * march21.price6 +
            pmar21FromApi[0].pour7 * march21.price7 +
            pmar21FromApi[0].pour8 * march21.price8 +
            pmar21FromApi[0].pour9 * march21.price9;
          this.setState({ evmar21: xEV });
          this.setState({ commar21: march21.generalcomments });

          return {
            EV: xEV,
            price1: march21.price1,
            price2: march21.price2,
            price3: march21.price3,
            price4: march21.price4,
            price5: march21.price5,
            price6: march21.price6,
            price7: march21.price7,
            price8: march21.price8,
            price9: march21.price9,
            lemedian: march21.lemedian,
            dateforecast: this.convert_to_utc(new Date(march21.dateforecast)),
            specificcomments: march21.specificcomments,
            generalcomments: march21.generalcomments,
          };
        });
        this.setState({
            marchs21: [].concat(march21FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    averif = 0;
    fetch("/api/menji/userd/June 2021&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let june21FromApi = data.map((june21) => {
          let xEV =
            pjun21FromApi[0].pour1 * june21.price1 +
            pjun21FromApi[0].pour2 * june21.price2 +
            pjun21FromApi[0].pour3 * june21.price3 +
            pjun21FromApi[0].pour4 * june21.price4 +
            pjun21FromApi[0].pour5 * june21.price5 +
            pjun21FromApi[0].pour6 * june21.price6 +
            pjun21FromApi[0].pour7 * june21.price7 +
            pjun21FromApi[0].pour8 * june21.price8 +
            pjun21FromApi[0].pour9 * june21.price9;
          this.setState({ evjun21: xEV });
          this.setState({ comjun21: june21.generalcomments });
          return {
            EV: xEV,
            price1: june21.price1,
            price2: june21.price2,
            price3: june21.price3,
            price4: june21.price4,
            price5: june21.price5,
            price6: june21.price6,
            price7: june21.price7,
            price8: june21.price8,
            price9: june21.price9,
            lemedian: june21.lemedian,
            dateforecast: this.convert_to_utc(new Date(june21.dateforecast)),
            specificcomments: june21.specificcomments,
            generalcomments: june21.generalcomments,
          };
        });
        this.setState({
            junes21: [].concat(june21FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    averif = 0;
    fetch("/api/menji/userd/September 2021&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let september21FromApi = data.map((september21) => {
          let xEV =
            psep21FromApi[0].pour1 * september21.price1 +
            psep21FromApi[0].pour2 * september21.price2 +
            psep21FromApi[0].pour3 * september21.price3 +
            psep21FromApi[0].pour4 * september21.price4 +
            psep21FromApi[0].pour5 * september21.price5 +
            psep21FromApi[0].pour6 * september21.price6 +
            psep21FromApi[0].pour7 * september21.price7 +
            psep21FromApi[0].pour8 * september21.price8 +
            psep21FromApi[0].pour9 * september21.price9;
          this.setState({ evsep21: xEV });
          this.setState({ comsep21: september21.generalcomments });
          return {
            EV: xEV,
            price1: september21.price1,
            price2: september21.price2,
            price3: september21.price3,
            price4: september21.price4,
            price5: september21.price5,
            price6: september21.price6,
            price7: september21.price7,
            price8: september21.price8,
            price9: september21.price9,
            lemedian: september21.lemedian,
            dateforecast: this.convert_to_utc(new Date(september21.dateforecast)),
            specificcomments: september21.specificcomments,
            generalcomments: september21.generalcomments,
          };
        });
        this.setState({
            septembers21: [].concat(september21FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    averif = 0;
    fetch("/api/menji/userd/December 2021&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let december21FromApi = data.map((december21) => {
          let xEV =
            pdec21FromApi[0].pour1 * december21.price1 +
            pdec21FromApi[0].pour2 * december21.price2 +
            pdec21FromApi[0].pour3 * december21.price3 +
            pdec21FromApi[0].pour4 * december21.price4 +
            pdec21FromApi[0].pour5 * december21.price5 +
            pdec21FromApi[0].pour6 * december21.price6 +
            pdec21FromApi[0].pour7 * december21.price7 +
            pdec21FromApi[0].pour8 * december21.price8 +
            pdec21FromApi[0].pour9 * december21.price9;
          this.setState({ evdec21: xEV });
          this.setState({ comdec21: december21.generalcomments });
          return {
            EV: xEV,
            price1: december21.price1,
            price2: december21.price2,
            price3: december21.price3,
            price4: december21.price4,
            price5: december21.price5,
            price6: december21.price6,
            price7: december21.price7,
            price8: december21.price8,
            price9: december21.price9,
            lemedian: december21.lemedian,
            dateforecast: this.convert_to_utc(new Date(december21.dateforecast)),
            specificcomments: december21.specificcomments,
            generalcomments: december21.generalcomments,
          };
        });
        this.setState({
          decembers21: [].concat(december21FromApi),
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
          //this.setState({ evdec21: xEV });
          //this.setState({ comdec21: recent.generalcomments });
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
    const renderMarch21 = (march21FromApi) => {
      return (
        <tr key={march21FromApi.id}>
          <td align="center"><b>${september21FromApi.EV}/mt</b>
          {"  "}
          {septemberFromApi.dateforecast}
          </td>
          <td align="center">{march21FromApi.price1 * 100}%</td>
          <td align="center">{march21FromApi.price2 * 100}%</td>
          <td align="center">{march21FromApi.price3 * 100}%</td>
          <td align="center">{march21FromApi.price4 * 100}%</td>
          <td align="center">{march21FromApi.price5 * 100}%</td>
          <td align="center">{march21FromApi.price6 * 100}%</td>
          <td align="center">{march21FromApi.price7 * 100}%</td>
          <td align="center">{march21FromApi.price8 * 100}%</td>
          <td align="center">{march21FromApi.price9 * 100}%</td>
          <td colSpan="8" align="left">{march21FromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderJune21 = (june21FromApi) => {
      return (
        <tr key={june21FromApi.id}>
          <td align="center"><b>${june21FromApi.EV}/mt</b>
          {"  "}
          {june21FromApi.dateforecast}
          </td>
          <td align="center">{june21FromApi.price1 * 100}%</td>
          <td align="center">{june21FromApi.price2 * 100}%</td>
          <td align="center">{june21FromApi.price3 * 100}%</td>
          <td align="center">{june21FromApi.price4 * 100}%</td>
          <td align="center">{june21FromApi.price5 * 100}%</td>
          <td align="center">{june21FromApi.price6 * 100}%</td>
          <td align="center">{june21FromApi.price7 * 100}%</td>
          <td align="center">{june21FromApi.price8 * 100}%</td>
          <td align="center">{june21FromApi.price9 * 100}%</td>
          <td colSpan="8" align="left">{june21FromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderSeptember21 = (september21FromApi) => {
      return (
        <tr key={september21FromApi.id}>
          <td align="center"><b>${september21FromApi.EV}/mt</b>
          {"  "}
          {september21FromApi.dateforecast}
          </td>
          <td align="center">{september21FromApi.price1 * 100}%</td>
          <td align="center">{september21FromApi.price2 * 100}%</td>
          <td align="center">{september21FromApi.price3 * 100}%</td>
          <td align="center">{september21FromApi.price4 * 100}%</td>
          <td align="center">{september21FromApi.price5 * 100}%</td>
          <td align="center">{september21FromApi.price6 * 100}%</td>
          <td align="center">{september21FromApi.price7 * 100}%</td>
          <td align="center">{september21FromApi.price8 * 100}%</td>
          <td align="center">{september21FromApi.price9 * 100}%</td>
          <td colSpan="8" align="left">{september21FromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderDecember21 = (december21FromApi) => {
      return (
        <tr key={december21FromApi.id}>
          <td align="center"><b>${december21FromApi.EV}/mt</b>
          {"  "}
          {december21FromApi.dateforecast}
          </td>
          <td align="center">{december21FromApi.price1 * 100}%</td>
          <td align="center">{december21FromApi.price2 * 100}%</td>
          <td align="center">{december21FromApi.price3 * 100}%</td>
          <td align="center">{december21FromApi.price4 * 100}%</td>
          <td align="center">{december21FromApi.price5 * 100}%</td>
          <td align="center">{december21FromApi.price6 * 100}%</td>
          <td align="center">{december21FromApi.price7 * 100}%</td>
          <td align="center">{december21FromApi.price8 * 100}%</td>
          <td align="center">{december21FromApi.price9 * 100}%</td>
          <td colSpan="8" align="left">{december21FromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderPrixMar21 = (pmar21FromApi) => {
      return (
        <tr key={pmar21FromApi.id}>
          <td align="center"><b>{"Expected Value"}</b></td>
          <td align="center"><b>${pmar21FromApi.pour1}/mt</b></td>
          <td align="center"><b>${pmar21FromApi.pour2}/mt</b></td>
          <td align="center"><b>${pmar21FromApi.pour3}/mt</b></td>
          <td align="center"><b>${pmar21FromApi.pour4}/mt</b></td>
          <td align="center"><b>${pmar21FromApi.pour5}/mt</b></td>
          <td align="center"><b>${pmar21FromApi.pour6}/mt</b></td>
          <td align="center"><b>${pmar21FromApi.pour7}/mt</b></td>
          <td align="center"><b>${pmar21FromApi.pour8}/mt</b></td>
          <td align="center"><b>${pmar21FromApi.pour9}/mt</b></td>
          <td colSpan="8" align="center"><b>{"Justifications"}</b></td>
        </tr>
      );
    };
    const renderPrixJun21 = (pjun21FromApi) => {
      return (
        <tr key={pjun21FromApi.id}>
          <td align="center"><b>{"Expected Value"}</b></td>
          <td align="center"><b>${pjun21FromApi.pour1}/mt</b></td>
          <td align="center"><b>${pjun21FromApi.pour2}/mt</b></td>
          <td align="center"><b>${pjun21FromApi.pour3}/mt</b></td>
          <td align="center"><b>${pjun21FromApi.pour4}/mt</b></td>
          <td align="center"><b>${pjun21FromApi.pour5}/mt</b></td>
          <td align="center"><b>${pjun21FromApi.pour6}/mt</b></td>
          <td align="center"><b>${pjun21FromApi.pour7}/mt</b></td>
          <td align="center"><b>${pjun21FromApi.pour8}/mt</b></td>
          <td align="center"><b>${pjun21FromApi.pour9}/mt</b></td>
          <td colSpan="8" align="center"><b>{"Justifications"}</b></td>
        </tr>
      );
    };
    const renderPrixSept21 = (psep21FromApi) => {
      return (
        <tr key={psep21FromApi.id}>
          <td align="center"><b>{"Expected Value"}</b></td>
          <td align="center"><b>${psep21FromApi.pour1}/mt</b></td>
          <td align="center"><b>${psep21FromApi.pour2}/mt</b></td>
          <td align="center"><b>${psep21FromApi.pour3}/mt</b></td>
          <td align="center"><b>${psep21FromApi.pour4}/mt</b></td>
          <td align="center"><b>${psep21FromApi.pour5}/mt</b></td>
          <td align="center"><b>${psep21FromApi.pour6}/mt</b></td>
          <td align="center"><b>${psep21FromApi.pour7}/mt</b></td>
          <td align="center"><b>${psep21FromApi.pour8}/mt</b></td>
          <td align="center"><b>${psep21FromApi.pour9}/mt</b></td>
          <td colSpan="8" align="center"><b>{"Justifications"}</b></td>
        </tr>
      );
    };
    const renderPrixDec21 = (pdec21FromApi) => {
      return (
        <tr key={pdec21FromApi.id}>
          <td align="center"><b>{"Expected Value"}</b></td>
          <td align="center"><b>${pdec21FromApi.pour1}/mt</b></td>
          <td align="center"><b>${pdec21FromApi.pour2}/mt</b></td>
          <td align="center"><b>${pdec21FromApi.pour3}/mt</b></td>
          <td align="center"><b>${pdec21FromApi.pour4}/mt</b></td>
          <td align="center"><b>${pdec21FromApi.pour5}/mt</b></td>
          <td align="center"><b>${pdec21FromApi.pour6}/mt</b></td>
          <td align="center"><b>${pdec21FromApi.pour7}/mt</b></td>
          <td align="center"><b>${pdec21FromApi.pour8}/mt</b></td>
          <td align="center"><b>${pdec21FromApi.pour9}/mt</b></td>
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
              <b>Most Recent Copper Forecasts - Expected Value</b>
              </td>
            </tr>
            <tr>
              <td align="center"><b>Participant</b></td>
              <td align="center"><b>March 2021</b></td>
              <td align="center"><b>June 2021</b></td>
              <td align="center"><b>September 2021</b></td>
              <td align="center"><b>December 2021</b></td>
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
                    this.fillprices(e.target.value, "Copper");
                  }}
                >
                  {this.state.users.map((user) => (
                    <option key={user.value} value={user.value}>
                      {user.display}
                    </option>
                  ))}
                </select>
              </td>
              <td align="center"><b>${this.state.evmar21}/mt</b></td>
              <td align="center"><b>${this.state.evjun21}/mt</b></td>
              <td align="center"><b>${this.state.evsep21}/mt</b></td>
              <td align="center"><b>${this.state.evdec21}/mt</b></td>
            </tr>
            <tr>
              <td rowSpan="12" colSpan="6" width="60%" align="center">
                <GraphPartCopper
                  mweji={this.state.recents}
                  mweji1={this.state.prixmar21}
                />
              </td>
            </tr>
            </tbody>
        </table>
      <table className="table table-bordered">
        <tbody>
        <tr><td align="center"><b>General Comments</b></td></tr>
        <tr><td align="left"><b>March 2021: </b>{this.state.commar21}</td></tr>
        <tr><td align="left"><b>June 2021: </b>{this.state.comjun21}</td></tr>
        <tr><td align="left"><b>September 2021: </b>{this.state.comsep21}</td></tr>
        <tr><td align="left"><b>December 2021: </b>{this.state.comdec21}</td></tr>
          </tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr><td align="center" colSpan="18"><b>Forecasts - March 2021</b></td></tr>
            {this.state.prixmar21.map(renderPrixMar21)}
          </thead>
          <tbody>{this.state.marchs21.map(renderMarch21)}</tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr><td align="center" colSpan="18"><b>Forecasts - June 2021</b></td></tr>
            {this.state.prixoct.map(renderPrixJun21)}
          </thead>
          <tbody>{this.state.junes21.map(renderJune21)}</tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr><td align="center" colSpan="18"><b>Forecasts - September 2021</b></td></tr>
            {this.state.prixsept21.map(renderPrixSept21)}
          </thead>
          <tbody>{this.state.septembers21.map(renderSeptember21)}</tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr><td align="center" colSpan="18"><b>Forecasts - December 2021</b></td></tr>
            {this.state.prixdec21.map(renderPrixDec21)}
          </thead>
          <tbody>{this.state.decembers21.map(renderDecember21)}</tbody>
        </table>
      </div>
    );
  }
}

CPartFcast21.propTypes = {
  //logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(CPartFcast21);
