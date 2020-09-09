//import React, { Component } from "react";
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
import Navbar from "./layout/Navbar";
class CForecast extends PureComponent {
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
        "sepember",
        "October",
        "November",
        "December",
      ],
      median: "",
      lesprice: [],
      foreprices: [],
      lesmoyennes: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      njina: [],
      donnees1: [8],
      olddata: [],
      alldata: [],
      lesmoyennesO: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      lesmoyennesA: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      maloba: [],
      EVR: 0,
      EVO: 0,
      EVA: 0,
    };
    this.CreeOldata = this.CreeOldata.bind(this);
    this.trouveLeMedian = this.trouveLeMedian.bind(this);
    this.recuperemoyenneT = this.recuperemoyenneT.bind(this);
    this.trouveEV = this.trouveEV.bind(this);
  }
  CreeOldata() {
    let somme1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let somme2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let lesmoyennesO = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let lesmoyennesA = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let lesmoyennesP = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    function arrayObjectIndexOf(myArray, searchTerm, property) {
      for (var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) return i;
      }
      return -1;
    }
    //Soustraction des données récentes
    var arOlddata = [...this.state.alldata];
    var arAlldata = [...this.state.alldata];
    var arLesprice = [...this.state.lesprice];
    var index;
    let yaKala = arLesprice.map((pricedata) => {
      index = arrayObjectIndexOf(arOlddata, pricedata.id, "id");
      if (index !== -1) {
        arOlddata.splice(index, 1);
      }
      return pricedata.commodity;
    });
    var nombreT5 = this.state.alldata.length;
    var nombre3 = arOlddata.length;
    var nombre2 = this.state.lesprice.length;
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
    var nombre1 = arOlddata.length;
    lesmoyennesO[0] = (lesmoyennesA[0] * nombreT5 - this.state.lesmoyennes[0] * nombre2) / (nombreT5 - nombre2);
    lesmoyennesO[1] = (lesmoyennesA[1] * nombreT5 - this.state.lesmoyennes[1] * nombre2) / (nombreT5 - nombre2);
    lesmoyennesO[2] = (lesmoyennesA[2] * nombreT5 - this.state.lesmoyennes[2] * nombre2) / (nombreT5 - nombre2);
    lesmoyennesO[3] = (lesmoyennesA[3] * nombreT5 - this.state.lesmoyennes[3] * nombre2) / (nombreT5 - nombre2);
    lesmoyennesO[4] = (lesmoyennesA[4] * nombreT5 - this.state.lesmoyennes[4] * nombre2) / (nombreT5 - nombre2);
    lesmoyennesO[5] = (lesmoyennesA[5] * nombreT5 - this.state.lesmoyennes[5] * nombre2) / (nombreT5 - nombre2);
    lesmoyennesO[6] = (lesmoyennesA[6] * nombreT5 - this.state.lesmoyennes[6] * nombre2) / (nombreT5 - nombre2);
    lesmoyennesO[7] = (lesmoyennesA[8] * nombreT5 - this.state.lesmoyennes[7] * nombre2) / (nombreT5 - nombre2);
    lesmoyennesO[8] = (lesmoyennesA[8] * nombreT5 - this.state.lesmoyennes[8] * nombre2) / (nombreT5 - nombre2);
    this.setState({ lesmoyennesO });
    this.setState({ olddata: [].concat(arOlddata) });
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
    lesmoyennesP[0] = arLesprice.price1;
    lesmoyennesP[1] = arLesprice.price2;
    lesmoyennesP[2] = arLesprice.price3;
    lesmoyennesP[3] = arLesprice.price4;
    lesmoyennesP[4] = arLesprice.price5;
    lesmoyennesP[5] = arLesprice.price6;
    lesmoyennesP[6] = arLesprice.price7;
    lesmoyennesP[7] = arLesprice.price8;
    lesmoyennesP[8] = arLesprice.price9;
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
    arLesprice.shift();
    this.setState({ lesprice: arLesprice });
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
    fetch("/api/beyi/commois/" + sanza + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        let talo = data.map((price) => {
          //put it in an array
          this.setState({ price1: price.floorprice + price.constant1 * 0 });
          this.setState({ price2: price.floorprice + price.constant1 * 1 });
          this.setState({ price3: price.floorprice + price.constant1 * 2 });
          this.setState({ price4: price.floorprice + price.constant1 * 3 });
          this.setState({ price5: price.floorprice + price.constant1 * 4 });
          this.setState({ price6: price.floorprice + price.constant1 * 5 });
          this.setState({ price7: price.floorprice + price.constant1 * 6 });
          this.setState({ price8: price.floorprice + price.constant1 * 7 });
          this.setState({ price9: price.floorprice + price.constant1 * 8 });
          return {
            id: price._id,
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
        let priceFromApi = data1.map((price, x, index) => {
          var nombre = index.length;
          somme[0] = somme[0] + price.detail.price1;
          somme[1] = somme[1] + price.detail.price2;
          somme[2] = somme[2] + price.detail.price3;
          somme[3] = somme[3] + price.detail.price4;
          somme[4] = somme[4] + price.detail.price5;
          somme[5] = somme[5] + price.detail.price6;
          somme[6] = somme[6] + price.detail.price7;
          somme[7] = somme[7] + price.detail.price8;
          somme[8] = somme[8] + price.detail.price9;
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
            id: price.detail._id,
            user: price._id.user,
            dateforecast: this.convert_to_utc(new Date(price.detail.dateforecast)),
            price1: price.detail.price1,
            price2: price.detail.price2,
            price3: price.detail.price3,
            price4: price.detail.price4,
            price5: price.detail.price5,
            price6: price.detail.price6,
            price7: price.detail.price7,
            price8: price.detail.price8,
            price9: price.detail.price9,
            lemedian: price.detail.lemedian,
            lamoyenne: price.detail.lamoyenne,
            specificcomments: price.detail.specificcomments,
          };
        });
        this.setState({
          lesprice: [
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
          ].concat(priceFromApi),
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
    fetch("/api/menji/all/" + sanza1 + "&Copper")
      .then((response2) => {
        return response2.json();
      })
      .then((data2) => {
        let taloyaApi = data2.map((talo) => {
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
    fetch("/api/menji/olda1/" + sanza2 + "&Copper" + "&4")
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
    fetch("/api/menji/moyunmois/" + sanza + "&Copper")
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
    const renderprice = (priceFromApi) => {
      return (
        <tr key={priceFromApi.id}>
          <td align="center">{priceFromApi.user}</td>
          <td align="center"><b>${Math.round(priceFromApi.lamoyenne)}/MT</b></td>
          <td align="center">{priceFromApi.dateforecast}</td>
          <td align="center">{priceFromApi.price1 * 100}%</td>
          <td align="center">{priceFromApi.price2 * 100}%</td>
          <td align="center">{priceFromApi.price3 * 100}%</td>
          <td align="center">{priceFromApi.price4 * 100}%</td>
          <td align="center">{priceFromApi.price5 * 100}%</td>
          <td align="center">{priceFromApi.price6 * 100}%</td>
          <td align="center">{priceFromApi.price7 * 100}%</td>
          <td align="center">{priceFromApi.price8 * 100}%</td>
          <td align="center">{priceFromApi.price9 * 100}%</td>
          <td align="center">{priceFromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderOld = (arOlddata) => {
      return (
        <tr key={arOlddata.id}>
          <td align="center">{arOlddata.user}</td>
          <td align="center"><b>${Math.round(arOlddata.lamoyenne)}/MT</b></td>
          <td align="center">{arOlddata.dateforecast}</td>
          <td align="center">{Math.round(arOlddata.price1 * 100)}%</td>
          <td align="center">{Math.round(arOlddata.price2 * 100)}%</td>
          <td align="center">{Math.round(arOlddata.price3 * 100)}%</td>
          <td align="center">{Math.round(arOlddata.price4 * 100)}%</td>
          <td align="center">{Math.round(arOlddata.price5 * 100)}%</td>
          <td align="center">{Math.round(arOlddata.price6 * 100)}%</td>
          <td align="center">{Math.round(arOlddata.price7 * 100)}%</td>
          <td align="center">{Math.round(arOlddata.price8 * 100)}%</td>
          <td align="center">{Math.round(arOlddata.price9 * 100)}%</td>
          <td align="center">{arOlddata.specificcomments}</td>
        </tr>
      );
    };
    const renderMaloba = (malobayaApi) => {
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
                <td colSpan="14" align="center" width="100%">
                  <b>Copper Forecasts - {this.state.mois}</b>
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
                <td align="center">
                  <b>Expected Value</b>
                </td>
                <td align="center">
                  <b>No. Forecasts</b>
                </td>
                <td align="center">
                  <b>${this.state.price1}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price2}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price3}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price4}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price5}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price6}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price7}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price8}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price9}/MT</b>
                </td>
              </tr>
              <tr>
                <td align="center"><b>Most Recent Forecasts</b></td>
                <td align="center"><b>${Math.round(this.trouveEV(this.state.lesmoyennes) * 100)/*Math.round(this.state.EVR)*/}/MT</b></td>
                <td align="center"><b>{this.state.lesprice.length}</b></td>
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
                <td width="10%" align="center">
                  <b>{this.state.mois}</b>
                </td>
                <td align="center">
                  <b>Expected Value</b>
                </td>
                <td align="center">
                  <b>No. Forecasts</b>
                </td>
                <td align="center">
                  <b>${this.state.price1}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price2}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price3}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price4}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price5}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price6}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price7}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price8}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price9}/MT</b>
                </td>
              </tr>
              <tr>
                <td width="10%" align="center"><b>Older Forecasts</b></td>
                <td align="center"><b>${Math.round(this.state.EVO)/* Math.round(this.trouveEV(this.state.lesmoyennesO)) */}/MT</b></td> 
		            <td align="center"><b>{this.state.olddata.length}</b></td>
                <td align="center">{Math.round(this.state.lesmoyennesO[0])}%</td>
                <td align="center">{Math.round(this.state.lesmoyennesO[1])}%</td>
                <td align="center">{Math.round(this.state.lesmoyennesO[2])}%</td>
                <td align="center">{Math.round(this.state.lesmoyennesO[3])}%</td>
                <td align="center">{Math.round(this.state.lesmoyennesO[4])}%</td>
                <td align="center">{Math.round(this.state.lesmoyennesO[5])}%</td>
                <td align="center">{Math.round(this.state.lesmoyennesO[6])}%</td>
                <td align="center">{Math.round(this.state.lesmoyennesO[7])}%</td>
                <td align="center">{Math.round(this.state.lesmoyennesO[8])}%</td>
              </tr>
              <tr>
                <td width="10%" align="center">
                  <b>{this.state.mois}</b>
                </td>
                <td align="center">
                  <b>Expected Value</b>
                </td>
                <td align="center">
                  <b>No. Forecasts</b>
                </td>
                <td align="center">
                  <b>${this.state.price1}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price2}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price3}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price4}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price5}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price6}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price7}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price8}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price9}/MT</b>
                </td>
              </tr>
              <tr>
                <td width="10%" align="center">
		              <b>All Forecasts</b></td>
                <td align="center"><b>${Math.round(this.state.EVA)/*Math.round(this.trouveEV(this.state.lesmoyennesA))*/}/MT</b></td>
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
                <td colSpan="12" align="center">
                  <div style={{ width: "100%", height: 300 }}>
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
                        <Bar dataKey="RecentData" fill="#00B050" />
                        <Bar dataKey="OldData" fill="#FF0000" />
                        <Bar dataKey="AllData" fill="#FFC000" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </td>
              </tr>
              <tr>
              <td width="35%" align="center" rowSpan="11" colSpan="12">
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
                <td colSpan="13" align="center" width="100%">
                  <b>
                    Most Recent Copper Forecasts - {this.state.mois}
                  </b>
                </td>
              </tr>
              <tr>
                <td width="10%" align="center">
                  <b>{this.state.mois}</b>
                </td>
                <td align="center">
                  <b>Expected Value</b>
                </td>
                <td align="center">
                  <b>Date</b>
                </td>
                <td align="center">
                  <b>${this.state.price1}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price2}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price3}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price4}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price5}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price6}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price7}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price8}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price9}/MT</b>
                </td>
                <td width="35%" align="center">
                  <b>Justifications</b>
                </td>
              </tr>
              {this.state.lesprice.map(renderprice)}
            </tbody>
          </table>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td colSpan="13" align="center" width="100%">
                  <b>Older Copper Forecasts - {this.state.mois}</b>
                </td>
              </tr>
              <tr>
                <td width="10%" align="center">
                  <b>{this.state.mois}</b>
                </td>
                <td align="center">
                  <b>Expected Value</b>
                </td>
                <td align="center">
                  <b>Date</b>
                </td>
                <td align="center">
                  <b>${this.state.price1}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price2}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price3}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price4}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price5}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price6}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price7}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price8}/MT</b>
                </td>
                <td align="center">
                  <b>${this.state.price9}/MT</b>
                </td>
                <td width="35%" align="center">
                  <b>Justifications</b>
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
export default CForecast;
