import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MonthForecastGold from "./MonthForecastGold";
import GraphGold from "./GraphGold";
import isEmpty from "../validation/is-empty";
class GoldInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commodity: "",
      mois: "",
      user: "",
      priceAvr: "",
      price1: "",
      price2: "",
      price3: "",
      price4: "",
      price5: "",
      price6: "",
      price7: "",
      price8: "",
      price9: "",
      lamoyenne: "",
      lemedian: "",
      percent1: "",
      percent2: "",
      percent3: "",
      percent4: "",
      percent5: "",
      percent6: "",
      percent7: "",
      percent8: "",
      percent9: "",
      justif: "",
      generalcomments: "",
      specificcomments: "",
      filecomments: "",
      comments: "",
      totpercent: "",
      myFormRef: "",
      currentmonth: "",
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
      foreprices: [8],
      fichier: null,
      fraicheur: 0,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidUpdate() {
    if (this.state.fraicheur !== 0) {
      let cemois = this.state.mois;
      this.setState({ mois: cemois });
      this.setState({ fraicheur: 0 });
    }
  }
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  onSubmit(e) {
    if (
      isEmpty(this.state.percent1) &&
      isEmpty(this.state.percent2) &&
      isEmpty(this.state.percent3) &&
      isEmpty(this.state.percent4) &&
      isEmpty(this.state.percent5) &&
      isEmpty(this.state.percent6) &&
      isEmpty(this.state.percent7) &&
      isEmpty(this.state.percent8) &&
      isEmpty(this.state.percent9)
    ) {
      return;
    }
    var date1 = new Date();
    var date2 = date1.toLocaleString();
    const { user } = this.props.auth;
    const formData = new FormData();
    e.preventDefault();
    this.setState({ fraicheur: 0 });
    //****AJOUT MEDIAN */
    let Max = Math.max(
      this.state.percent1,
      this.state.percent2,
      this.state.percent3,
      this.state.percent4,
      this.state.percent5,
      this.state.percent6,
      this.state.percent7,
      this.state.percent8,
      this.state.percent9
    );
    var LeMedian =0;
    if (Max === this.state.percent1) {LeMedian = this.state.price1;} 
      else if (Max === this.state.percent2) {LeMedian = this.state.price2;} 
      else if (Max === this.state.percent3) {LeMedian = this.state.price3;} 
      else if (Max === this.state.percent4) {LeMedian = this.state.price4;} 
      else if (Max === this.state.percent5) {LeMedian = this.state.price5;} 
      else if (Max === this.state.percent6) {LeMedian = this.state.price6;} 
      else if (Max === this.state.percent7) {LeMedian = this.state.price7;} 
      else if (Max === this.state.percent8) {LeMedian = this.state.price8;} 
      else if (Max === this.state.percent9) {LeMedian = this.state.price9;}
    this.setState({ lemedian: LeMedian });
    //**** AJOUT MEDIAN */
    const newEntry = {
      user: user.name,
      commodity: "Gold", //this.state.commodity,
      mois: this.state.mois,
      dateforecast: new Date(),
      //priceAvr: this.state.priceAvr,
      price1: this.state.percent1,
      price2: this.state.percent2,
      price3: this.state.percent3,
      price4: this.state.percent4,
      price5: this.state.percent5,
      price6: this.state.percent6,
      price7: this.state.percent7,
      price8: this.state.percent8,
      price9: this.state.percent9,
      lemedian: LeMedian,
      lamoyenne: this.state.lamoyenne,
      specificcomments: this.state.specificcomments,
      generalcomments: this.state.generalcomments,
      documentShared: "",
      filecomments: this.state.filecomments,
    };
    //this.props.saveInput(newEntry, this.props.history);
    axios
      .post("/api/menji/sauvegarde", newEntry)
      .then((res) => {
        //console.log(res.data);
      })
      .catch((err) => this.setState({ errors: err.response.data }));
    this.setState({ percent1: "" });
    this.setState({ percent2: "" });
    this.setState({ percent3: "" });
    this.setState({ percent4: "" });
    this.setState({ percent5: "" });
    this.setState({ percent6: "" });
    this.setState({ percent7: "" });
    this.setState({ percent8: "" });
    this.setState({ percent9: "" });
    this.setState({ totpercent: "" });
    this.setState({ specificcomments: "" });
    this.setState({ generalcomments: "" });
    this.setState({ filecomments: "" });
    let cemois = this.state.mois;
    this.setState({ mois: cemois });
    this.setState({ fraicheur: 1 });
    //upload du fichier
    formData.append("myfile", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("/api/file/upload", formData, config)
      .then((response) => {
        // alert("The file is successfully uploaded");
      })
      .catch((error) => {});
  }
  fillPrices(sanza) {
    this.setState({ price1: "" });
    this.setState({ price2: "" });
    this.setState({ price3: "" });
    this.setState({ price4: "" });
    this.setState({ price5: "" });
    this.setState({ price6: "" });
    this.setState({ price7: "" });
    this.setState({ price8: "" });
    this.setState({ price9: "" });
    fetch("/api/beyi/commois/" + sanza + "&Gold")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        let talo = data.map((mutengo) => {
          //put it in an array
          this.setState({ price1: mutengo.floorprice + mutengo.constant1 * 0 });
          this.setState({ price2: mutengo.floorprice + mutengo.constant1 * 1 });
          this.setState({ price3: mutengo.floorprice + mutengo.constant1 * 2 });
          this.setState({ price4: mutengo.floorprice + mutengo.constant1 * 3 });
          this.setState({ price5: mutengo.floorprice + mutengo.constant1 * 4 });
          this.setState({ price6: mutengo.floorprice + mutengo.constant1 * 5 });
          this.setState({ price7: mutengo.floorprice + mutengo.constant1 * 6 });
          this.setState({ price8: mutengo.floorprice + mutengo.constant1 * 7 });
          this.setState({ price9: mutengo.floorprice + mutengo.constant1 * 8 });
          return {
            id: mutengo._id,
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ mois: sanza });
  }
  CalculPondere(vraipourcent, indice) {
    this.setState({ priceAvr: "" });
    let Moyenne =
      this.state.price1 * (indice === 1 ? vraipourcent : this.state.percent1) +
      this.state.price2 * (indice === 2 ? vraipourcent : this.state.percent2) +
      this.state.price3 * (indice === 3 ? vraipourcent : this.state.percent3) +
      this.state.price4 * (indice === 4 ? vraipourcent : this.state.percent4) +
      this.state.price5 * (indice === 5 ? vraipourcent : this.state.percent5) +
      this.state.price6 * (indice === 6 ? vraipourcent : this.state.percent6) +
      this.state.price7 * (indice === 7 ? vraipourcent : this.state.percent7) +
      this.state.price8 * (indice === 8 ? vraipourcent : this.state.percent8) +
      this.state.price9 * (indice === 9 ? vraipourcent : this.state.percent9);
    this.setState({ priceAvr: Moyenne });
    this.setState({ lamoyenne: Moyenne });
  }
  cancelCourse = () => {
    this.myFormRef.reset();
  };
  TotalPourcent(vraipourcent1, indice1) {
    this.setState({ totpercent: "" });
    let tot =
      (indice1 === 1 ? vraipourcent1 : this.state.percent1) * 100 +
      (indice1 === 2 ? vraipourcent1 : this.state.percent2) * 100 +
      (indice1 === 3 ? vraipourcent1 : this.state.percent3) * 100 +
      (indice1 === 4 ? vraipourcent1 : this.state.percent4) * 100 +
      (indice1 === 5 ? vraipourcent1 : this.state.percent5) * 100 +
      (indice1 === 6 ? vraipourcent1 : this.state.percent6) * 100 +
      (indice1 === 7 ? vraipourcent1 : this.state.percent7) * 100 +
      (indice1 === 8 ? vraipourcent1 : this.state.percent8) * 100 +
      (indice1 === 9 ? vraipourcent1 : this.state.percent9) * 100;
    this.setState({ totpercent: tot });
  }
  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <form
          noValidate
          onSubmit={this.onSubmit}
          ref={(el) => (this.myFormRef = el)}
        >
          <table className="table table-bordered" style={{ width: "75%" }}>
            <tbody>
              <tr>
                <td colSpan="12" align="center">
                  <b>Consensus Metals Panel - Gold Forecast Inputs</b>
                </td>
              </tr>
              <tr>
                <td className="first" align="center">
                  <label>
                    <b>Metal</b>
                  </label>
                </td>
                <td align="center">
                  <b>Gold</b>
                </td>
                <td
                  className="instruction"
                  rowSpan="3"
                  colSpan="11"
                  align="left"
                >
                  <b>Instructions</b>:{" "}
                  <i>
                    <td align="justify">
                      Please first select a month on the <b>Left</b> for which you want to make a gold price forecast. Once the month has been choosen, please select the expected probability you want to assign to the indicated price baskets, such that the total probabilities sum to 100%. A total of less or more than 100% will result in a Null forecast. It would be appreciated if you could also provide a brief indication of the basis for your gold price forecast in the text box below the forecast probability input table. Based on the combined forecasts of all consensus panel participants, a consensus gold price forecast will been calculated. In the general comments section please comment on the evolving consensus gold price forecast relative to your views and that of other participants. You can also make comments about other participant’s views in the general comments section. <b>A graph and table with the most recent gold forecasts is provided below, if you wish to review these before submitting your forecast.</b>
                    </td>
                  </i>
                </td>
              </tr>
              <tr>
                <td className="first" align="center">
                  <label>
                    <b>Month</b>
                  </label>
                </td>
                <td align="center">
                  <select
                    id="mois"
                    name="month"
                    value={this.state.mois}
                    onChange={(e) => {
                      this.setState({
                        mois: e.target.value,
                        validationError:
                          e.target.value === "" ? "Select a month" : "",
                      });
                      this.fillPrices(e.target.value);
                    }}
                  >
                    <option value="">Select a month</option>
                    {this.state.months
                      .slice(new Date().getMonth(), 12)
                      .map((lemois, index) => (
                        <option
                          key={index /* lemois.value */}
                          value={lemois.value}
                        >
                          {lemois + " " + new Date().getFullYear()}
                        </option>
                      ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td className="first" align="center">
                  <label>
                    <b>Username</b>
                  </label>
                </td>
                <td align="center">
                  <h3>{user.name}</h3>
                </td>
              </tr>
              <tr>
                <td className="first" align="center"><b>Expected Price</b></td>
                <td id="avrg" align="center"><b>${this.state.priceAvr}/oz</b></td>
                <td align="center">{"  "}</td>
                <td id="" align="center"><b>${this.state.price1}/oz</b></td>
                <td id="" align="center"><b>${this.state.price2}/oz</b></td>
                <td id="" align="center"><b>${this.state.price3}/oz</b></td>
                <td id="" align="center"><b>${this.state.price4}/oz</b></td>
                <td id="" align="center"><b>${this.state.price5}/oz</b></td>
                <td id="" align="center"><b>${this.state.price6}/oz</b></td>
                <td id="" align="center"><b>${this.state.price7}/oz</b></td>
                <td id="" align="center"><b>${this.state.price8}/oz</b></td>
                <td id="" align="center"><b>${this.state.price9}/oz</b></td>
              </tr>
              <tr>
                <td className="first" align="center"><b>Expected Probability</b></td>
                <td align="center"><i>NB: the total must sum to 100%</i></td>
                <td id="sum_percent" align="center">{this.state.totpercent}%</td>
                <td id="" align="center">
                  <select
                    className="percent"
                    name="percent1"
                    type="number"
                    value={this.state.percent1}
                    onChange={(e) => {
                      this.setState({
                        percent1: e.target.value,
                        validationError:
                          e.target.value === "0.01"
                            ? "Choose a percentage"
                            : "",
                      });
                      this.CalculPondere(e.target.value, 1);
                      this.TotalPourcent(e.target.value, 1);
                    }}
                  >
                    <option value="0.01">{" "}??%</option>
                    <option value="0.0">{"  "}0%</option>
                    <option value="0.1">{" "}10%</option>
                    <option value="0.2">{" "}20%</option>
                    <option value="0.3">{" "}30%</option>
                    <option value="0.4">{" "}40%</option>
                    <option value="0.5">{" "}50%</option>
                    <option value="0.6">{" "}60%</option>
                    <option value="0.7">{" "}70%</option>
                    <option value="0.8">{" "}80%</option>
                    <option value="0.9">{" "}90%</option>
                    <option value="1.0">100%</option>
                  </select>
                </td>
                <td id="" align="center">
                  <select
                    className="percent"
                    name="percent2"
                    type="number"
                    value={this.state.percent2}
                    onChange={(e) => {
                      this.setState({
                        percent2: e.target.value,
                        validationError:
                          e.target.value === "0.01"
                            ? "Choose a percentage"
                            : "",
                      });
                      this.CalculPondere(e.target.value, 2);
                      this.TotalPourcent(e.target.value, 2);
                    }}
                  >
                    <option value="0.01">{" "}??%</option>
                    <option value="0.0">{"  "}0%</option>
                    <option value="0.1">{" "}10%</option>
                    <option value="0.2">{" "}20%</option>
                    <option value="0.3">{" "}30%</option>
                    <option value="0.4">{" "}40%</option>
                    <option value="0.5">{" "}50%</option>
                    <option value="0.6">{" "}60%</option>
                    <option value="0.7">{" "}70%</option>
                    <option value="0.8">{" "}80%</option>
                    <option value="0.9">{" "}90%</option>
                    <option value="1.0">100%</option>
                  </select>
                </td>
                <td id="" align="center">
                  <select
                    className="percent"
                    name="percent3"
                    type="number"
                    value={this.state.percent3}
                    onChange={(e) => {
                      this.setState({
                        percent3: e.target.value,
                        validationError:
                          e.target.value === "0.01"
                            ? "Choose a percentage"
                            : "",
                      });
                      this.CalculPondere(e.target.value, 3);
                      this.TotalPourcent(e.target.value, 3);
                    }}
                  >
                    <option value="0.01">{" "}??%</option>
                    <option value="0.0">{"  "}0%</option>
                    <option value="0.1">{" "}10%</option>
                    <option value="0.2">{" "}20%</option>
                    <option value="0.3">{" "}30%</option>
                    <option value="0.4">{" "}40%</option>
                    <option value="0.5">{" "}50%</option>
                    <option value="0.6">{" "}60%</option>
                    <option value="0.7">{" "}70%</option>
                    <option value="0.8">{" "}80%</option>
                    <option value="0.9">{" "}90%</option>
                    <option value="1.0">100%</option>
                  </select>
                </td>
                <td id="" align="center">
                  <select
                    className="percent"
                    name="percent4"
                    type="number"
                    value={this.state.percent4}
                    onChange={(e) => {
                      this.setState({
                        percent4: e.target.value,
                        validationError:
                          e.target.value === "0.01"
                            ? "Choose a percentage"
                            : "",
                      });
                      this.CalculPondere(e.target.value, 4);
                      this.TotalPourcent(e.target.value, 4);
                    }}
                  >
                    <option value="0.01">{" "}??%</option>
                    <option value="0.0">{"  "}0%</option>
                    <option value="0.1">{" "}10%</option>
                    <option value="0.2">{" "}20%</option>
                    <option value="0.3">{" "}30%</option>
                    <option value="0.4">{" "}40%</option>
                    <option value="0.5">{" "}50%</option>
                    <option value="0.6">{" "}60%</option>
                    <option value="0.7">{" "}70%</option>
                    <option value="0.8">{" "}80%</option>
                    <option value="0.9">{" "}90%</option>
                    <option value="1.0">100%</option>
                  </select>
                </td>
                <td id="" align="center">
                  <select
                    className="percent"
                    name="percent5"
                    type="number"
                    value={this.state.percent5}
                    onChange={(e) => {
                      this.setState({
                        percent5: e.target.value,
                        validationError:
                          e.target.value === "0.01"
                            ? "Choose a percentage"
                            : "",
                      });
                      this.CalculPondere(e.target.value, 5);
                      this.TotalPourcent(e.target.value, 5);
                    }}
                  >
                    <option value="0.01">{" "}??%</option>
                    <option value="0.0">{"  "}0%</option>
                    <option value="0.1">{" "}10%</option>
                    <option value="0.2">{" "}20%</option>
                    <option value="0.3">{" "}30%</option>
                    <option value="0.4">{" "}40%</option>
                    <option value="0.5">{" "}50%</option>
                    <option value="0.6">{" "}60%</option>
                    <option value="0.7">{" "}70%</option>
                    <option value="0.8">{" "}80%</option>
                    <option value="0.9">{" "}90%</option>
                    <option value="1.0">100%</option>
                  </select>
                </td>
                <td id="" align="center">
                  <select
                    className="percent"
                    name="percent6"
                    type="number"
                    value={this.state.percent6}
                    onChange={(e) => {
                      this.setState({
                        percent6: e.target.value,
                        validationError:
                          e.target.value === "0.01"
                            ? "Choose a percentage"
                            : "",
                      });
                      this.CalculPondere(e.target.value, 6);
                      this.TotalPourcent(e.target.value, 6);
                    }}
                  >
                    <option value="0.01">{" "}??%</option>
                    <option value="0.0">{"  "}0%</option>
                    <option value="0.1">{" "}10%</option>
                    <option value="0.2">{" "}20%</option>
                    <option value="0.3">{" "}30%</option>
                    <option value="0.4">{" "}40%</option>
                    <option value="0.5">{" "}50%</option>
                    <option value="0.6">{" "}60%</option>
                    <option value="0.7">{" "}70%</option>
                    <option value="0.8">{" "}80%</option>
                    <option value="0.9">{" "}90%</option>
                    <option value="1.0">100%</option>
                  </select>
                </td>
                <td id="" align="center">
                  <select
                    className="percent"
                    name="percent7"
                    type="number"
                    value={this.state.percent7}
                    onChange={(e) => {
                      this.setState({
                        percent7: e.target.value,
                        validationError:
                          e.target.value === "0.01"
                            ? "Choose a percentage"
                            : "",
                      });
                      this.CalculPondere(e.target.value, 7);
                      this.TotalPourcent(e.target.value, 7);
                    }}
                  >
                    <option value="0.01">{" "}??%</option>
                    <option value="0.0">{"  "}0%</option>
                    <option value="0.1">{" "}10%</option>
                    <option value="0.2">{" "}20%</option>
                    <option value="0.3">{" "}30%</option>
                    <option value="0.4">{" "}40%</option>
                    <option value="0.5">{" "}50%</option>
                    <option value="0.6">{" "}60%</option>
                    <option value="0.7">{" "}70%</option>
                    <option value="0.8">{" "}80%</option>
                    <option value="0.9">{" "}90%</option>
                    <option value="1.0">100%</option>
                  </select>
                </td>
                <td id="" align="center">
                  <select
                    className="percent"
                    name="percent8"
                    type="number"
                    value={this.state.percent8}
                    onChange={(e) => {
                      this.setState({
                        percent8: e.target.value,
                        validationError:
                          e.target.value === "0.01"
                            ? "Choose a percentage"
                            : "",
                      });
                      this.CalculPondere(e.target.value, 8);
                      this.TotalPourcent(e.target.value, 8);
                    }}
                  >
                    <option value="0.01">{" "}??%</option>
                    <option value="0.0">{"  "}0%</option>
                    <option value="0.1">{" "}10%</option>
                    <option value="0.2">{" "}20%</option>
                    <option value="0.3">{" "}30%</option>
                    <option value="0.4">{" "}40%</option>
                    <option value="0.5">{" "}50%</option>
                    <option value="0.6">{" "}60%</option>
                    <option value="0.7">{" "}70%</option>
                    <option value="0.8">{" "}80%</option>
                    <option value="0.9">{" "}90%</option>
                    <option value="1.0">100%</option>
                  </select>
                </td>
                <td id="" align="center">
                  <select
                    className="percent"
                    name="percent9"
                    type="number"
                    value={this.state.percent9}
                    onChange={(e) => {
                      this.setState({
                        percent9: e.target.value,
                        validationError:
                          e.target.value === "0.01"
                            ? "Choose a percentage"
                            : "",
                      });
                      this.CalculPondere(e.target.value, 9);
                      this.TotalPourcent(e.target.value, 9);
                    }}
                  >
                    <option value="0.01">{" "}??%</option>
                    <option value="0.0">{"  "}0%</option>
                    <option value="0.1">{" "}10%</option>
                    <option value="0.2">{" "}20%</option>
                    <option value="0.3">{" "}30%</option>
                    <option value="0.4">{" "}40%</option>
                    <option value="0.5">{" "}50%</option>
                    <option value="0.6">{" "}60%</option>
                    <option value="0.7">{" "}70%</option>
                    <option value="0.8">{" "}80%</option>
                    <option value="0.9">{" "}90%</option>
                    <option value="1.0">100%</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="first" align="center">
                  <b>Forecast Justication</b>
                </td>
                <td colSpan="11">
                  <textarea
                    name="specificcomments"
                    isRequired="true"
                    onChange={this.onChange}
                    value={this.state.specificcomments}
                    placeholder="Please briefly explain the basis for your gold price forecast (Max. 300 characters)."
                    rows="4"
                    align="justify"
                    wrap="soft"
                    style={{ width: "100%" }}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td className="first" align="center">
                  <b>General Comments</b>
                </td>
                <td colSpan="11">
                  <textarea
                    name="generalcomments"
                    isRequired="true"
                    onChange={this.onChange}
                    value={this.state.generalcomments}
                    placeholder="If you wish to make any general comments about the consensus gold price forecast or other participant's forecasts please do so here. If you want to share any documents, please paste the relevant website URL here. Please ensure you are permitted to share the document before posting the link (Max. 300 characters)."
                    rows="4"
                    align="justify"
                    wrap="soft"
                    style={{ width: "100%" }}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td className="first" align="center">
                  <b>Submit Forecast</b>
                </td>
                <td align="center">
                  {/*    <button
                  type="button"
                  name="Submit"
                  className="btn btn-info btn-block mt-4"
                >
                  Yes
                </button> */}
                  <input
                    type="submit" formtarget="Your forecast has been submitted"
                    placeholder="YES"
                    className="btn btn-info btn-block mt-4"
                  />
                </td>
                <td colSpan="10" align="left">
                  <i>
                    <td align="justify">
                      {"  "}You can submit forecasts as often as you choose.
                      Please try keep forecasts realistic. Any abnormal or
                      extreme forecasts will impact on the aggregated
                      consensus forecasted gold price.
                    </td>
                  </i>
                </td>
              </tr>
              <tr>
                <td className="first" align="center">
                  <b>Date</b>
                </td>
                <td align="center">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>
                <td colSpan="10" rowSpan="2" align="left">
                  <i>
                    <td align="justify">
                      {"  "}This will be the date and time used to record your
                      gold price forecast. The date and time will also be used
                      in the ranking calculations.
                    </td>
                  </i>
                </td>
              </tr>
              <tr>
                <td className="first" align="center">
                  <b>Time</b>
                </td>
                <td align="center">
                  {new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <tr>
        <td colSpan="18" align="center">
        <div>
          <GraphGold mweji={this.state.mois} />
          <MonthForecastGold mweji={this.state.mois} />
        </div>
        </td>
        </tr>
      </div>
    );
  }
}
GoldInput.propTypes = {
  //logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(GoldInput);
