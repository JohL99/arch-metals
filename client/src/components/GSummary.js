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
class GSummary extends PureComponent {
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
      justif: "",
      generalcomments: "",
      specificcomments: "",
      comments: "",
      totpercent: "",
      median: "",
      Aprice: [],
      foreprices: [],
      averages: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      element: [],
      data1: [8],
      olddata: [],
      recent: [],
    };
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    this.FindOldata = this.FindOldata.bind(this);
    this.findMedian = this.findMedian.bind(this);
  }
  FindOldata() {
    let averagesP = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    function arrayObjectIndexOf(myArray, searchTerm, property) {
      for (var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) return i;
      }
      return -1;
    }
    //Soustraction des données récentes
    var Rprice = [...this.state.Aprice];
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
    let data1 = { ...this.state.data1 };
    data1 = [
      {
        //price: this.state.element[0],
        price: 0,
        recentdate: this.state.averages[0] * 100,
      },
    ];
    var y = 0;
    for (y == 0; y < 9; y++) {
      data1.push({
        price: this.state.element[y],
        RecentData: this.state.averages[y] * 100,
      });
    }
    data1.shift();
    this.setState({ data1 });
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
    let sum = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
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
          Aprice: [
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
        let Aprice = [...this.state.Aprice];
        Aprice.shift();
        this.setState({ Aprice });
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
    var newdate = 
	dateStr.toUTCString().split(' ')[0] + 
	dateStr.toUTCString().split(' ')[1] + 
	" " + 
	dateStr.toUTCString().split(' ')[2] + 
	" " + 
	dateStr.toUTCString().split(' ')[3] + 
	" " + 
	dateStr.toUTCString().split(' ')[4].split(':')[0] + 
	":" + 
	dateStr.toUTCString().split(' ')[4].split(':')[1];
    return newdate + " " + mid;
  };
  fillotherdata(sanza1) {
    fetch("/api/menji/all/" + sanza1 + "&Gold")
      .then((response2) => {
        return response2.json();
      })
      .then((data2) => {
        let taloyaApi = data2.map((bucket) => {
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
          recent: [
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
      });
  }
  fillgeneralcomments(sanza2) {
    fetch("/api/menji/olda1/" + sanza2 + "&Gold" + "&8")
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
  findMedian() {
    var aMedian;
    let Biggest = Math.max(
      this.state.averages[0],
      this.state.averages[1],
      this.state.averages[2],
      this.state.averages[3],
      this.state.averages[4],
      this.state.averages[5],
      this.state.averages[6],
      this.state.averages[7],
      this.state.averages[8]
    );
    if (Biggest === this.state.averages[0]) {aMedian = this.state.price1;} 
      else if (Biggest === this.state.averages[1]) {aMedian = this.state.price2;} 
      else if (Biggest === this.state.averages[2]) {aMedian = this.state.price3;} 
      else if (Biggest === this.state.averages[3]) {aMedian = this.state.price4;} 
      else if (Biggest === this.state.averages[4]) {aMedian = this.state.price5;} 
      else if (Biggest === this.state.averages[5]) {aMedian = this.state.price6;} 
      else if (Biggest === this.state.averages[6]) {aMedian = this.state.price7;} 
      else if (Biggest === this.state.averages[7]) {aMedian = this.state.price8;} 
      else if (Biggest === this.state.averages[8]) {aMedian = this.state.price9;}
    return aMedian;
  }
    calculeLaMoyenne() {
    var Kati;
    Kati =
      this.state.price1 * this.state.averages[0] +
      this.state.price2 * this.state.averages[1] +
      this.state.price3 * this.state.averages[2] +
      this.state.price4 * this.state.averages[3] +
      this.state.price5 * this.state.averages[4] +
      this.state.price6 * this.state.averages[5] +
      this.state.price7 * this.state.averages[6] +
      this.state.price8 * this.state.averages[7] +
      this.state.price9 * this.state.averages[8];
    return Kati;
  }
  render() {
    const renderprice = (priceFromApi) => {
      return (
        <tr key={priceFromApi.id}>
          <td align="center">{priceFromApi.user}</td>
          <td align="center"><b>${Math.round(priceFromApi.mean)}/oz</b></td>
          <td align="center">{priceFromApi.dateforecast} </td>
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
    const renderMaloba = (recentyaApi) => {
      if(recentyaApi.id !== "")
      return (
        <tr align="left" key={recentyaApi.id}>
          <td>{recentyaApi.generalcomments}</td>
        </tr>
      );
    };
    return (
      <div>
        <center>
          <table border="1">
            <tbody>
              <tr>
                <td colSpan="14" align="center" width="70%"><b>Most Recent Gold Forecasts - {this.state.month}</b></td>
              </tr>
              <tr>
                <td width="10%" align="center">
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
                        <option key={index /* Amonth.value */}
                          value={Amonth.value}
                        >
                          {Amonth + " " + new Date().getFullYear()}
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
                <td align="center"><b>Forecasts</b></td>
                <td align="center"><b>${/* this.findMedian() */ Math.round(this.calculeLaMoyenne())}/oz</b></td>
                <td align="center"><b>{this.state.Aprice.length}</b></td>
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
                <td colSpan="12">
                  {" "}
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
                        <Bar dataKey="RecentData" fill="#c7ba23" />
                        {/*  <Bar dataKey="OldData" fill="#FF0000" />
                        <Bar dataKey="AllData" fill="#00B050" /> */}
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="12" rowSpan="12">
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
                <td colSpan="14" align="center" width="70%"><b>Most Recent Gold Forecasts - {this.state.month}</b></td>
              </tr>
              <tr align="center">
                <td width="10%"><b>Participant</b></td>
                <td><b>Expected Value</b></td>
                <td><b>Date</b></td>
                <td><b>${this.state.price1}/oz</b></td>
                <td><b>${this.state.price2}/oz</b></td>
                <td><b>${this.state.price3}/oz</b></td>
                <td><b>${this.state.price4}/oz</b></td>
                <td><b>${this.state.price5}/oz</b></td>
                <td><b>${this.state.price6}/oz</b></td>
                <td><b>${this.state.price7}/oz</b></td>
                <td><b>${this.state.price8}/oz</b></td>
                <td><b>${this.state.price9}/oz</b></td>
                <td width="35%"><b>Justifications</b></td>
              </tr>
              {this.state.Aprice.map(renderprice)}
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}
export default GSummary;
