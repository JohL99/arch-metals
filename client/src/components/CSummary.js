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
      lesprix: [],
      foreprices: [],
      lesmoyennes: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      njina: [],
      donnees1: [8],
      olddata: [],
      maloba: [],
    };
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    this.CreeOldata = this.CreeOldata.bind(this);
    this.trouveLeMedian = this.trouveLeMedian.bind(this);
  }
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  CreeOldata() {
    let lesmoyennesR = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    function arrayObjectIndexOf(myArray, searchTerm, property) {
      for (var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) return i;
      }
      return -1;
    }
    //Soustraction des données récentes
    var arLesprix = [...this.state.lesprix];
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
    let donnees1 = { ...this.state.donnees1 };
    donnees1 = [
      {
        //price: this.state.njina[0],
        price: 0,
        recentdate: this.state.lesmoyennes[0] * 100,
      },
    ];
    var y = 0;
    for (y == 0; y < 9; y++) {
      donnees1.push({
        price: this.state.njina[y],
        RecentData: this.state.lesmoyennes[y] * 100,
      });
    }
    donnees1.shift();
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
    let somme = [0, 0, 0, 0, 0, 0, 0, 0, 0];
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
        let lesprix = [...this.state.lesprix];
        lesprix.shift();
        this.setState({ lesprix });
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
    var mid="am";
    if(hours==0){ //At 00 hours we need to show 12 am
    hours=12;
    }
    else if(hours>12)
    {
    hours=hours%12;
    mid="pm";
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
          maloba: [
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
      });
  }
  fillgeneralcomments(sanza2) {
    fetch("/api/menji/olda1/" + sanza2 + "&Copper" + "&8")
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
  trouveLeMedian() {
    var leMedian;
    let Mukubwa = Math.max(
      this.state.lesmoyennes[0],
      this.state.lesmoyennes[1],
      this.state.lesmoyennes[2],
      this.state.lesmoyennes[3],
      this.state.lesmoyennes[4],
      this.state.lesmoyennes[5],
      this.state.lesmoyennes[6],
      this.state.lesmoyennes[7],
      this.state.lesmoyennes[8]
    );
    if (Mukubwa === this.state.lesmoyennes[0]) {leMedian = this.state.price1;} 
      else if (Mukubwa === this.state.lesmoyennes[1]) {leMedian = this.state.price2;} 
      else if (Mukubwa === this.state.lesmoyennes[2]) {leMedian = this.state.price3;} 
      else if (Mukubwa === this.state.lesmoyennes[3]) {leMedian = this.state.price4;} 
      else if (Mukubwa === this.state.lesmoyennes[4]) {leMedian = this.state.price5;} 
      else if (Mukubwa === this.state.lesmoyennes[5]) {leMedian = this.state.price6;} 
      else if (Mukubwa === this.state.lesmoyennes[6]) {leMedian = this.state.price7;} 
      else if (Mukubwa === this.state.lesmoyennes[7]) {leMedian = this.state.price8;} 
      else if (Mukubwa === this.state.lesmoyennes[8]) {leMedian = this.state.price9;}
    return leMedian;
  }
    calculeLaMoyenne() {
    var Kati;
    Kati =
      this.state.price1 * this.state.lesmoyennes[0] +
      this.state.price2 * this.state.lesmoyennes[1] +
      this.state.price3 * this.state.lesmoyennes[2] +
      this.state.price4 * this.state.lesmoyennes[3] +
      this.state.price5 * this.state.lesmoyennes[4] +
      this.state.price6 * this.state.lesmoyennes[5] +
      this.state.price7 * this.state.lesmoyennes[6] +
      this.state.price8 * this.state.lesmoyennes[7] +
      this.state.price9 * this.state.lesmoyennes[8];
    return Kati;
  }
  render() {
    const renderPrix = (prixFromApi) => {
      return (
        <tr key={prixFromApi.id}>
          <td colSpan="1" align="center">
            <b>${Math.round(prixFromApi.lamoyenne)}/mt</b>
            {"  "}
            {prixFromApi.user}
            {"  "}
            {prixFromApi.dateforecast}
          </td>
          <td colSpan="1" align="center">{prixFromApi.price1 * 100}%</td>
          <td colSpan="1" align="center">{prixFromApi.price2 * 100}%</td>
          <td colSpan="1" align="center">{prixFromApi.price3 * 100}%</td>
          <td colSpan="1" align="center">{prixFromApi.price4 * 100}%</td>
          <td colSpan="1" align="center">{prixFromApi.price5 * 100}%</td>
          <td colSpan="1" align="center">{prixFromApi.price6 * 100}%</td>
          <td colSpan="1" align="center">{prixFromApi.price7 * 100}%</td>
          <td colSpan="1" align="center">{prixFromApi.price8 * 100}%</td>
          <td colSpan="1" align="center">{prixFromApi.price9 * 100}%</td>
          <td colSpan="4" align="left">{prixFromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderMaloba = (malobayaApi) => {
      if(malobayaApi.id !== "")
      return (
        <tr align="left" key={malobayaApi.id}>
          <td>{malobayaApi.generalcomments}</td>
        </tr>
      );
    };
    return (
      <div>
        <center>
          <table border="1">
            <tbody>
              <tr>
                <td colSpan="14" align="center" width="100%"><b>Most Recent Copper Forecasts - {this.state.mois}</b></td>
              </tr>
              <tr>
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
                        <option key={index /* lemois.value */}
                          value={lemois.value}
                        >
                          {lemois + " " + new Date().getFullYear()}
                        </option>
                      ))}
                  </select>
                </td>
                <td align="center"><b>Expected Value</b></td>
                <td align="center"><b>No. Forecasts</b></td>
                <td align="center"><b>${this.state.price1}/mt</b></td>
                <td align="center"><b>${this.state.price2}/mt</b></td>
                <td align="center"><b>${this.state.price3}/mt</b></td>
                <td align="center"><b>${this.state.price4}/mt</b></td>
                <td align="center"><b>${this.state.price5}/mt</b></td>
                <td align="center"><b>${this.state.price6}/mt</b></td>
                <td align="center"><b>${this.state.price7}/mt</b></td>
                <td align="center"><b>${this.state.price8}/mt</b></td>
                <td align="center"><b>${this.state.price9}/mt</b></td>
              </tr>
              <tr>
                <td align="center"><b>Forecasts</b></td>
                <td align="center"><b>${/* this.trouveLeMedian() */ Math.round(this.calculeLaMoyenne())}/mt</b></td>
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
              <td colSpan="14" align="center">
                {" "}
                <div style={{ width: "50%", height: 250 }}>
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
                <Bar dataKey="RecentData" fill="#B87333" />
                  {/*  <Bar dataKey="OldData" fill="#FF0000" />
                  <Bar dataKey="AllData" fill="#00B050" /> */}
                </BarChart>
                </ResponsiveContainer>
              </div>
              </td>
            </tr>
            <tr>
            <td colSpan="14" rowSpan="12">
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
          <td colSpan="14" align="center" width="100%"><b>Most Recent Copper Forecasts - {this.state.mois}</b></td>
          </tr>
           <tr align="center">
             <td><b>Expected Value</b></td>
             <td><b>${this.state.price1}/mt</b></td>
             <td><b>${this.state.price2}/mt</b></td>
             <td><b>${this.state.price3}/mt</b></td>
             <td><b>${this.state.price4}/mt</b></td>
             <td><b>${this.state.price5}/mt</b></td>
             <td><b>${this.state.price6}/mt</b></td>
             <td><b>${this.state.price7}/mt</b></td>
             <td><b>${this.state.price8}/mt</b></td>
             <td><b>${this.state.price9}/mt</b></td>
            <td colspan="4"><b>Justifications</b></td>
            </tr>
             {this.state.lesprix.map(renderPrix)}
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}
export default CSummary;
