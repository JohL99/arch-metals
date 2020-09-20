//import React, { Component } from "react";
import React, { PureComponent } from "react";
import Navbar from "./layout/Navbar";
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
class GForecast extends PureComponent {
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
      lesmoyennes: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      njina: [],
      donnees1: [8],
      olddata: [],
      alldata: [],
      lesmoyennesO: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      lesmoyennesA: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      lesmoyennesR: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      maloba: [],
      EVR: 0,
      EVO: 0,
      EVA: 0,
    };
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    this.CreeOldata = this.CreeOldata.bind(this);
    this.trouveLeMedian = this.trouveLeMedian.bind(this);
    this.recuperemoyenneT = this.recuperemoyenneT.bind(this);
    this.trouveEV = this.trouveEV.bind(this);
  }
  componentDidMount(){
    window.scrollTo(0,0);
  }
  CreeOldata() {
    let lesmoyennesO = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let lesmoyennesA = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let lesmoyennesR = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    function arrayObjectIndexOf(myArray, searchTerm, property) {
      for (var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) return i;
      }
      return -1;
    }
    //Soustraction des données récentes
    var Olddata = [...this.state.alldata];
    var Alldata = [...this.state.alldata];
    var Lesprix = [...this.state.lesprix];
    var index;
    let yaKala = Lesprix.map((prixdata) => {
      index = arrayObjectIndexOf(Olddata, prixdata.id, "id");
      if (index !== -1) {
        Olddata.splice(index, 1);
      }
      return prixdata.commodity;
    });
    var nombreT = this.state.alldata.length;
    var nombreO = (this.state.alldata.length - this.state.lesprix.length);
    var nombreR = this.state.lesprix.length;
    //var nombre2 = this.state.alldata.length;
    lesmoyennesA[0] = this.state.lesmoyennesA[0].price1;
    lesmoyennesA[1] = this.state.lesmoyennesA[0].price2;
    lesmoyennesA[2] = this.state.lesmoyennesA[0].price3;
    lesmoyennesA[3] = this.state.lesmoyennesA[0].price4;
    lesmoyennesA[4] = this.state.lesmoyennesA[0].price5;
    lesmoyennesA[5] = this.state.lesmoyennesA[0].price6;
    lesmoyennesA[6] = this.state.lesmoyennesA[0].price7;
    lesmoyennesA[7] = this.state.lesmoyennesA[0].price8;
    lesmoyennesA[8] = this.state.lesmoyennesA[0].price9;
    var nombreT = Olddata.length;
    lesmoyennesO[0] = (lesmoyennesA[0] * nombreT - this.state.lesmoyennes[0] * nombreR) / (nombreT - nombreR);
    lesmoyennesO[1] = (lesmoyennesA[1] * nombreT - this.state.lesmoyennes[1] * nombreR) / (nombreT - nombreR);
    lesmoyennesO[2] = (lesmoyennesA[2] * nombreT - this.state.lesmoyennes[2] * nombreR) / (nombreT - nombreR);
    lesmoyennesO[3] = (lesmoyennesA[3] * nombreT - this.state.lesmoyennes[3] * nombreR) / (nombreT - nombreR);
    lesmoyennesO[4] = (lesmoyennesA[4] * nombreT - this.state.lesmoyennes[4] * nombreR) / (nombreT - nombreR);
    lesmoyennesO[5] = (lesmoyennesA[5] * nombreT - this.state.lesmoyennes[5] * nombreR) / (nombreT - nombreR);
    lesmoyennesO[6] = (lesmoyennesA[6] * nombreT - this.state.lesmoyennes[6] * nombreR) / (nombreT - nombreR);
    lesmoyennesO[7] = (lesmoyennesA[8] * nombreT - this.state.lesmoyennes[7] * nombreR) / (nombreT - nombreR);
    lesmoyennesO[8] = (lesmoyennesA[8] * nombreT - this.state.lesmoyennes[8] * nombreR) / (nombreT - nombreR);
    this.setState({ lesmoyennesO });
    this.setState({ olddata: [].concat(Olddata) });
    //calcul des moyennes
    this.state.njina[0] = this.state.price1;
    this.state.njina[1] = this.state.price2;
    this.state.njina[2] = this.state.price3;
    this.state.njina[3] = this.state.price4;
    this.state.njina[4] = this.state.price5;
    this.state.njina[5] = this.state.price6;
    this.state.njina[6] = this.state.price7;
    this.state.njina[7] = this.state.price8;
    this.state.njina[8] = this.state.price9;
    lesmoyennesR[0] = Lesprix.price1;
    lesmoyennesR[1] = Lesprix.price2;
    lesmoyennesR[2] = Lesprix.price3;
    lesmoyennesR[3] = Lesprix.price4;
    lesmoyennesR[4] = Lesprix.price5;
    lesmoyennesR[5] = Lesprix.price6;
    lesmoyennesR[6] = Lesprix.price7;
    lesmoyennesR[7] = Lesprix.price8;
    lesmoyennesR[8] = Lesprix.price9;
    let donnees1 = { ...this.state.donnees1 };
    donnees1 = [
      {
        price: this.state.njina[0],
        recentdate: this.state.lesmoyennes[0],
        olddata: lesmoyennesO[0],
        alldata: lesmoyennesA[0],
      },
    ];
    this.setState({ lesmoyennesA });
    this.setState({ lesmoyennesO });
    var y = 0;
    for (y === 0; y < 9; y++) {
      donnees1.push({
        price: this.state.njina[y],
        RecentData: this.state.lesmoyennes[y] * 100,
        OldData: lesmoyennesO[y],
        AllData: lesmoyennesA[y],
      });
    }
    donnees1.shift();
    this.setState({ donnees1 });
    //on enlève la ligne vide
    Lesprix.shift();
    this.setState({ lesprix: Lesprix });
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
    let somme = [0, 0, 0, 0, 0, 0, 0, 0, 0];
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
    //Extract data by month by commodity
    fetch("/api/menji/dernierda/" + sanza + "&Gold")
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
            user: prix._id.user,
            dateforecast: this.convert_to_utc(new Date(prix.detail.dateforecast)),
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
  convert_to_utc = (dateStr) => {
    //check whether time is in PM or AM
    var hours = dateStr.getHours();
    var hours = (hours+24-2)%24;
    var mid='am';
    if(hours==0){ //At 00 hours we need to show 12 am
    hours=12;
    }
    else if(hours>12)
    {
    hours=hours%12;
    mid='pm';
    }
    var newdate = dateStr.toUTCString().split(' ')[0] + dateStr.toUTCString().split(' ')[1] + ' ' 
    + dateStr.toUTCString().split(' ')[2] + ' '
    + dateStr.toUTCString().split(' ')[3] + ' ' 
    + dateStr.toUTCString().split(' ')[4].split(':')[0]
    + ":" + dateStr.toUTCString().split(' ')[4].split(':')[1];
    return newdate + " " + mid;
  }
  fillotherdata(sanza1) {
    this.recuperemoyenneT(sanza1);
    fetch("/api/menji/all/" + sanza1 + "&Gold")
      .then((response2) => {return response2.json();})
      .then((data2) => {let taloyaApi = data2.map((talo) => {
          return {
            id: talo._id,
            user: talo.user,
            dateforecast: this.convert_to_utc(new Date(talo.dateforecast)),
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
        this.fillgeneralcomments(sanza1);
        this.setState({ EVO: this.trouveEV(this.state.lesmoyennesO) });
        this.setState({ EVA: this.trouveEV(this.state.lesmoyennesA) });
      });
  }
  fillgeneralcomments(sanza2) {
    fetch("/api/menji/olda1/" + sanza2 + "&Gold" + "&8")
      .then((response3) => {
        return response3.json();
      })
      .then((data3) => {
        let malobayaApi = data3.map((liloba) => {
          return {
            id: liloba._id,
            generalcomments: liloba.generalcomments,
          };
        });
        this.setState({
          maloba: [
            {
              id: "",
              generalcomments: "",
            },
          ].concat(malobayaApi),
        });
      });
  }
  recuperemoyenneT(sanza) {
    fetch("/api/menji/moyunmois/" + sanza + "&Gold")
      .then((response4) => {
        return response4.json();
      })
      .then((data4) => {
        let katiyaApi = data4.map((kati) => {
          return {
            id: kati._id,
            price1: kati.avg1,
            price2: kati.avg2,
            price3: kati.avg3,
            price4: kati.avg4,
            price5: kati.avg5,
            price6: kati.avg6,
            price7: kati.avg7,
            price8: kati.avg8,
            price9: kati.avg9,
            lemedian: kati.lemedian,
          };
        });
        this.setState({
          lesmoyennesA: katiyaApi,
        });
      });
    this.CreeOldata();
  }
  trouveLeMedian(letableau) {
    var leMedian;
    let Mukubwa = Math.max(
      letableau[0],
      letableau[1],
      letableau[2],
      letableau[3],
      letableau[4],
      letableau[5],
      letableau[6],
      letableau[7],
      letableau[8]
    );
    if (Mukubwa === letableau[0]) {
      leMedian = this.state.price1;
    } else if (Mukubwa === letableau[1]) {
      leMedian = this.state.price2;
    } else if (Mukubwa === letableau[2]) {
      leMedian = this.state.price3;
    } else if (Mukubwa === letableau[3]) {
      leMedian = this.state.price4;
    } else if (Mukubwa === letableau[4]) {
      leMedian = this.state.price5;
    } else if (Mukubwa === letableau[5]) {
      leMedian = this.state.price6;
    } else if (Mukubwa === letableau[6]) {
      leMedian = this.state.price7;
    } else if (Mukubwa === letableau[7]) {
      leMedian = this.state.price8;
    } else if (Mukubwa === letableau[8]) {
      leMedian = this.state.price9;
    }
    return leMedian;
  }
  trouveEV(pour) {
    var EV = 0;
    if (typeof pour !== "undefined") {
      EV =
        this.state.price1 * (pour[0] / 100) +
        this.state.price2 * (pour[1] / 100) +
        this.state.price3 * (pour[2] / 100) +
        this.state.price4 * (pour[3] / 100) +
        this.state.price5 * (pour[4] / 100) +
        this.state.price6 * (pour[5] / 100) +
        this.state.price7 * (pour[6] / 100) +
        this.state.price8 * (pour[7] / 100) +
        this.state.price9 * (pour[8] / 100);
      //console.log(pour);
      //console.log(pour[0]);
      //console.log(EV);
    }
    return EV;
  }
  render() {
    const renderPrix = (prixFromApi) => {
      return (
        <tr key={prixFromApi.id}>
          <td align="center"><b>${Math.round(prixFromApi.lamoyenne)}/oz</b>
          {"  "}
          <b>{prixFromApi.user}</b>
          {"  "}
          {prixFromApi.dateforecast}
          </td>
          <td align="center">{prixFromApi.price1 * 100}%</td>
          <td align="center">{prixFromApi.price2 * 100}%</td>
          <td align="center">{prixFromApi.price3 * 100}%</td>
          <td align="center">{prixFromApi.price4 * 100}%</td>
          <td align="center">{prixFromApi.price5 * 100}%</td>
          <td align="center">{prixFromApi.price6 * 100}%</td>
          <td align="center">{prixFromApi.price7 * 100}%</td>
          <td align="center">{prixFromApi.price8 * 100}%</td>
          <td align="center">{prixFromApi.price9 * 100}%</td>
          <td colSpan="8" align="left">{prixFromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderOld = (Olddata) => {
      return (
        <tr key={Olddata.id}>
          <td align="center"><b>${Math.round(Olddata.lamoyenne)}/oz</b>
          {"  "}
          <b>{Olddata.user}</b>
          {"  "}
          {Olddata.dateforecast}
          </td>
          <td align="center">{Math.round(Olddata.price1 * 100)}%</td>
          <td align="center">{Math.round(Olddata.price2 * 100)}%</td>
          <td align="center">{Math.round(Olddata.price3 * 100)}%</td>
          <td align="center">{Math.round(Olddata.price4 * 100)}%</td>
          <td align="center">{Math.round(Olddata.price5 * 100)}%</td>
          <td align="center">{Math.round(Olddata.price6 * 100)}%</td>
          <td align="center">{Math.round(Olddata.price7 * 100)}%</td>
          <td align="center">{Math.round(Olddata.price8 * 100)}%</td>
          <td align="center">{Math.round(Olddata.price9 * 100)}%</td>
          <td colSpan="8" align="left">{Olddata.specificcomments}</td>
        </tr>
      );
    };
    const renderMaloba = (malobayaApi) => {
      if(malobayaApi.id !== "")
      return (
        <tr key={malobayaApi.id}>
          <td align="left">{malobayaApi.generalcomments}</td>
        </tr>
      );
    };
    return (
      <div>
        <center>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td colSpan="12" align="center" width="100%">
                  <b>Gold Forecasts - {this.state.mois}</b>
                </td>
              </tr>
              <tr>
                <td width="10%">
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
                <td align="center"><b>Expected Value</b></td>
                <td align="center"><b>No. Forecasts</b></td>
                <td align="center"><b>${this.state.price1}/oz</b></td>
                <td align="center"><b>${this.state.price2}/oz</b></td>
                <td align="center"><b>${this.state.price3}/oz</b></td>
                <td align="center"><b>${this.state.price4}/oz</b></td>
                <td align="center"><b>${this.state.price5}/oz</b></td>
                <td align="center"><b>${this.state.price6}/oz</b></td>
                <td align="center"><b>${this.state.price7}/oz</b></td>
                <td align="center"><b>${this.state.price8}/oz</b></td>
                <td align="center"><b>${this.state.price9}/oz</b></td>
              </tr>
              <tr>
                <td align="center"><b>Recent Forecasts</b></td>
                <td align="center"><b>${Math.round(this.trouveEV(this.state.lesmoyennes) * 100)
                /*Math.round(this.state.EVR)*/}/oz</b></td>
                <td align="center"><b>{this.state.lesprix.length}</b></td>
                <td align="center">{Math.round(this.state.lesmoyennes[0] * 100)}%</td>
                <td align="center">{Math.round(this.state.lesmoyennes[1] * 100)}%</td>
                <td align="center">{Math.round(this.state.lesmoyennes[2] * 100)}%</td>
                <td align="center">{Math.round(this.state.lesmoyennes[3] * 100)}%</td>
                <td align="center">{Math.round(this.state.lesmoyennes[4] * 100)}%</td>
                <td align="center">{Math.round(this.state.lesmoyennes[5] * 100)}%</td>
                <td align="center">{Math.round(this.state.lesmoyennes[6] * 100)}%</td>
                <td align="center">{Math.round(this.state.lesmoyennes[7] * 100)}%</td>
                <td align="center">{Math.round(this.state.lesmoyennes[8] * 100)}%</td>
              </tr>
              <tr>
                <td width="10%" align="center"><b>All Forecasts</b></td>
                <td align="center"><b>${Math.round(this.state.EVA)
                /*Math.round(this.trouveEV(this.state.lesmoyennesA))*/}/oz</b></td>
                <td align="center"><b>{this.state.alldata.length}</b></td>
                <td align="center">{Math.round(this.state.lesmoyennesA[0])}%</td>
                <td align="center">{Math.round(this.state.lesmoyennesA[1])}%</td>
                <td align="center">{Math.round(this.state.lesmoyennesA[2])}%</td>
                <td align="center">{Math.round(this.state.lesmoyennesA[3])}%</td>
                <td align="center">{Math.round(this.state.lesmoyennesA[4])}%</td>
                <td align="center">{Math.round(this.state.lesmoyennesA[5])}%</td>
                <td align="center">{Math.round(this.state.lesmoyennesA[6])}%</td>
                <td align="center">{Math.round(this.state.lesmoyennesA[7])}%</td>
                <td align="center">{Math.round(this.state.lesmoyennesA[8])}%</td>
              </tr>
              <tr>
                <td colSpan="14" align="center">
                  <div style={{ width: "60%", height: 250 }}>
                    <ResponsiveContainer>
                      <BarChart
                        layout="horizontal"
                        width={800}
                        height={200}
                        data={this.state.donnees1}
                        margin={{
                          top: 5,
                          right: 5,
                          left: 5,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="price" type="category" />
                        <YAxis type="number" label="  %  " />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="RecentData" fill="#00B050" />
                        <Bar dataKey="AllData" fill="#FFC000" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </td>
              </tr>
              <tr>
              <td width="100%" align="center" rowSpan="11" colSpan="12">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td align="center"><b>Most Recent General Comments</b></td>
                      </tr>
                      {this.state.maloba.map(renderMaloba)}
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td colSpan="18" align="center" width="100%">
                  <b>Most Recent Gold Forecasts - {this.state.mois}</b>
                </td>
              </tr>
              <tr>
                <td align="center"><b>Expected Value</b></td>
                <td align="center"><b>${this.state.price1}/oz</b></td>
                <td align="center"><b>${this.state.price2}/oz</b></td>
                <td align="center"><b>${this.state.price3}/oz</b></td>
                <td align="center"><b>${this.state.price4}/oz</b></td>
                <td align="center"><b>${this.state.price5}/oz</b></td>
                <td align="center"><b>${this.state.price6}/oz</b></td>
                <td align="center"><b>${this.state.price7}/oz</b></td>
                <td align="center"><b>${this.state.price8}/oz</b></td>
                <td align="center"><b>${this.state.price9}/oz</b></td>
                <td colSpan="8" align="center"><b>Justifications</b></td>
              </tr>
              {this.state.lesprix.map(renderPrix)}
            </tbody>
          </table>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td colSpan="18" align="center" width="100%">
                  <b>Older Gold Forecasts - {this.state.mois}</b></td>
              </tr>
              <tr>
                <td align="center"><b>Expected Value</b></td>
                <td align="center"><b>${this.state.price1}/oz</b></td>
                <td align="center"><b>${this.state.price2}/oz</b></td>
                <td align="center"><b>${this.state.price3}/oz</b></td>
                <td align="center"><b>${this.state.price4}/oz</b></td>
                <td align="center"><b>${this.state.price5}/oz</b></td>
                <td align="center"><b>${this.state.price6}/oz</b></td>
                <td align="center"><b>${this.state.price7}/oz</b></td>
                <td align="center"><b>${this.state.price8}/oz</b></td>
                <td align="center"><b>${this.state.price9}/oz</b></td>
                <td colSpan="8" align="center"><b>Justifications</b></td>
              </tr>
              {this.state.olddata.map(renderOld)}
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}
export default GForecast;
