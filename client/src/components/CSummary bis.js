import React, { Component } from "react";

class CForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commodity: "",
      mois: "",
      user: "",
      dateforecast: "",
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
      comments: "",
      totpercent: "",
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
      median: "",
      lesprix: [],
      foreprices: [],
      lesmoyennes: [],
    };
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

    let somme = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);

    fetch("/api/beyi/commois/" + sanza + "&Copper")
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

    //prendre les valeurs
    fetch("/api/menji/dernierda/" + sanza + "&Copper")
      .then((response1) => {
        return response1.json();
      })
      .then((data1) => {
        let prixFromApi = data1.map((prix, x, index) => {
          var nombre = index.length;

          somme[0] = somme[0] + prix.detail.price1;
          somme[1] = somme[1] + prix.detail.price2;
          somme[2] = somme[2] + prix.detail.price3;
          somme[3] = somme[3] + prix.detail.price4;
          somme[4] = somme[4] + prix.detail.price5;
          somme[5] = somme[5] + prix.detail.price6;
          somme[6] = somme[6] + prix.detail.price7;
          somme[7] = somme[7] + prix.detail.price8;
          somme[8] = somme[8] + prix.detail.price9;

          var moyenneEncore = [];

          moyenneEncore[0] = somme[0] / nombre;
          moyenneEncore[1] = somme[1] / nombre;
          moyenneEncore[2] = somme[2] / nombre;
          moyenneEncore[3] = somme[3] / nombre;
          moyenneEncore[4] = somme[4] / nombre;
          moyenneEncore[5] = somme[5] / nombre;
          moyenneEncore[6] = somme[6] / nombre;
          moyenneEncore[7] = somme[7] / nombre;
          moyenneEncore[8] = somme[8] / nombre;

          this.setState({ lesmoyennes: [].concat(moyenneEncore) });

          return {
            user: prix._id.user,
            dateforecast: prix.dateforecast,
            price1: prix.detail.price1,
            price2: prix.detail.price2,
            price3: prix.detail.price3,
            price4: prix.detail.price4,
            price5: prix.detail.price5,
            price6: prix.detail.price6,
            price7: prix.detail.price7,
            price8: prix.detail.price8,
            price9: prix.detail.price9,
            lemedian: prix.detail.lemedian,
            lamoyenne: prix.detail.lamoyenne,
            specificcomments: prix.detail.specificcomments,
          };
        });
        this.setState({
          lesprix: [
            {
              user: "",
              dateforecast: "",
              price1: "",
              price2: "",
              price3: "",
              price4: "",
              price5: "",
              price6: "",
              price7: "",
              price8: "",
              price9: "",
              lemedian: "",
              lamoyenne: "",
              specificcomments: "",
            },
          ].concat(prixFromApi),
        });
      })
      .catch((error1) => {
        console.log(error1);
      });

    //ajout
  }

  render() {
    const renderPrix = (prixFromApi) => {
      return (
        <tr key={prixFromApi.id}>
          <td>{prixFromApi.user}</td>
          <td>{prixFromApi.lamoyenne}</td>
          <td>{prixFromApi.lemedian}</td>
          <td>{prixFromApi.dateforecast} </td>
          <td>{prixFromApi.price1 * 100}%</td>
          <td>{prixFromApi.price2 * 100}%</td>
          <td>{prixFromApi.price3 * 100}% </td>
          <td>{prixFromApi.price4 * 100}%</td>
          <td>{prixFromApi.price5 * 100}%</td>
          <td>{prixFromApi.price6 * 100}%</td>
          <td>{prixFromApi.price7 * 100}%</td>
          <td>{prixFromApi.price8 * 100}%</td>
          <td>{prixFromApi.price9 * 100}%</td>
          <td>{prixFromApi.specificcomments}</td>
        </tr>
      );
    };

    return (
      <div>
        <center>
          <table border="1">
            <tr>
              <td colspan="14" align="center" width="100%">
                Copper Forecasts - 2020
              </td>
            </tr>
            <tr>
              <td width="10%">
                <select
                  id="mnth"
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
                  <option value="">-- Select a month --</option>
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
              <td>
                <b>EV</b>{" "}
              </td>
              <td>
                <b>No. Fcasts</b>
              </td>
              <td>
                <b>{this.state.price1}</b>
              </td>
              <td>
                <b>{this.state.price2}</b>{" "}
              </td>
              <td>
                <b>{this.state.price3}</b>
              </td>
              <td>
                <b>{this.state.price4}</b>
              </td>
              <td>
                <b>{this.state.price5}</b>
              </td>
              <td>
                <b>{this.state.price6}</b>
              </td>
              <td>
                <b>{this.state.price7}</b>
              </td>
              <td>
                <b>{this.state.price8}</b>{" "}
              </td>
              <td>
                <b>{this.state.price9}</b>{" "}
              </td>
              <td width="35%" rowspan="11">
                <table className="table table-bordered">
                  <tr>
                    <td>Participants Most Recent General Remarks1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td width="10%">Most Recent Fcasts</td>
              <td>6250 </td>
              <td>10%</td>
              <td>3%</td>
              <td>8 %</td>
              <td>12%</td>
              <td>17%</td>
              <td>18%</td>
              <td>19%</td>
              <td>12%</td>
              <td>8%</td>
              <td>2% </td>
            </tr>

            <tr rowspan="7">le graphique: écoute plus souvent les choses</tr>

            <tr>
              <td width="10%">
                <b>{this.state.mois}</b>
              </td>
              <td>
                <b>EV</b>{" "}
              </td>
              <td>
                <b>No. Fcasts</b>
              </td>
              <td>
                <b>{this.state.price1}</b>
              </td>
              <td>
                <b>{this.state.price2}</b>{" "}
              </td>
              <td>
                <b>{this.state.price3}</b>
              </td>
              <td>
                <b>{this.state.price4}</b>
              </td>
              <td>
                <b>{this.state.price5}</b>
              </td>
              <td>
                <b>{this.state.price6}</b>
              </td>
              <td>
                <b>{this.state.price7}</b>
              </td>
              <td>
                <b>{this.state.price8}</b>{" "}
              </td>
              <td>
                <b>{this.state.price9}</b>{" "}
              </td>
            </tr>
            <tr>
              <td width="10%">Most Recent Fcasts {this.state.mois}</td>
              <td>6250 </td>
              <td>10%</td>
              <td>3%</td>
              <td>8 %</td>
              <td>12%</td>
              <td>17%</td>
              <td>18%</td>
              <td>19%</td>
              <td>12%</td>
              <td>8%</td>
              <td>2% </td>
            </tr>

            <tr>
              <td width="10%">
                <b>{this.state.mois}</b>
              </td>
              <td>
                <b>EV</b>{" "}
              </td>
              <td>
                <b>No. Fcasts</b>
              </td>
              <td>
                <b>{this.state.price1}</b>
              </td>
              <td>
                <b>{this.state.price2}</b>{" "}
              </td>
              <td>
                <b>{this.state.price3}</b>
              </td>
              <td>
                <b>{this.state.price4}</b>
              </td>
              <td>
                <b>{this.state.price5}</b>
              </td>
              <td>
                <b>{this.state.price6}</b>
              </td>
              <td>
                <b>{this.state.price7}</b>
              </td>
              <td>
                <b>{this.state.price8}</b>{" "}
              </td>
              <td>
                <b>{this.state.price9}</b>{" "}
              </td>
            </tr>
            <tr>
              <td width="10%">Most Recent Fcasts {this.state.mois}</td>
              <td>6250 </td>
              <td>10%</td>
              <td>3%</td>
              <td>8 %</td>
              <td>12%</td>
              <td>17%</td>
              <td>18%</td>
              <td>19%</td>
              <td>12%</td>
              <td>8%</td>
              <td>2% </td>
            </tr>
          </table>

          <table className="table table-bordered">
            <tr>
              <td colspan="14" align="center" width="100%">
                <b>
                  Participants Most Recent Copper Forecasts - {this.state.mois}
                </b>
              </td>
            </tr>

            <tr>
              <td width="10%">
                <b>{this.state.mois}</b>
              </td>
              <td>
                <b>EV</b>{" "}
              </td>
              <td>
                <b>Median</b>{" "}
              </td>
              <td>
                <b>Date</b>
              </td>
              <td>
                <b>{this.state.price1}</b>
              </td>
              <td>
                <b>{this.state.price2}</b>{" "}
              </td>
              <td>
                <b>{this.state.price3}</b>
              </td>
              <td>
                <b>{this.state.price4}</b>
              </td>
              <td>
                <b>{this.state.price5}</b>
              </td>
              <td>
                <b>{this.state.price6}</b>
              </td>
              <td>
                <b>{this.state.price7}</b>
              </td>
              <td>
                <b>{this.state.price8}</b>{" "}
              </td>
              <td>
                <b>{this.state.price9}</b>{" "}
              </td>
              <td width="35%">
                <b>Participant's Specific Remarks</b>
              </td>
            </tr>
            {this.state.lesprix.map(renderPrix)}
          </table>
        </center>
      </div>
    );
  }
}
export default CForecast;
