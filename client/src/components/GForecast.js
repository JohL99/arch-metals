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
class GForecast extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      commodity: "",
      month: "",
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
      mean: "",
      median: "",
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
      Rprice: [],
      foreprices: [],
      averages: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      element: [],
      data1: [8],
      olddata: [],
      alldata: [],
      averagesO: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      averagesA: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      recent: [],
      EVR: 0,
      EVO: 0,
      EVA: 0,
    };
    this.FindOldata = this.FindOldata.bind(this);
    this.findMedian = this.findMedian.bind(this);
    this.recovermeanT = this.recovermeanT.bind(this);
    this.findEV = this.findEV.bind(this);
  }
  FindOldata() {
    let sum1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let sum2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let averagesO = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let averagesA = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let averagesP = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    function arrayObjectIndexOf(myArray, searchTerm, property) {
      for (var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) return i;
      }
      return -1;
    }
    //Soustraction des données récentes
    var arOlddata = [...this.state.alldata];
    var arAlldata = [...this.state.alldata];
    var Rprice = [...this.state.Rprice];
    var index;
    let Variable1 = Rprice.map((pricedata) => {
      index = arrayObjectIndexOf(arOlddata, pricedata.id, "id");
      if (index !== -1) {
        arOlddata.splice(index, 1);
      }
      return pricedata.commodity;
    });
    var numberT = this.state.alldata.length;
    var number3 = arOlddata.length;
    var number2 = this.state.Rprice.length;
    //var number2 = this.state.alldata.length;
    averagesA[0] = this.state.averagesA[0].price1;
    averagesA[1] = this.state.averagesA[0].price2;
    averagesA[2] = this.state.averagesA[0].price3;
    averagesA[3] = this.state.averagesA[0].price4;
    averagesA[4] = this.state.averagesA[0].price5;
    averagesA[5] = this.state.averagesA[0].price6;
    averagesA[6] = this.state.averagesA[0].price7;
    averagesA[7] = this.state.averagesA[0].price8;
    averagesA[8] = this.state.averagesA[0].price9;
    var number1 = arOlddata.length;
    averagesO[0] = (averagesA[0] * numberT - this.state.averages[0] * number2) / (numberT - number2);
    averagesO[1] = (averagesA[1] * numberT - this.state.averages[1] * number2) / (numberT - number2);
    averagesO[2] = (averagesA[2] * numberT - this.state.averages[2] * number2) / (numberT - number2);
    averagesO[3] = (averagesA[3] * numberT - this.state.averages[3] * number2) / (numberT - number2);
    averagesO[4] = (averagesA[4] * numberT - this.state.averages[4] * number2) / (numberT - number2);
    averagesO[5] = (averagesA[5] * numberT - this.state.averages[5] * number2) / (numberT - number2);
    averagesO[6] = (averagesA[6] * numberT - this.state.averages[6] * number2) / (numberT - number2);
    averagesO[7] = (averagesA[8] * numberT - this.state.averages[7] * number2) / (numberT - number2);
    averagesO[8] = (averagesA[8] * numberT - this.state.averages[8] * number2) / (numberT - number2);
    this.setState({ averagesO });
    this.setState({ olddata: [].concat(arOlddata) });
    //calcul des means
    this.state.element[0] = this.state.price1;
    this.state.element[1] = this.state.price2;
    this.state.element[2] = this.state.price3;
    this.state.element[3] = this.state.price4;
    this.state.element[4] = this.state.price5;
    this.state.element[5] = this.state.price6;
    this.state.element[6] = this.state.price7;
    this.state.element[7] = this.state.price8;
    this.state.element[8] = this.state.price9;
    averagesP[0] = Rprice.price1;
    averagesP[1] = Rprice.price2;
    averagesP[2] = Rprice.price3;
    averagesP[3] = Rprice.price4;
    averagesP[4] = Rprice.price5;
    averagesP[5] = Rprice.price6;
    averagesP[6] = Rprice.price7;
    averagesP[7] = Rprice.price8;
    averagesP[8] = Rprice.price9;
    let data1 = { ...this.state.data1 };
    data1 = [
      {
        price: this.state.element[0],
        recentdate: this.state.averages[0],
        olddata: averagesO[0],
        alldata: averagesA[0],
      },
    ];
    this.setState({ averagesA });
    this.setState({ averagesO });
    var y = 0;
    for (y === 0; y < 9; y++) {
      data1.push({
        price: this.state.element[y],
        RecentData: this.state.averages[y] * 100,
        OldData: averagesO[y],
        AllData: averagesA[y],
      });
    }
    data1.shift();
    this.setState({ data1 });
    //on enlève la ligne vide
    Rprice.shift();
    this.setState({ Rprice: Rprice });
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
    let sum = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    fetch("/api/beyi/commonth/" + sanza + "&Gold")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        let bucket = data.map((price) => {
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
    fetch("/api/menji/dernierda/" + sanza + "&Gold")
      .then((response1) => {
        return response1.json();
      })
      .then((data1) => {
        let priceFromApi = data1.map((price, x, index) => {
          var number = index.length;
          sum[0] = sum[0] + price.detail.price1;
          sum[1] = sum[1] + price.detail.price2;
          sum[2] = sum[2] + price.detail.price3;
          sum[3] = sum[3] + price.detail.price4;
          sum[4] = sum[4] + price.detail.price5;
          sum[5] = sum[5] + price.detail.price6;
          sum[6] = sum[6] + price.detail.price7;
          sum[7] = sum[7] + price.detail.price8;
          sum[8] = sum[8] + price.detail.price9;
          var meanRepeat = [];
          meanRepeat[0] = sum[0] / number;
          meanRepeat[1] = sum[1] / number;
          meanRepeat[2] = sum[2] / number;
          meanRepeat[3] = sum[3] / number;
          meanRepeat[4] = sum[4] / number;
          meanRepeat[5] = sum[5] / number;
          meanRepeat[6] = sum[6] / number;
          meanRepeat[7] = sum[7] / number;
          meanRepeat[8] = sum[8] / number;
          this.setState({ averages: [].concat(meanRepeat) });
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
            median: price.detail.median,
            mean: price.detail.mean,
            specificcomments: price.detail.specificcomments,
          };
        });
        this.setState({
          Rprice: [
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
              median: "",
              mean: "",
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
    this.recovermeanT(sanza1);
    fetch("/api/menji/all/" + sanza1 + "&Gold")
      .then((response2) => {return response2.json();})
      .then((data2) => {let taloyaApi = data2.map((bucket) => {
          return {
            id: bucket._id,
            user: bucket.user,
            dateforecast: this.convert_to_utc(new Date(bucket.dateforecast)),
            price1: bucket.price1,
            price2: bucket.price2,
            price3: bucket.price3,
            price4: bucket.price4,
            price5: bucket.price5,
            price6: bucket.price6,
            price7: bucket.price7,
            price8: bucket.price8,
            price9: bucket.price9,
            median: bucket.median,
            mean: bucket.mean,
            specificcomments: bucket.specificcomments,
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
              median: "",
              mean: "",
              specificcomments: "",
            },
          ].concat(taloyaApi),
        });
        this.FindOldata();
        this.fillgeneralcomments(sanza1);
	this.setState({ EVO: this.findEV(this.state.averagesO) });
        this.setState({ EVA: this.findEV(this.state.averagesA) });
      });
  }
  fillgeneralcomments(sanza2) {
    fetch("/api/menji/olda1/" + sanza2 + "&Gold" + "&4")
      .then((response3) => {
        return response3.json();
      })
      .then((data3) => {
        let recentyaApi = data3.map((info) => {
          return {
            id: info._id,
            generalcomments: info.generalcomments,
          };
        });
        this.setState({
          recent: [
            {
              id: "",
              generalcomments: "",
            },
          ].concat(recentyaApi),
        });
      });
  }
  recovermeanT(sanza) {
    fetch("/api/menji/moyunmonth/" + sanza + "&Gold")
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
            median: kati.median,
          };
        });
        this.setState({
          averagesA: katiyaApi,
        });
      });
    this.FindOldata();
  }
  findMedian(aTable) {
    var aMedian;
    let Biggest = Math.max(
      aTable[0],
      aTable[1],
      aTable[2],
      aTable[3],
      aTable[4],
      aTable[5],
      aTable[6],
      aTable[7],
      aTable[8]
    );
    if (Biggest === aTable[0]) {aMedian = this.state.price1;} 
      else if (Biggest === aTable[1]) {aMedian = this.state.price2;} 
      else if (Biggest === aTable[2]) {aMedian = this.state.price3;} 
      else if (Biggest === aTable[3]) {aMedian = this.state.price4;} 
      else if (Biggest === aTable[4]) {aMedian = this.state.price5;} 
      else if (Biggest === aTable[5]) {aMedian = this.state.price6;} 
      else if (Biggest === aTable[6]) {aMedian = this.state.price7;} 
      else if (Biggest === aTable[7]) {aMedian = this.state.price8;} 
      else if (Biggest === aTable[8]) {aMedian = this.state.price9;}
    return aMedian;
  }
    findEV(item) {
    var EV = 0;
    if (typeof item !== "undefined") {
      EV =
        this.state.price1 * (item[0] / 100) +
        this.state.price2 * (item[1] / 100) +
        this.state.price3 * (item[2] / 100) +
        this.state.price4 * (item[3] / 100) +
        this.state.price5 * (item[4] / 100) +
        this.state.price6 * (item[5] / 100) +
        this.state.price7 * (item[6] / 100) +
        this.state.price8 * (item[7] / 100) +
        this.state.price9 * (item[8] / 100);
      //console.log(item);
      //console.log(item[0]);
      //console.log(EV);
    }
    return EV;
  }
  render() {
    const renderprice = (priceFromApi) => {
      return (
        <tr key={priceFromApi.id}>
          <td align="center">{priceFromApi.user}</td>
          <td align="center"><b>${Math.round(priceFromApi.mean)}/oz</b></td>
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
          <td align="center"><b>${Math.round(arOlddata.mean)}/oz</b></td>
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
    const renderMaloba = (recentyaApi) => {
      return (
        <tr key={recentyaApi.id}>
          <td align="left">{recentyaApi.generalcomments}</td>
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
                  <b>Gold Forecasts - {this.state.month}</b>
                </td>
              </tr>
              <tr>
                <td width="10%">
                  <select
                    id="mnth"
                    name="month"
                    value={this.state.month}
                    onChange={(e) => {
                      this.setState({
                        month: e.target.value,
                        validationError:
                          e.target.value === "" ? "Select a month" : "",
                      });
                      this.fillPrices(e.target.value);
                    }}
                  >
                    <option value="">Select a month</option>
                    {this.state.months
                      .slice(new Date().getMonth(), 12)
                      .map((Amonth, index) => (
                        <option
                          key={index /* Amonth.value */}
                          value={Amonth.value}
                        >
                          {Amonth + " " + new Date().getFullYear()}
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
                  <b>${this.state.price1}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price2}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price3}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price4}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price5}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price6}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price7}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price8}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price9}/oz</b>
                </td>
              </tr>
              <tr>
                <td align="center"><b>Most Recent Forecasts</b></td>
                <td align="center"><b>${Math.round(this.findEV(this.state.averages) * 100)/*Math.round(this.state.EVR)*/}/oz</b></td>
                <td align="center"><b>{this.state.Rprice.length}</b></td>
                <td align="center">{Math.round(this.state.averages[0] * 100)}%</td>
                <td align="center">{Math.round(this.state.averages[1] * 100)}%</td>
                <td align="center">{Math.round(this.state.averages[2] * 100)}%</td>
                <td align="center">{Math.round(this.state.averages[3] * 100)}%</td>
                <td align="center">{Math.round(this.state.averages[4] * 100)}%</td>
                <td align="center">{Math.round(this.state.averages[5] * 100)}%</td>
                <td align="center">{Math.round(this.state.averages[6] * 100)}%</td>
                <td align="center">{Math.round(this.state.averages[7] * 100)}%</td>
                <td align="center">{Math.round(this.state.averages[8] * 100)}%</td>
              </tr>
              <tr>
                <td width="10%" align="center">
                  <b>{this.state.month}</b>
                </td>
                <td align="center">
                  <b>Expected Value</b>
                </td>
                <td align="center">
                  <b>No. Forecasts</b>
                </td>
                <td align="center">
                  <b>${this.state.price1}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price2}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price3}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price4}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price5}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price6}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price7}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price8}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price9}/oz</b>
                </td>
              </tr>
              <tr>
                <td width="10%" align="center"><b>Older Forecasts</b></td>
                <td align="center"><b>${Math.round(this.state.EVO)/* Math.round(this.findEV(this.state.averagesO)) */}/oz</b></td> 
		            <td align="center"><b>{this.state.olddata.length}</b></td>
                <td align="center">{Math.round(this.state.averagesO[0])}%</td>
                <td align="center">{Math.round(this.state.averagesO[1])}%</td>
                <td align="center">{Math.round(this.state.averagesO[2])}%</td>
                <td align="center">{Math.round(this.state.averagesO[3])}%</td>
                <td align="center">{Math.round(this.state.averagesO[4])}%</td>
                <td align="center">{Math.round(this.state.averagesO[5])}%</td>
                <td align="center">{Math.round(this.state.averagesO[6])}%</td>
                <td align="center">{Math.round(this.state.averagesO[7])}%</td>
                <td align="center">{Math.round(this.state.averagesO[8])}%</td>
              </tr>
              <tr>
                <td width="10%" align="center">
                  <b>{this.state.month}</b>
                </td>
                <td align="center">
                  <b>Expected Value</b>
                </td>
                <td align="center">
                  <b>No. Forecasts</b>
                </td>
                <td align="center">
                  <b>${this.state.price1}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price2}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price3}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price4}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price5}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price6}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price7}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price8}/oz</b>
                </td>
                <td align="center">
                  <b>${this.state.price9}/oz</b>
                </td>
              </tr>
              <tr>
                <td width="10%" align="center">
		              <b>All Forecasts</b></td>
                <td align="center"><b>${Math.round(this.state.EVA)/*Math.round(this.findEV(this.state.averagesA))*/}/oz</b></td>
                <td align="center"><b>{this.state.alldata.length}</b></td>
                <td align="center">{Math.round(this.state.averagesA[0])}%</td>
                <td align="center">{Math.round(this.state.averagesA[1])}%</td>
                <td align="center">{Math.round(this.state.averagesA[2])}%</td>
                <td align="center">{Math.round(this.state.averagesA[3])}%</td>
                <td align="center">{Math.round(this.state.averagesA[4])}%</td>
                <td align="center">{Math.round(this.state.averagesA[5])}%</td>
                <td align="center">{Math.round(this.state.averagesA[6])}%</td>
                <td align="center">{Math.round(this.state.averagesA[7])}%</td>
                <td align="center">{Math.round(this.state.averagesA[8])}%</td>
              </tr>
              <tr>
                <td colSpan="12" align="center">
                  <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                      <BarChart
                        layout="vertical"
                        width={500}
                        height={300}
                        data={this.state.data1}
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
                      {this.state.recent.map(renderMaloba)}
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
                  <b>Most Recent Gold Forecasts - {this.state.month}</b>
                </td>
              </tr>
              <tr>
                <td align="center" width="10%">
                  <b>Participant</b>
                </td>
                <td align="center" width="10%">
                  <b>Expected Value</b>
                </td>
                <td align="center" width="15%">
                  <b>Date</b>
                </td>
                <td align="center" width="8%">
                  <b>${this.state.price1}/oz</b>
                </td>
                <td align="center" width="8%">
                  <b>${this.state.price2}/oz</b>
                </td>
                <td align="center" width="8%">
                  <b>${this.state.price3}/oz</b>
                </td>
                <td align="center" width="8%">
                  <b>${this.state.price4}/oz</b>
                </td>
                <td align="center" width="8%">
                  <b>${this.state.price5}/oz</b>
                </td>
                <td align="center" width="8%">
                  <b>${this.state.price6}/oz</b>
                </td>
                <td align="center" width="8%">
                  <b>${this.state.price7}/oz</b>
                </td>
                <td align="center" width="8%">
                  <b>${this.state.price8}/oz</b>
                </td>
                <td align="center" width="8%">
                  <b>${this.state.price9}/oz</b>
                </td>
                <td align="center" width="80%">
                  <b>Justifications</b>
                </td>
              </tr>
              {this.state.Rprice.map(renderprice)}
            </tbody>
          </table>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td colSpan="13" align="center" width="100%">
                  <b>Older Gold Forecasts - {this.state.month}</b>
                </td>
              </tr>
              <tr>
                <td align="center" width="10%">
                  <b>Participant</b>
                </td>
                <td align="center" width="10%">
                  <b>Expected Value</b>
                </td>
                <td align="center" width="15%">
                  <b>Date</b>
                </td>
                <td align="center" width="8%">
                  <b>${this.state.price1}/oz</b>
                </td>
                <td align="center" width="8%">
                  <b>${this.state.price2}/oz</b>
                </td>
                <td align="center" width="8%">
                  <b>${this.state.price3}/oz</b>
                </td>
                <td align="center" width="8%">
                  <b>${this.state.price4}/oz</b>
                </td>
                <td align="center" width="8%">
                  <b>${this.state.price5}/oz</b>
                </td>
                <td align="center" width="8%">
                  <b>${this.state.price6}/oz</b>
                </td>
                <td align="center" width="8%">
                  <b>${this.state.price7}/oz</b>
                </td>
                <td align="center" width="8%">
                  <b>${this.state.price8}/oz</b>
                </td>
                <td align="center" width="8%">
                  <b>${this.state.price9}/oz</b>
                </td>
                <td align="center" width="80%">
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
export default GForecast;
