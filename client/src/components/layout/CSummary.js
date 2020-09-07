import React, { PureComponent } from "react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

class CSummary extends PureComponent {
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

      justif: "",
      generalcomments: "",
      specificcomments: "",
      comments: "",
      totpercent: "",

      median: "",
      lesprix: [],
      foreprices: [],
      lesmoyennes: [],

      njina: [],
      donnees1: [8],
      olddata: [],
      alldata: [],
    };
    this.CreeOldata = this.CreeOldata.bind(this);
  }

  CreeOldata() {
    /*  let somme1 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
    let somme2 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
    let lesmoyennesO = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
    let lesmoyennesA = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0); */
    let lesmoyennesP = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);

    function arrayObjectIndexOf(myArray, searchTerm, property) {
      for (var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) return i;
      }
      return -1;
    }

    //Soustraction des données récentes
    /*  var arOlddata = [...this.state.alldata];
    var arAlldata = [...this.state.alldata]; */
    var arLesprix = [...this.state.lesprix];
    var index;
    /* let yaKala = arLesprix.map((prixdata) => {
      index = arrayObjectIndexOf(arOlddata, prixdata.id, "id");
      if (index !== -1) {
        arOlddata.splice(index, 1);
      }

      return prixdata.commodity;
    }); */

    /* var nombre2 = this.state.alldata.length;
    lesmoyennesA = [];
    const lesMoyA = arAlldata.forEach((arAll) => {
      somme2[0] = somme2[0] + arAll.price1;
      somme2[1] = somme2[1] + arAll.price2;
      somme2[2] = somme2[2] + arAll.price3;
      somme2[3] = somme2[3] + arAll.price4;
      somme2[4] = somme2[4] + arAll.price5;
      somme2[5] = somme2[5] + arAll.price6;
      somme2[6] = somme2[6] + arAll.price7;
      somme2[7] = somme2[7] + arAll.price8;
      somme2[8] = somme2[8] + arAll.price9;

      return lesmoyennesA;
    }); */
    /* 
    lesmoyennesA[0] = (parseFloat(somme2[0]) / parseFloat(nombre2)) * 100;
    lesmoyennesA[1] = (parseFloat(somme2[1]) / parseFloat(nombre2)) * 100;
    lesmoyennesA[2] = (parseFloat(somme2[2]) / parseFloat(nombre2)) * 100;
    lesmoyennesA[3] = (parseFloat(somme2[3]) / parseFloat(nombre2)) * 100;
    lesmoyennesA[4] = (parseFloat(somme2[4]) / parseFloat(nombre2)) * 100;
    lesmoyennesA[5] = (parseFloat(somme2[5]) / parseFloat(nombre2)) * 100;
    lesmoyennesA[6] = (parseFloat(somme2[6]) / parseFloat(nombre2)) * 100;
    lesmoyennesA[7] = (parseFloat(somme2[7]) / parseFloat(nombre2)) * 100;
    lesmoyennesA[8] = (parseFloat(somme2[8]) / parseFloat(nombre2)) * 100;
 */

    /*  var nombre1 = arOlddata.length;
    console.log(arOlddata.length);
    const lesMoyO = arOlddata.forEach((arOld) => {
      somme1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      somme1[0] = parseFloat(somme1[0]) + arOld.price1 ? arOld.price1 : 0;
      somme1[1] = parseFloat(somme1[1]) + arOld.price2 ? arOld.price2 : 0;
      somme1[2] = parseFloat(somme1[2]) + arOld.price3 ? arOld.price3 : 0;
      somme1[3] = parseFloat(somme1[3]) + arOld.price4 ? arOld.price4 : 0;
      somme1[4] = parseFloat(somme1[4]) + arOld.price5 ? arOld.price5 : 0;
      somme1[5] = parseFloat(somme1[5]) + arOld.price6 ? arOld.price6 : 0;
      somme1[6] = parseFloat(somme1[6]) + arOld.price7 ? arOld.price7 : 0;
      somme1[7] = parseFloat(somme1[7]) + arOld.price8 ? arOld.price8 : 0;
      somme1[8] = parseFloat(somme1[8]) + arOld.price9 ? arOld.price9 : 0;

      return lesmoyennesO;
    }); */

    /*  lesmoyennesO[0] = (parseFloat(somme1[0]) / parseFloat(nombre1)) * 100;
    lesmoyennesO[1] = (parseFloat(somme1[1]) / parseFloat(nombre1)) * 100;
    lesmoyennesO[2] = (parseFloat(somme1[2]) / parseFloat(nombre1)) * 100;
    lesmoyennesO[3] = (parseFloat(somme1[3]) / parseFloat(nombre1)) * 100;
    lesmoyennesO[4] = (parseFloat(somme1[4]) / parseFloat(nombre1)) * 100;
    lesmoyennesO[5] = (parseFloat(somme1[5]) / parseFloat(nombre1)) * 100;
    lesmoyennesO[6] = (parseFloat(somme1[6]) / parseFloat(nombre1)) * 100;
    lesmoyennesO[7] = (parseFloat(somme1[7]) / parseFloat(nombre1)) * 100;
    lesmoyennesO[8] = (parseFloat(somme1[8]) / parseFloat(nombre1)) * 100;
    console.log("Les Old");
    console.log(lesmoyennesO);
    console.log(arOlddata); 

    this.setState({ olddata: [].concat(arOlddata) });*/
    //calcul des moyennes
    this.state.njina[0] = this.state.price1;
    this.state.njina[1] = this.state.price2;
    this.state.njina[2] = this.state.price3;
    this.state.njina[3] = this.state.price4;
    this.state.njina[4] = this.state.price5;
    this.state.njina[5] = this.state.price6;
    this.state.njina[6] = this.state.price7;
    this.state.njina[7] = this.state.price8;
    /* 
    lesmoyennesP[0] = arLesprix.price1;
    lesmoyennesP[1] = arLesprix.price2;
    lesmoyennesP[2] = arLesprix.price3;
    lesmoyennesP[3] = arLesprix.price4;
    lesmoyennesP[4] = arLesprix.price5;
    lesmoyennesP[5] = arLesprix.price6;
    lesmoyennesP[6] = arLesprix.price7;
    lesmoyennesP[7] = arLesprix.price8; */

    let donnees1 = { ...this.state.donnees1 };
    donnees1 = [
      {
        price: this.state.njina[0],
        recentdate: this.state.lesmoyennes[0],
        /*   olddata: lesmoyennesO[0],
        alldata: lesmoyennesA[0], */
      },
    ];

    var y = 1;
    for (y == 1; y < 9; y++) {
      donnees1.push({
        price: this.state.njina[y],
        RecentData: this.state.lesmoyennes[y],
        /*   OldData: lesmoyennesO[y],
        AllData: lesmoyennesA[y], */
      });
    }

    this.setState({ donnees1 });
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
            id: prix.detail._id,
            /*   user: prix._id.user,
            dateforecast: prix.detail.dateforecast,
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
            specificcomments: prix.detail.specificcomments, */
          };
        });
        this.setState({
          lesprix: [
            {
              id: "",
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

    this.fillotherdata(sanza);
    //ajout
  }

  fillotherdata(sanza1) {
    fetch("/api/menji/all/" + sanza1 + "&Copper")
      .then((response2) => {
        return response2.json();
      })
      .then((data2) => {
        let taloyaApi = data2.map((talo) => {
          return {
            id: talo._id,
            user: talo.user,
            dateforecast: talo.dateforecast,
            price1: talo.price1,
            price2: talo.price2,
            price3: talo.price3,
            price4: talo.price4,
            price5: talo.price5,
            price6: talo.price6,
            price7: talo.price7,
            price8: talo.price8,
            price9: talo.price9,
            lemedian: talo.lemedian,
            lamoyenne: talo.lamoyenne,
            specificcomments: talo.specificcomments,
          };
        });

        this.setState({
          alldata: [
            {
              id: "",
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
          ].concat(taloyaApi),
        });

        this.CreeOldata();
      });
  }

  render() {
    const renderPrix = (prixFromApi) => {
      return (
        <tr key={prixFromApi.id}>
          <td>{prixFromApi.user}</td>
          <td>{prixFromApi.lamoyenne}</td>
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
    const renderOld = (arOlddata) => {
      return (
        <tr key={arOlddata.id}>
          <td>{arOlddata.user}</td>
          <td>{arOlddata.lamoyenne}</td>
          <td>{arOlddata.dateforecast} </td>
          <td>{arOlddata.price1 * 100}%</td>
          <td>{arOlddata.price2 * 100}%</td>
          <td>{arOlddata.price3 * 100}% </td>
          <td>{arOlddata.price4 * 100}%</td>
          <td>{arOlddata.price5 * 100}%</td>
          <td>{arOlddata.price6 * 100}%</td>
          <td>{arOlddata.price7 * 100}%</td>
          <td>{arOlddata.price8 * 100}%</td>
          <td>{arOlddata.price9 * 100}%</td>
          <td>{arOlddata.specificcomments}</td>
        </tr>
      );
    };

    return (
      <div>
        <center>
          <table border="1">
            <tbody>
              <tr>
                <td colSpan="14" align="center" width="100%">
                  Copper {this.state.mois}
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
                <td width="35%" rowSpan="11">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Remarks1</td>
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
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>Most Recent Fcasts</td>
                <td>6250 </td>
                <td>{this.state.lesprix.length} </td>
                <td>{Math.round(this.state.lesmoyennes[0] * 100)}%</td>
                <td>{Math.round(this.state.lesmoyennes[1] * 100)}%</td>
                <td>{Math.round(this.state.lesmoyennes[2] * 100)}%</td>
                <td>{Math.round(this.state.lesmoyennes[3] * 100)}%</td>
                <td>{Math.round(this.state.lesmoyennes[4] * 100)}%</td>
                <td>{Math.round(this.state.lesmoyennes[5] * 100)}%</td>
                <td>{Math.round(this.state.lesmoyennes[6] * 100)}%</td>
                <td>{Math.round(this.state.lesmoyennes[7] * 100)}%</td>
                <td>{Math.round(this.state.lesmoyennes[8] * 100)}%</td>
              </tr>

              <tr>
                <td colSpan="12">
                  {" "}
                  <div style={{ width: "100%", height: 400 }}>
                    <ResponsiveContainer>
                      <BarChart
                        layout="vertical"
                        width={500}
                        height={300}
                        data={this.state.donnees1}
                        margin={{
                          top: 5,
                          right: 5,
                          left: 5,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="price" type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="RecentData" fill="#8884d8" />
                        {/*  <Bar dataKey="OldData" fill="#82ca9d" />
                        <Bar dataKey="AllData" fill="#89914c" /> */}
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
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
                <td width="10%">Older Fcasts</td>
                <td>6250 </td>
                <td>{this.state.olddata.length}</td>
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
                <td width="10%">All Fcasts</td>
                <td>6250 </td>
                <td>{this.state.alldata.length}</td>
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
            </tbody>
          </table>

          <table className="table table-bordered">
            <tbody>
              <tr>
                <td colSpan="14" align="center" width="100%">
                  <b>
                    Participants Most Recent Copper Forecasts -{" "}
                    {this.state.mois}
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
            </tbody>
          </table>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td colSpan="14" align="center" width="100%">
                  <b>Older Copper Forecasts - {this.state.mois}</b>
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
              {this.state.olddata.map(renderOld)}
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}
export default CSummary;
