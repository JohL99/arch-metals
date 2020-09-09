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
class CSumFcast extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      moisprice: [],
      moispour: [],
      price1: [],
      price2: [],
      price3: [],
      price4: [],
      price5: [],
      price6: [],
      price7: [],
      price8: [],
      price9: [],
      avg1: [],
      avg2: [],
      avg3: [],
      avg4: [],
      avg5: [],
      avg6: [],
      avg7: [],
      avg8: [],
      avg9: [],
      avmedian: [],
      ev: [],
      augprice: 0,
      sepprice: 0,
      octprice: 0,
      novprice: 0,
      augpour: 0,
      seppour: 0,
      octpour: 0,
      novpour: 0,
      decpour: 0,
      augnb: 0,
      sepnb: 0,
      octnb: 0,
      novnb: 0,
      decnb: 0,
      donnees1: [],
      lesprice: [],
      lesCast: [],
      maloba: [],
    };
    this.fillgeneralcomments = this.fillgeneralcomments.bind(this);
    this.renderTableData = this.renderTableData.bind(this);
  }
  componentWillMount() {
    this.faisQlq();
    this.graphi();
  }
  fillgeneralcomments(sanza2) {
    fetch("api/cinput/dernierda/" + sanza2 + "&Copper" + "&8")
      .then((response3) => {
        return response3.json();
      })
      .then((data3) => {
        let malobayaApi = data3.map((liloba) => {
          return {
            id: liloba._id,
            mois: liloba.mois,
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
  faisQlq() {
    function arrayObjectIndexOf(myArray, searchTerm, property) {
      for (var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) return i;
      }
      return -1;
    }
    //Récupération des price
    fetch("/api/beyi/comm/" + "Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        let counter = 0;
        let moisprice = [...this.state.moisprice];
        let price1 = [...this.state.price1];
        let price2 = [...this.state.price2];
        let price3 = [...this.state.price3];
        let price4 = [...this.state.price4];
        let price5 = [...this.state.price5];
        let price6 = [...this.state.price6];
        let price7 = [...this.state.price7];
        let price8 = [...this.state.price8];
        let price9 = [...this.state.price9];
        let talo = data.map((price) => {
          //put it in an array
          moisprice[counter + 1] = price.month;
          //put it in an array
          price1[counter + 1] = price.floorprice + price.constant1 * 0;
          price2[counter + 1] = price.floorprice + price.constant1 * 1;
          price3[counter + 1] = price.floorprice + price.constant1 * 2;
          price4[counter + 1] = price.floorprice + price.constant1 * 3;
          price5[counter + 1] = price.floorprice + price.constant1 * 4;
          price6[counter + 1] = price.floorprice + price.constant1 * 5;
          price7[counter + 1] = price.floorprice + price.constant1 * 6;
          price8[counter + 1] = price.floorprice + price.constant1 * 7;
          price9[counter + 1] = price.floorprice + price.constant1 * 8;
          if (moisprice[counter + 1] === "sepember 2020") {this.setState({ sepprice: counter + 1 });} 
            else if (moisprice[counter + 1] === "October 2020") {this.setState({ octprice: counter + 1 });} 
            else if (moisprice[counter + 1] === "November 2020") {this.setState({ novprice: counter + 1 });} 
            else if (moisprice[counter + 1] === "December 2020") {this.setState({ decprice: counter + 1 });}
          counter++;
          return {
            id: price._id,
          };
        });
        this.setState({ moisprice });
        this.setState({ price1 });
        this.setState({ price2 });
        this.setState({ price3 });
        this.setState({ price4 });
        this.setState({ price5 });
        this.setState({ price6 });
        this.setState({ price7 });
        this.setState({ price8 });
        this.setState({ price9 });
        this.graphi();
      })
      .catch((error) => {
        console.log(error);
      });
    //prendre les valeurs
    fetch("/api/menji/moymois/" + "Copper")
      .then((response1) => {
        return response1.json();
      })
      .then((data1) => {
        let lesCast = [...this.state.lesCast];
        let counter = 0;
        let moispour = [...this.state.moispour];
        let avg1 = [...this.state.avg1];
        let avg2 = [...this.state.avg2];
        let avg3 = [...this.state.avg3];
        let avg4 = [...this.state.avg4];
        let avg5 = [...this.state.avg5];
        let avg6 = [...this.state.avg6];
        let avg7 = [...this.state.avg7];
        let avg8 = [...this.state.avg8];
        let avg9 = [...this.state.avg9];
        let avmedian = [...this.state.avmedian];
        let ev = [...this.state.ev];
        counter = 0;
        let beyiFromApi = data1.map((price) => {
          //this.setState({ lesmoyennes: [].concat(moyenneEncore) });
          moispour[counter + 1] = price._id;
          avg1[counter + 1] = Math.round(price.avg1);
          avg2[counter + 1] = Math.round(price.avg2);
          avg3[counter + 1] = Math.round(price.avg3);
          avg4[counter + 1] = Math.round(price.avg4);
          avg5[counter + 1] = Math.round(price.avg5);
          avg6[counter + 1] = Math.round(price.avg6);
          avg7[counter + 1] = Math.round(price.avg7);
          avg8[counter + 1] = Math.round(price.avg8);
          avg9[counter + 1] = Math.round(price.avg9);
          avmedian[counter + 1] = Math.round(price.median);
          if (moispour[counter + 1] === "sepember 2020") {this.setState({ seppour: counter + 1 });} 
            else if (moispour[counter + 1] === "October 2020") {this.setState({ octpour: counter + 1 });} 
            else if (moispour[counter + 1] === "November 2020") {this.setState({ novpour: counter + 1 });} 
            else if (moispour[counter + 1] === "December 2020") {this.setState({ decpour: counter + 1 });}
          counter++;
          return {
            mois: price._id,
          };
        });
        this.setState({ moispour });
        this.setState({ avg1 });
        this.setState({ avg2 });
        this.setState({ avg3 });
        this.setState({ avg4 });
        this.setState({ avg5 });
        this.setState({ avg6 });
        this.setState({ avg7 });
        this.setState({ avg8 });
        this.setState({ avg9 });
        this.setState({ avmedian });
        this.graphi();
      })
      .catch((error1) => {
        console.log(error1);
      });
    //prendre les nombres des casts
    fetch("/api/menji/comptemois/" + "Copper")
      .then((response5) => {
        return response5.json();
      })
      .then((data5) => {
        let beyiFromApi = data5.map((price) => {
          if (price._id === "sepember 2020") {this.setState({ sepnb: price.compte });} 
            else if (price._id === "October 2020") {this.setState({ octnb: price.compte });} 
            else if (price._id === "November 2020") {this.setState({ novnb: price.compte });} 
            else if (price._id === "December 2020") {this.setState({ decnb: price.compte });}
          return {
            mois: price._id,
          };
        });
      })
      .catch((error1) => {
        console.log(error1);
      });
    this.graphi();
    this.trouveev();
    this.fillgeneralcomments("sepember 2020");
    this.fillgeneralcomments("October 2020");
    this.fillgeneralcomments("November 2020");
    this.fillgeneralcomments("December 2020");
  }
  graphi() {
    //graphique
    var donnees1 = [];
    //donnees = { ...this.state.donnees1 };
    donnees1.push({
      price: this.state.price1[this.state.seppour],
      Sep20: this.state.avg1[this.state.seppour],
      Oct20: this.state.avg1[this.state.octpour],
      Nov20: this.state.avg1[this.state.novpour],
      Dec20: this.state.avg1[this.state.decpour],
    });
    donnees1.push({
      price: this.state.price2[this.state.seppour],
      Sep20: this.state.avg2[this.state.seppour],
      Oct20: this.state.avg2[this.state.octpour],
      Nov20: this.state.avg2[this.state.novpour],
      Dec20: this.state.avg2[this.state.decpour],
    });
    donnees1.push({
      price: this.state.price3[this.state.seppour],
      Sep20: this.state.avg3[this.state.seppour],
      Oct20: this.state.avg3[this.state.octpour],
      Nov20: this.state.avg3[this.state.novpour],
      Dec20: this.state.avg3[this.state.decpour],
    });
    donnees1.push({
      price: this.state.price4[this.state.seppour],
      Sep20: this.state.avg4[this.state.seppour],
      Oct20: this.state.avg4[this.state.octpour],
      Nov20: this.state.avg4[this.state.novpour],
      Dec20: this.state.avg4[this.state.decpour],
    });
    donnees1.push({
      price: this.state.price5[this.state.seppour],
      Sep20: this.state.avg5[this.state.seppour],
      Oct20: this.state.avg5[this.state.octpour],
      Nov20: this.state.avg5[this.state.novpour],
      Dec20: this.state.avg5[this.state.decpour],
    });
    donnees1.push({
      price: this.state.price6[this.state.seppour],
      Sep20: this.state.avg6[this.state.seppour],
      Oct20: this.state.avg6[this.state.octpour],
      Nov20: this.state.avg6[this.state.novpour],
      Dec20: this.state.avg6[this.state.decpour],
    });
    donnees1.push({
      price: this.state.price7[this.state.seppour],
      Sep20: this.state.avg7[this.state.seppour],
      Oct20: this.state.avg7[this.state.octpour],
      Nov20: this.state.avg7[this.state.novpour],
      Dec20: this.state.avg7[this.state.decpour],
    });
    donnees1.push({
      price: this.state.price8[this.state.seppour],
      Sep20: this.state.avg8[this.state.seppour],
      Oct20: this.state.avg8[this.state.octpour],
      Nov20: this.state.avg8[this.state.novpour],
      Dec20: this.state.avg8[this.state.decpour],
    });
    donnees1.push({
      price: this.state.price9[this.state.seppour],
      Sep20: this.state.avg9[this.state.seppour],
      Oct20: this.state.avg9[this.state.octpour],
      Nov20: this.state.avg9[this.state.novpour],
      Dec20: this.state.avg9[this.state.decpour],
    });
    this.setState({ donnees1 });
    //console.log(donnees1);
    this.trouveev();
  }
  trouveev() {
    let ev = [...this.state.ev];
    console.log(this.state.seppour);
    ev =   
      (this.state.avg1[this.state.seppour] * this.state.price1[this.state.sepprice]) +
      (this.state.avg2[this.state.seppour] * this.state.price2[this.state.sepprice]) +
      (this.state.avg3[this.state.seppour] * this.state.price3[this.state.sepprice]) +
      (this.state.avg4[this.state.seppour] * this.state.price4[this.state.sepprice]) +
      (this.state.avg5[this.state.seppour] * this.state.price5[this.state.sepprice]) +
      (this.state.avg6[this.state.seppour] * this.state.price6[this.state.sepprice]) +
      (this.state.avg7[this.state.seppour] * this.state.price7[this.state.sepprice]) +
      (this.state.avg8[this.state.seppour] * this.state.price8[this.state.sepprice]) +
      (this.state.avg9[this.state.seppour] * this.state.price9[this.state.sepprice])
      this.setState({ ev });
      
     ev = 
      (this.state.avg1[this.state.octpour] * this.state.price1[this.state.octprice]) +
      (this.state.avg2[this.state.octpour] * this.state.price2[this.state.octprice]) +
      (this.state.avg3[this.state.octpour] * this.state.price3[this.state.octprice]) +
      (this.state.avg4[this.state.octpour] * this.state.price4[this.state.octprice]) +
      (this.state.avg5[this.state.octpour] * this.state.price5[this.state.octprice]) +
      (this.state.avg6[this.state.octpour] * this.state.price6[this.state.octprice]) +
      (this.state.avg7[this.state.octpour] * this.state.price7[this.state.octprice]) +
      (this.state.avg8[this.state.octpour] * this.state.price8[this.state.octprice]) +
      (this.state.avg9[this.state.octpour] * this.state.price9[this.state.octprice]) 
      this.setState({ ev });
    
    ev =  
      (this.state.avg1[this.state.novpour] * this.state.price1[this.state.novprice]) +
      (this.state.avg2[this.state.novpour] * this.state.price2[this.state.novprice]) +
      (this.state.avg3[this.state.novpour] * this.state.price3[this.state.novprice]) +
      (this.state.avg4[this.state.novpour] * this.state.price4[this.state.novprice]) +
      (this.state.avg5[this.state.novpour] * this.state.price5[this.state.novprice]) +
      (this.state.avg6[this.state.novpour] * this.state.price6[this.state.novprice]) +
      (this.state.avg7[this.state.novpour] * this.state.price7[this.state.novprice]) +
      (this.state.avg8[this.state.novpour] * this.state.price8[this.state.novprice]) +
      (this.state.avg9[this.state.novpour] * this.state.price9[this.state.novprice])
      this.setState({ ev });
    
    ev =  
      (this.state.avg1[this.state.decpour] * this.state.price1[this.state.decprice]) +
      (this.state.avg2[this.state.decpour] * this.state.price2[this.state.decprice]) +
      (this.state.avg3[this.state.decpour] * this.state.price3[this.state.decprice]) +
      (this.state.avg4[this.state.decpour] * this.state.price4[this.state.decprice]) +
      (this.state.avg5[this.state.decpour] * this.state.price5[this.state.decprice]) +
      (this.state.avg6[this.state.decpour] * this.state.price6[this.state.decprice]) +
      (this.state.avg7[this.state.decpour] * this.state.price7[this.state.decprice]) +
      (this.state.avg8[this.state.decpour] * this.state.price8[this.state.decprice]) +
      (this.state.avg9[this.state.decpour] * this.state.price9[this.state.decprice])
      this.setState({ ev });
  }
  renderTableData() {
    return this.state.lesprice.map((price, index) => {
      const {
        mois,
        price1,
        price2,
        price3,
        price4,
        price5,
        price6,
        price7,
        price8,
        price9,
      } = price; //destructuring
      return (
        <tr>
          <td rowSpan={"2"} align="center" width={"10%"}>
            {mois}
          </td>
          <td>{"EV"}</td>
          <td>{"No."}</td>
          <td>{price1}</td>
          <td>{price2}</td>
          <td>{price3}</td>
          <td>{price4}</td>
          <td>{price5}</td>
          <td>{price6}</td>
          <td>{price7}</td>
          <td>{price8}</td>
          <td>{price9}</td>
        </tr>
      );
    });
  }
  render() {
    const renderprice = (talo) => {
      return (
        <tr key={talo.id}>
          <td rowSpan="2" align="center" width="10%">
            {talo.mois}
          </td>
          <td>{"EV"}</td>
          <td>{"No."}</td>
          <td>{talo.price1}</td>
          <td>{talo.price2}</td>
          <td>{talo.price3}</td>
          <td>{talo.price4}</td>
          <td>{talo.price5}</td>
          <td>{talo.price6}</td>
          <td>{talo.price7}</td>
          <td>{talo.price8}</td>
          <td>{talo.price9}</td>
        </tr>
      );
    };
    const renderMaloba = (malobayaApi) => {
      return (
        <tr key={malobayaApi.id}>
          <td align="center">{malobayaApi.mois}</td>
          <td align="left">{malobayaApi.generalcomments}</td>
        </tr>
      );
    };
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td colSpan="12" align="center" width="70%"><b>Aggregation of All Copper Forecasts</b></td>
            </tr>
            <tr>
              <td rowSpan="2" align="center">{/*this.state.moisprice[this.state.sepprice]*/}<b>sepember 2020</b></td>
              <td align="center"><b>Expected Value</b></td>
              <td align="center"><b>No. Forecasts</b></td>
              <td align="center"><b>${this.state.price1[this.state.sepprice]}/MT</b></td>
              <td align="center"><b>${this.state.price2[this.state.sepprice]}/MT</b></td>
              <td align="center"><b>${this.state.price3[this.state.sepprice]}/MT</b></td>
              <td align="center"><b>${this.state.price4[this.state.sepprice]}/MT</b></td>
              <td align="center"><b>${this.state.price5[this.state.sepprice]}/MT</b></td>
              <td align="center"><b>${this.state.price6[this.state.sepprice]}/MT</b></td>
              <td align="center"><b>${this.state.price7[this.state.sepprice]}/MT</b></td>
              <td align="center"><b>${this.state.price8[this.state.sepprice]}/MT</b></td>
              <td align="center"><b>${this.state.price9[this.state.sepprice]}/MT</b></td>
              </tr>
            <tr>
              <td align="center"><b>${this.state.avmedian[this.state.seppour]}/MT</b></td>
              <td align="center"><b>{this.state.sepnb}</b></td>
              <td align="center">{this.state.avg1[this.state.seppour]}%</td>
              <td align="center">{this.state.avg2[this.state.seppour]}%</td>
              <td align="center">{this.state.avg3[this.state.seppour]}%</td>
              <td align="center">{this.state.avg4[this.state.seppour]}%</td>
              <td align="center">{this.state.avg5[this.state.seppour]}%</td>
              <td align="center">{this.state.avg6[this.state.seppour]}%</td>
              <td align="center">{this.state.avg7[this.state.seppour]}%</td>
              <td align="center">{this.state.avg8[this.state.seppour]}%</td>
              <td align="center">{this.state.avg9[this.state.seppour]}%</td>
            </tr>
            <tr>
              <td rowSpan="2" align="center">{/*this.state.moisprice[this.state.octprice]*/}<b>October 2020</b></td>
              <td align="center"><b>Expected Value</b></td>
              <td align="center"><b>No. Forecasts</b></td>
              <td align="center"><b>${this.state.price1[this.state.octprice]}/MT</b></td>
              <td align="center"><b>${this.state.price2[this.state.octprice]}/MT</b></td>
              <td align="center"><b>${this.state.price3[this.state.octprice]}/MT</b></td>
              <td align="center"><b>${this.state.price4[this.state.octprice]}/MT</b></td>
              <td align="center"><b>${this.state.price5[this.state.octprice]}/MT</b></td>
              <td align="center"><b>${this.state.price6[this.state.octprice]}/MT</b></td>
              <td align="center"><b>${this.state.price7[this.state.octprice]}/MT</b></td>
              <td align="center"><b>${this.state.price8[this.state.octprice]}/MT</b></td>
              <td align="center"><b>${this.state.price9[this.state.octprice]}/MT</b></td>
            </tr>
            <tr>
              <td align="center"><b>${this.state.avmedian[this.state.octpour]}/MT</b></td>
              <td align="center"><b>{this.state.octnb}</b></td>
              <td align="center">{this.state.avg1[this.state.octpour]}%</td>
              <td align="center">{this.state.avg2[this.state.octpour]}%</td>
              <td align="center">{this.state.avg3[this.state.octpour]}%</td>
              <td align="center">{this.state.avg4[this.state.octpour]}%</td>
              <td align="center">{this.state.avg5[this.state.octpour]}%</td>
              <td align="center">{this.state.avg6[this.state.octpour]}%</td>
              <td align="center">{this.state.avg7[this.state.octpour]}%</td>
              <td align="center">{this.state.avg8[this.state.octpour]}%</td>
              <td align="center">{this.state.avg9[this.state.octpour]}%</td>
            </tr>
            <tr>
              <td rowSpan="2" align="center">
                {/*this.state.moisprice[this.state.novprice]*/}
                <b>November 2020</b>
              </td>
              <td align="center">
		            <b>Expected Value</b>
	            </td>
              <td align="center">
		          <b>No. Forecasts</b>
	            </td>
              <td align="center">
		            <b>${this.state.price1[this.state.novprice]}/MT</b>
	            </td>
              <td align="center">
		            <b>${this.state.price2[this.state.novprice]}/MT</b>
	            </td>
              <td align="center">
		            <b>${this.state.price3[this.state.novprice]}/MT</b>
	            </td>
              <td align="center">
		            <b>${this.state.price4[this.state.novprice]}/MT</b>
	            </td>
              <td align="center">
		            <b>${this.state.price5[this.state.novprice]}/MT</b>
	            </td>
              <td align="center">
		            <b>${this.state.price6[this.state.novprice]}/MT</b>
	            </td>
              <td align="center">
		            <b>${this.state.price7[this.state.novprice]}/MT</b>
	            </td>
              <td align="center">
		            <b>${this.state.price8[this.state.novprice]}/MT</b>
	            </td>
              <td align="center">
		            <b>${this.state.price9[this.state.novprice]}/MT</b>
	            </td>
            </tr>
            <tr>
              <td align="center"><b>${this.state.avmedian[this.state.novpour]}/MT</b></td>
              <td align="center"><b>{this.state.novnb}</b></td>
              <td align="center">{this.state.avg1[this.state.novpour]}%</td>
              <td align="center">{this.state.avg2[this.state.novpour]}%</td>
              <td align="center">{this.state.avg3[this.state.novpour]}%</td>
              <td align="center">{this.state.avg4[this.state.novpour]}%</td>
              <td align="center">{this.state.avg5[this.state.novpour]}%</td>
              <td align="center">{this.state.avg6[this.state.novpour]}%</td>
              <td align="center">{this.state.avg7[this.state.novpour]}%</td>
              <td align="center">{this.state.avg8[this.state.novpour]}%</td>
              <td align="center">{this.state.avg9[this.state.novpour]}%</td>
            </tr>
            <tr>
              <td rowSpan="2" align="center">{/*this.state.moisprice[this.state.decprice]*/}<b>December 2020</b></td>
              <td align="center"><b>Expected Value</b></td>
              <td align="center"><b>No. Forecasts</b></td>
              <td align="center"><b>${this.state.price1[this.state.decprice]}/MT</b></td>
              <td align="center"><b>${this.state.price2[this.state.decprice]}/MT</b></td>
              <td align="center"><b>${this.state.price3[this.state.decprice]}/MT</b></td>
              <td align="center"><b>${this.state.price4[this.state.decprice]}/MT</b></td>
              <td align="center"><b>${this.state.price5[this.state.decprice]}/MT</b></td>
              <td align="center"><b>${this.state.price6[this.state.decprice]}/MT</b></td>
              <td align="center"><b>${this.state.price7[this.state.decprice]}/MT</b></td>
              <td align="center"><b>${this.state.price8[this.state.decprice]}/Mt</b></td>
              <td align="center"><b>${this.state.price9[this.state.decprice]}/MT</b></td>
            </tr>
            <tr>
              <td align="center"><b>${this.state.avmedian[this.state.decpour]}/MT</b></td>
              <td align="center"><b>{this.state.decnb}</b></td>
              <td align="center">{this.state.avg1[this.state.decpour]}%</td>
              <td align="center">{this.state.avg2[this.state.decpour]}%</td>
              <td align="center">{this.state.avg3[this.state.decpour]}%</td>
              <td align="center">{this.state.avg4[this.state.decpour]}%</td>
              <td align="center">{this.state.avg5[this.state.decpour]}%</td>
              <td align="center">{this.state.avg6[this.state.decpour]}%</td>
              <td align="center">{this.state.avg7[this.state.decpour]}%</td>
              <td align="center">{this.state.avg8[this.state.decpour]}%</td>
              <td align="center">{this.state.avg9[this.state.decpour]}%</td>
            </tr>
            <tr>
            <td rowSpan="12" colSpan="12" align="center">
                <div style={{ width: "100%", height: 400 }}>
                  <ResponsiveContainer>
                    <BarChart
                      layout="vertical"
                      width={500}
                      height={400}
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
                      <Bar dataKey="Sep20" fill="#00CC00" />
                      <Bar dataKey="Oct20" fill="#0000FF" />
                      <Bar dataKey="Nov20" fill="#FFC000" />
                      <Bar dataKey="Dec20" fill="#FF0000" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td colSpan="2" align="center" width="70%">
                <b>Most Recent General Comments</b>
              </td>
            </tr>
            {this.state.maloba.map(renderMaloba)}
          </tbody>
        </table>
      </div>
    );
  }
}
export default CSumFcast;
