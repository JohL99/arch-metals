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
      moisprix: [],
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
      sept20prix: 0,
      oct20prix: 0,
      nov20prix: 0,
      dec20prix: 0,
      mar21prix: 0,
      jun21prix: 0,
      sept21prix: 0,
      dec21prix: 0,
      sept20pour: 0,
      oct20pour: 0,
      nov20pour: 0,
      dec20pour: 0,
      mar21pour: 0,
      jun21pour: 0,
      sept21pour: 0,
      dec21pour: 0,
      sept20nb: 0,
      oct20nb: 0,
      nov20nb: 0,
      dec20nb: 0,
      mar21nb: 0,
      jun21nb: 0,
      sept21nb: 0,
      dec21nb: 0,
      EVsep20: 0,
      EVoct20: 0,
      EVnov20: 0,
      EVdec20: 0,
      EVmar21: 0,
      EVjun21: 0,
      EVsep21: 0,
      EVdec21: 0,
      donnees20: [],
      donnees21: [],
      lesprix: [],
      lesCast: [],
      maloba: [],
    };
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    this.fillgeneralcomments = this.fillgeneralcomments.bind(this);
    this.renderTableData = this.renderTableData.bind(this);
  }
  componentWillMount() {
    this.faisQlq();
    this.graphi();
  }
  componentDidMount(){
    window.scrollTo(0, 0);
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
    //Récupération des prix
    fetch("/api/beyi/comm/" + "Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        let compteur = 0;
        let moisprix = [...this.state.moisprix];
        let price1 = [...this.state.price1];
        let price2 = [...this.state.price2];
        let price3 = [...this.state.price3];
        let price4 = [...this.state.price4];
        let price5 = [...this.state.price5];
        let price6 = [...this.state.price6];
        let price7 = [...this.state.price7];
        let price8 = [...this.state.price8];
        let price9 = [...this.state.price9];
        let talo = data.map((mutengo) => {
          //put it in an array
          moisprix[compteur + 1] = mutengo.month;
          //put it in an array
          price1[compteur + 1] = mutengo.floorprice + mutengo.constant1 * 0;
          price2[compteur + 1] = mutengo.floorprice + mutengo.constant1 * 1;
          price3[compteur + 1] = mutengo.floorprice + mutengo.constant1 * 2;
          price4[compteur + 1] = mutengo.floorprice + mutengo.constant1 * 3;
          price5[compteur + 1] = mutengo.floorprice + mutengo.constant1 * 4;
          price6[compteur + 1] = mutengo.floorprice + mutengo.constant1 * 5;
          price7[compteur + 1] = mutengo.floorprice + mutengo.constant1 * 6;
          price8[compteur + 1] = mutengo.floorprice + mutengo.constant1 * 7;
          price9[compteur + 1] = mutengo.floorprice + mutengo.constant1 * 8;
          if (moisprix[compteur + 1] === "September 2020") {this.setState({ sept20prix: compteur + 1 });} 
            else if (moisprix[compteur + 1] === "October 2020") {this.setState({ oct20prix: compteur + 1 });} 
            else if (moisprix[compteur + 1] === "November 2020") {this.setState({ nov20prix: compteur + 1 });} 
            else if (moisprix[compteur + 1] === "December 2020") {this.setState({ dec20prix: compteur + 1 });}
            else if (moisprix[compteur + 1] === "March 2021") {this.setState({ mar21prix: compteur + 1 });} 
            else if (moisprix[compteur + 1] === "June 2021") {this.setState({ jun21prix: compteur + 1 });} 
            else if (moisprix[compteur + 1] === "September 2021") {this.setState({ sep21prix: compteur + 1 });} 
            else if (moisprix[compteur + 1] === "December 2021") {this.setState({ dec21prix: compteur + 1 });}
          compteur++;
          return {
            id: mutengo._id,
          };
        });
        this.setState({ moisprix });
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
        let compteur = 0;
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
        compteur = 0;
        let beyiFromApi = data1.map((prix) => {
          //this.setState({ lesmoyennes: [].concat(moyenneEncore) });
          moispour[compteur + 1] = prix._id;
          avg1[compteur + 1] = Math.round(prix.avg1);
          avg2[compteur + 1] = Math.round(prix.avg2);
          avg3[compteur + 1] = Math.round(prix.avg3);
          avg4[compteur + 1] = Math.round(prix.avg4);
          avg5[compteur + 1] = Math.round(prix.avg5);
          avg6[compteur + 1] = Math.round(prix.avg6);
          avg7[compteur + 1] = Math.round(prix.avg7);
          avg8[compteur + 1] = Math.round(prix.avg8);
          avg9[compteur + 1] = Math.round(prix.avg9);
          avmedian[compteur + 1] = Math.round(prix.median);
          if (moispour[compteur + 1] === "September 2020") {this.setState({ sept20pour: compteur + 1 });} 
            else if (moispour[compteur + 1] === "October 2020") {this.setState({ oct20pour: compteur + 1 });} 
            else if (moispour[compteur + 1] === "November 2020") {this.setState({ nov20pour: compteur + 1 });} 
            else if (moispour[compteur + 1] === "December 2020") {this.setState({ dec20pour: compteur + 1 });}
            else if (moispour[compteur + 1] === "March 2021") {this.setState({ mar21pour: compteur + 1 });} 
            else if (moispour[compteur + 1] === "June 2021") {this.setState({ jun21pour: compteur + 1 });} 
            else if (moispour[compteur + 1] === "September 2021") {this.setState({ sept21pour: compteur + 1 });} 
            else if (moispour[compteur + 1] === "December 2021") {this.setState({ dec21pour: compteur + 1 });}
          compteur++;
          return {
            mois: prix._id,
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
        let beyiFromApi = data5.map((prix) => {
          if (prix._id === "September 2020") {this.setState({ sept20nb: prix.compte });} 
            else if (prix._id === "October 2020") {this.setState({ oct20nb: prix.compte });} 
            else if (prix._id === "November 2020") {this.setState({ nov20nb: prix.compte });} 
            else if (prix._id === "December 2020") {this.setState({ dec20nb: prix.compte });}
            else if (prix._id === "March 2021") {this.setState({ mar21nb: prix.compte });} 
            else if (prix._id === "June 2021") {this.setState({ jun21nb: prix.compte });} 
            else if (prix._id === "September 2021") {this.setState({ sept21nb: prix.compte });} 
            else if (prix._id === "December 2021") {this.setState({ dec21nb: prix.compte });}
          return {
            mois: prix._id,
          };
        });
      })
      .catch((error1) => {
        console.log(error1);
      });
    this.graphi();
    //this.fillgeneralcomments("September 2020");
    //this.fillgeneralcomments("October 2020");
    //this.fillgeneralcomments("November 2020");
    //this.fillgeneralcomments("December 2020");
    //this.fillgeneralcomments("March 2021");
    //this.fillgeneralcomments("June 2021");
    //this.fillgeneralcomments("September 2021");
    //this.fillgeneralcomments("December 2021");
  }
  graphi() {
    //graphique
    var donnees20 = [];
      donnees20.push({
      price: this.state.price1[this.state.sept20pour],
      Sep20: this.state.avg1[this.state.sept20pour],
      Oct20: this.state.avg1[this.state.oct20pour],
      Nov20: this.state.avg1[this.state.nov20pour],
      Dec20: this.state.avg1[this.state.dec20pour],
    });
    donnees20.push({
      price: this.state.price2[this.state.sept20pour],
      Sep20: this.state.avg2[this.state.sept20pour],
      Oct20: this.state.avg2[this.state.oct20pour],
      Nov20: this.state.avg2[this.state.nov20pour],
      Dec20: this.state.avg2[this.state.dec20pour],
    });
    donnees20.push({
      price: this.state.price3[this.state.sept20pour],
      Sep20: this.state.avg3[this.state.sept20pour],
      Oct20: this.state.avg3[this.state.oct20pour],
      Nov20: this.state.avg3[this.state.nov20pour],
      Dec20: this.state.avg3[this.state.dec20pour],
    });
    donnees20.push({
      price: this.state.price4[this.state.sept20pour],
      Sep20: this.state.avg4[this.state.sept20pour],
      Oct20: this.state.avg4[this.state.octpour],
      Nov20: this.state.avg4[this.state.nov20pour],
      Dec20: this.state.avg4[this.state.dec20pour],
    });
    donnees20.push({
      price: this.state.price5[this.state.sept20pour],
      Sep20: this.state.avg5[this.state.sept20pour],
      Oct20: this.state.avg5[this.state.oct20pour],
      Nov20: this.state.avg5[this.state.nov20pour],
      Dec20: this.state.avg5[this.state.dec20pour],
    });
    donnees20.push({
      price: this.state.price6[this.state.sept20pour],
      Sep20: this.state.avg6[this.state.sept20pour],
      Oct20: this.state.avg6[this.state.oct20pour],
      Nov20: this.state.avg6[this.state.nov20pour],
      Dec20: this.state.avg6[this.state.dec20pour],
    });
    donnees20.push({
      price: this.state.price7[this.state.sept20pour],
      Sep20: this.state.avg7[this.state.sept20pour],
      Oct20: this.state.avg7[this.state.oct20pour],
      Nov20: this.state.avg7[this.state.nov20pour],
      Dec20: this.state.avg7[this.state.dec20pour],
    });
    donnees20.push({
      price: this.state.price8[this.state.sept20pour],
      Sep20: this.state.avg8[this.state.sept20pour],
      Oct20: this.state.avg8[this.state.oct20pour],
      Nov20: this.state.avg8[this.state.nov20pour],
      Dec20: this.state.avg8[this.state.dec20pour],
    });
    donnees20.push({
      price: this.state.price9[this.state.sept20pour],
      Sep20: this.state.avg9[this.state.sept20pour],
      Oct20: this.state.avg9[this.state.oct20pour],
      Nov20: this.state.avg9[this.state.nov20pour],
      Dec20: this.state.avg9[this.state.dec20pour],
    });
    this.setState({ donnees20 });
    
    var donnees21 = [];
      donnees21.push({
      price: this.state.price1[this.state.mar21pour],
      Mar21: this.state.avg1[this.state.mar21pour],
      Jun21: this.state.avg1[this.state.jun21pour],
      Sep21: this.state.avg1[this.state.sept21pour],
      Dec21: this.state.avg1[this.state.dec21pour],
    });
    donnees21.push({
      price: this.state.price2[this.state.mar21pour],
      Mar21: this.state.avg2[this.state.mar21pour],
      Jun21: this.state.avg2[this.state.jun21pour],
      Sep21: this.state.avg2[this.state.sept21pour],
      Dec21: this.state.avg2[this.state.dec21pour],
    });
    donnees21.push({
      price: this.state.price3[this.state.mar21pour],
      Mar21: this.state.avg3[this.state.mar21pour],
      Jun21: this.state.avg3[this.state.jun21pour],
      Sep21: this.state.avg3[this.state.sept21pour],
      Dec21: this.state.avg3[this.state.dec21pour],
    });
    donnees21.push({
      price: this.state.price4[this.state.mar21pour],
      Mar21: this.state.avg4[this.state.mar21pour],
      Jun21: this.state.avg4[this.state.jun21pour],
      Sep21: this.state.avg4[this.state.sept21pour],
      Dec21: this.state.avg4[this.state.dec21pour],
    });
    donnees21.push({
      price: this.state.price5[this.state.mar21pour],
      Mar21: this.state.avg5[this.state.mar21pour],
      Jun21: this.state.avg5[this.state.jun21pour],
      Sep21: this.state.avg5[this.state.sept21pour],
      Dec21: this.state.avg5[this.state.dec21pour],
    });
    donnees21.push({
      price: this.state.price6[this.state.mar21pour],
      Mar21: this.state.avg6[this.state.mar21pour],
      Jun21: this.state.avg6[this.state.jun21pour],
      Sep21: this.state.avg6[this.state.sep21pour],
      Dec21: this.state.avg6[this.state.dec21pour],
    });
    donnees21.push({
      price: this.state.price7[this.state.mar21pour],
      Mar21: this.state.avg7[this.state.mar21pour],
      Jun21: this.state.avg7[this.state.jun21pour],
      Sep21: this.state.avg7[this.state.sept21pour],
      Dec21: this.state.avg7[this.state.dec21pour],
    });
    donnees21.push({
      price: this.state.price8[this.state.mar21pour],
      Mar21: this.state.avg8[this.state.mar21pour],
      Jun21: this.state.avg8[this.state.jun21pour],
      Sep21: this.state.avg8[this.state.sept21pour],
      Dec21: this.state.avg8[this.state.dec21pour],
    });
    donnees21.push({
      price: this.state.price9[this.state.mar21pour],
      Mar21: this.state.avg9[this.state.mar21pour],
      Jun21: this.state.avg9[this.state.jun21pour],
      Sep21: this.state.avg9[this.state.sept21pour],
      Dec21: this.state.avg9[this.state.dec21pour],
    });
    this.setState({ donnees21 });

    this.trouveev();
  }
  
  trouveev() {
    var EVSEP20 = 
      Math.round(this.state.avg1[this.state.sept20pour]) * this.state.price1[this.state.sept20prix] +
      Math.round(this.state.avg2[this.state.sept20pour]) * this.state.price2[this.state.sept20prix] +
      Math.round(this.state.avg3[this.state.sept20pour]) * this.state.price3[this.state.sept20prix] +
      Math.round(this.state.avg4[this.state.sept20pour]) * this.state.price4[this.state.sept20prix] +
      Math.round(this.state.avg5[this.state.sept20pour]) * this.state.price5[this.state.sept20prix] +
      Math.round(this.state.avg6[this.state.sept20pour]) * this.state.price6[this.state.sept20prix] +
      Math.round(this.state.avg7[this.state.sept20pour]) * this.state.price7[this.state.sept20prix] +
      Math.round(this.state.avg8[this.state.sept20pour]) * this.state.price7[this.state.sept20prix] +
      Math.round(this.state.avg9[this.state.sept20pour]) * this.state.price8[this.state.sept20prix]
      this.setState({EVSEP20})
      var EVsep20 = Math.round(EVSEP20 / 100);
      this.setState({EVsep20: EVsep20})
        
    var EVOCT20 = 
      Math.round(this.state.avg1[this.state.oct20pour]) * this.state.price1[this.state.sept20prix] +
      Math.round(this.state.avg2[this.state.oct20pour]) * this.state.price2[this.state.sept20prix] +
      Math.round(this.state.avg3[this.state.oct20pour]) * this.state.price3[this.state.sept20prix] +
      Math.round(this.state.avg4[this.state.oct20pour]) * this.state.price4[this.state.sept20prix] +
      Math.round(this.state.avg5[this.state.oct20pour]) * this.state.price5[this.state.sept20prix] +
      Math.round(this.state.avg6[this.state.oct20pour]) * this.state.price6[this.state.sept20prix] +
      Math.round(this.state.avg7[this.state.oct20pour]) * this.state.price7[this.state.sept20prix] +
      Math.round(this.state.avg8[this.state.oct20pour]) * this.state.price7[this.state.sept20prix] +
      Math.round(this.state.avg9[this.state.oct20pour]) * this.state.price8[this.state.sept20prix]
      this.setState({EVOCT20})
      var EVoct20 = Math.round(EVOCT20 / 100);
      this.setState({EVoct20: EVoct20})
      
    var EVNOV20 = 
      Math.round(this.state.avg1[this.state.nov20pour]) * this.state.price1[this.state.sept20prix] +
      Math.round(this.state.avg2[this.state.nov20pour]) * this.state.price2[this.state.sept20prix] +
      Math.round(this.state.avg3[this.state.nov20pour]) * this.state.price3[this.state.sept20prix] +
      Math.round(this.state.avg4[this.state.nov20pour]) * this.state.price4[this.state.sept20prix] +
      Math.round(this.state.avg5[this.state.nov20pour]) * this.state.price5[this.state.sept20prix] +
      Math.round(this.state.avg6[this.state.nov20pour]) * this.state.price6[this.state.sept20prix] +
      Math.round(this.state.avg7[this.state.nov20pour]) * this.state.price7[this.state.sept20prix] +
      Math.round(this.state.avg8[this.state.nov20pour]) * this.state.price7[this.state.sept20prix] +
      Math.round(this.state.avg9[this.state.nov20pour]) * this.state.price8[this.state.sept20prix]
      this.setState({EVNOV20})
      var EVnov20 = Math.round(EVNOV20 / 100);
      this.setState({EVnov20: EVnov20})
          
    var EVDEC20 =
      Math.round(this.state.avg1[this.state.dec20pour]) * this.state.price1[this.state.sept20prix] +
      Math.round(this.state.avg2[this.state.dec20pour]) * this.state.price2[this.state.sept20prix] +
      Math.round(this.state.avg3[this.state.dec20pour]) * this.state.price3[this.state.sept20prix] +
      Math.round(this.state.avg4[this.state.dec20pour]) * this.state.price4[this.state.sept20prix] +
      Math.round(this.state.avg5[this.state.dec20pour]) * this.state.price5[this.state.sept20prix] +
      Math.round(this.state.avg6[this.state.dec20pour]) * this.state.price6[this.state.sept20prix] +
      Math.round(this.state.avg7[this.state.dec20pour]) * this.state.price7[this.state.sept20prix] +
      Math.round(this.state.avg8[this.state.dec20pour]) * this.state.price7[this.state.sept20prix] +
      Math.round(this.state.avg9[this.state.dec20pour]) * this.state.price8[this.state.sept20prix]
      this.setState({EVDEC20})
      var EVdec20 = Math.round(EVDEC20 / 100);
      this.setState({EVdec20: EVdec20})

    var EVMAR21 =
      Math.round(this.state.avg1[this.state.mar21pour]) * this.state.price1[this.state.mar21prix] +
      Math.round(this.state.avg2[this.state.mar21pour]) * this.state.price2[this.state.mar21prix] +
      Math.round(this.state.avg3[this.state.mar21pour]) * this.state.price3[this.state.mar21prix] +
      Math.round(this.state.avg4[this.state.mar21pour]) * this.state.price4[this.state.mar21prix] +
      Math.round(this.state.avg5[this.state.mar21pour]) * this.state.price5[this.state.mar21prix] +
      Math.round(this.state.avg6[this.state.mar21pour]) * this.state.price6[this.state.mar21prix] +
      Math.round(this.state.avg7[this.state.mar21pour]) * this.state.price7[this.state.mar21prix] +
      Math.round(this.state.avg8[this.state.mar21pour]) * this.state.price7[this.state.mar21prix] +
      Math.round(this.state.avg9[this.state.mar21pour]) * this.state.price8[this.state.mar21prix]
      this.setState({EVMAR21})
      var EVmar21 = Math.round(EVMAR21 / 100);
      this.setState({EVmar21: EVmar21})

    var EVJUN21 =
      Math.round(this.state.avg1[this.state.jun21pour]) * this.state.price1[this.state.mar21prix] +
      Math.round(this.state.avg2[this.state.jun21pour]) * this.state.price2[this.state.mar21prix] +
      Math.round(this.state.avg3[this.state.jun21pour]) * this.state.price3[this.state.mar21prix] +
      Math.round(this.state.avg4[this.state.jun21pour]) * this.state.price4[this.state.mar21prix] +
      Math.round(this.state.avg5[this.state.jun21pour]) * this.state.price5[this.state.mar21prix] +
      Math.round(this.state.avg6[this.state.jun21pour]) * this.state.price6[this.state.mar21prix] +
      Math.round(this.state.avg7[this.state.jun21pour]) * this.state.price7[this.state.mar21prix] +
      Math.round(this.state.avg8[this.state.jun21pour]) * this.state.price7[this.state.mar21prix] +
      Math.round(this.state.avg9[this.state.jun21pour]) * this.state.price8[this.state.mar21prix]
      this.setState({EVJUN21})
      var EVjun21 = Math.round(EVJUN21 / 100);
      this.setState({EVjun21: EVjun21})
    
    var EVSEP21 =
      Math.round(this.state.avg1[this.state.sept21pour]) * this.state.price1[this.state.mar21prix] +
      Math.round(this.state.avg2[this.state.sept21pour]) * this.state.price2[this.state.mar21prix] +
      Math.round(this.state.avg3[this.state.sept21pour]) * this.state.price3[this.state.mar21prix] +
      Math.round(this.state.avg4[this.state.sept21pour]) * this.state.price4[this.state.mar21prix] +
      Math.round(this.state.avg5[this.state.sept21pour]) * this.state.price5[this.state.mar21prix] +
      Math.round(this.state.avg6[this.state.sept21pour]) * this.state.price6[this.state.mar21prix] +
      Math.round(this.state.avg7[this.state.sept21pour]) * this.state.price7[this.state.mar21prix] +
      Math.round(this.state.avg8[this.state.sept21pour]) * this.state.price7[this.state.mar21prix] +
      Math.round(this.state.avg9[this.state.sept21pour]) * this.state.price8[this.state.mar21prix]
      this.setState({EVSEP21})
      var EVsep21 = Math.round(EVSEP21 / 100);
      this.setState({EVsep21: EVsep21})

    var EVDEC21 =
      Math.round(this.state.avg1[this.state.dec21pour]) * this.state.price1[this.state.mar21prix] +
      Math.round(this.state.avg2[this.state.dec21pour]) * this.state.price2[this.state.mar21prix] +
      Math.round(this.state.avg3[this.state.dec21pour]) * this.state.price3[this.state.mar21prix] +
      Math.round(this.state.avg4[this.state.dec21pour]) * this.state.price4[this.state.mar21prix] +
      Math.round(this.state.avg5[this.state.dec21pour]) * this.state.price5[this.state.mar21prix] +
      Math.round(this.state.avg6[this.state.dec21pour]) * this.state.price6[this.state.mar21prix] +
      Math.round(this.state.avg7[this.state.dec21pour]) * this.state.price7[this.state.mar21prix] +
      Math.round(this.state.avg8[this.state.dec21pour]) * this.state.price7[this.state.mar21prix] +
      Math.round(this.state.avg9[this.state.dec21pour]) * this.state.price8[this.state.mar21prix]
      this.setState({EVDEC21})
      var EVdec21 = Math.round(EVDEC21 / 100);
      this.setState({EVdec21: EVdec21})

    };
    renderTableData() {
    return this.state.lesprix.map((prix, index) => {
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
      } = prix; //destructuring
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
    const renderPrix = (talo) => {
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
      if(malobayaApi.id !== ""){
        return (
          <tr key={malobayaApi.id}>
            <td align="center"><b>{malobayaApi.mois}</b></td>
            <td align="left">{malobayaApi.generalcomments}</td>
          </tr>
        );
      }
    };
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td colSpan="12" align="center" width="100%"><b>Aggregation of All Copper Forecasts - 2020</b></td>
            </tr>
            <tr>
              <td align="center"><b>Month</b></td>
              <td align="center"><b>Expected Value</b></td>
              <td align="center"><b>No. Forecasts</b></td>
              <td align="center"><b>${this.state.price1[this.state.sept20prix]}/mt</b></td>
              <td align="center"><b>${this.state.price2[this.state.sept20prix]}/mt</b></td>
              <td align="center"><b>${this.state.price3[this.state.sept20prix]}/mt</b></td>
              <td align="center"><b>${this.state.price4[this.state.sept20prix]}/mt</b></td>
              <td align="center"><b>${this.state.price5[this.state.sept20prix]}/mt</b></td>
              <td align="center"><b>${this.state.price6[this.state.sept20prix]}/mt</b></td>
              <td align="center"><b>${this.state.price7[this.state.sept20prix]}/mt</b></td>
              <td align="center"><b>${this.state.price8[this.state.sept20prix]}/mt</b></td>
              <td align="center"><b>${this.state.price9[this.state.sept20prix]}/mt</b></td>
              </tr>
            <tr>
              <td align="center">{/*this.state.moisprix[this.state.septprix]*/}<b>September 2020</b></td>
              <td align="center"><b>${[this.state.EVsep20]}/mt</b></td>
              <td align="center"><b>{this.state.sept20nb}</b></td>
              <td align="center">{this.state.avg1[this.state.sept20pour]}%</td>
              <td align="center">{this.state.avg2[this.state.sept20pour]}%</td>
              <td align="center">{this.state.avg3[this.state.sept20pour]}%</td>
              <td align="center">{this.state.avg4[this.state.sept20pour]}%</td>
              <td align="center">{this.state.avg5[this.state.sept20pour]}%</td>
              <td align="center">{this.state.avg6[this.state.sept20pour]}%</td>
              <td align="center">{this.state.avg7[this.state.sept20pour]}%</td>
              <td align="center">{this.state.avg8[this.state.sept20pour]}%</td>
              <td align="center">{this.state.avg9[this.state.sept20pour]}%</td>
            </tr>
            <tr>
              <td align="center">{/*this.state.moisprix[this.state.octprix]*/}<b>October 2020</b></td>
              <td align="center"><b>${[this.state.EVoct20]}/mt</b></td>
              <td align="center"><b>{this.state.oct20nb}</b></td>
              <td align="center">{this.state.avg1[this.state.oct20pour]}%</td>
              <td align="center">{this.state.avg2[this.state.oct20pour]}%</td>
              <td align="center">{this.state.avg3[this.state.oct20pour]}%</td>
              <td align="center">{this.state.avg4[this.state.oct20pour]}%</td>
              <td align="center">{this.state.avg5[this.state.oct20pour]}%</td>
              <td align="center">{this.state.avg6[this.state.oct20pour]}%</td>
              <td align="center">{this.state.avg7[this.state.oct20pour]}%</td>
              <td align="center">{this.state.avg8[this.state.oct20pour]}%</td>
              <td align="center">{this.state.avg9[this.state.oct20pour]}%</td>
            </tr>
            <tr>
              <td align="center">{/*this.state.moisprix[this.state.novprix]*/}<b>November 2020</b></td>
              <td align="center"><b>${[this.state.EVnov20]}/mt</b></td>
              <td align="center"><b>{this.state.nov20nb}</b></td>
              <td align="center">{this.state.avg1[this.state.nov20pour]}%</td>
              <td align="center">{this.state.avg2[this.state.nov20pour]}%</td>
              <td align="center">{this.state.avg3[this.state.nov20pour]}%</td>
              <td align="center">{this.state.avg4[this.state.nov20pour]}%</td>
              <td align="center">{this.state.avg5[this.state.nov20pour]}%</td>
              <td align="center">{this.state.avg6[this.state.nov20pour]}%</td>
              <td align="center">{this.state.avg7[this.state.nov20pour]}%</td>
              <td align="center">{this.state.avg8[this.state.nov20pour]}%</td>
              <td align="center">{this.state.avg9[this.state.nov20pour]}%</td>
            </tr>
            <tr>
              <td align="center">{/*this.state.moisprix[this.state.decprix]*/}<b>December 2020</b></td>
              <td align="center"><b>${[this.state.EVdec20]}/mt</b></td>
              <td align="center"><b>{this.state.dec20nb}</b></td>
              <td align="center">{this.state.avg1[this.state.dec20pour]}%</td>
              <td align="center">{this.state.avg2[this.state.dec20pour]}%</td>
              <td align="center">{this.state.avg3[this.state.dec20pour]}%</td>
              <td align="center">{this.state.avg4[this.state.dec20pour]}%</td>
              <td align="center">{this.state.avg5[this.state.dec20pour]}%</td>
              <td align="center">{this.state.avg6[this.state.dec20pour]}%</td>
              <td align="center">{this.state.avg7[this.state.dec20pour]}%</td>
              <td align="center">{this.state.avg8[this.state.dec20pour]}%</td>
              <td align="center">{this.state.avg9[this.state.dec20pour]}%</td>
            </tr>
            <tr>
            <td rowSpan="12" colSpan="12" align="center">
                <div style={{ width: "60%", height: 250 }}>
                  <ResponsiveContainer>
                    <BarChart
                      layout="horizontal"
                      width={800}
                      height={200}
                      data={this.state.donnees20}
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
              <td colSpan="12" align="center" width="100%"><b>Aggregation of All Copper Forecasts - 2021</b></td>
            </tr>
            <tr>
              <td align="center"><b>Month</b></td>
              <td align="center"><b>Expected Value</b></td>
              <td align="center"><b>No. Forecasts</b></td>
              <td align="center"><b>${this.state.price1[this.state.mar21prix]}/mt</b></td>
              <td align="center"><b>${this.state.price2[this.state.mar21prix]}/mt</b></td>
              <td align="center"><b>${this.state.price3[this.state.mar21prix]}/mt</b></td>
              <td align="center"><b>${this.state.price4[this.state.mar21prix]}/mt</b></td>
              <td align="center"><b>${this.state.price5[this.state.mar21prix]}/mt</b></td>
              <td align="center"><b>${this.state.price6[this.state.mar21prix]}/mt</b></td>
              <td align="center"><b>${this.state.price7[this.state.mar21prix]}/mt</b></td>
              <td align="center"><b>${this.state.price8[this.state.mar21prix]}/mt</b></td>
              <td align="center"><b>${this.state.price9[this.state.mar21prix]}/mt</b></td>
              </tr>
            <tr>
              <td align="center">{/*this.state.moisprix[this.state.mar21prix]*/}<b>March 2021</b></td>
              <td align="center"><b>${[this.state.EVmar21]}/mt</b></td>
              <td align="center"><b>{this.state.mar21nb}</b></td>
              <td align="center">{this.state.avg1[this.state.mar21pour]}%</td>
              <td align="center">{this.state.avg2[this.state.mar21pour]}%</td>
              <td align="center">{this.state.avg3[this.state.mar21pour]}%</td>
              <td align="center">{this.state.avg4[this.state.mar21pour]}%</td>
              <td align="center">{this.state.avg5[this.state.mar21pour]}%</td>
              <td align="center">{this.state.avg6[this.state.mar21pour]}%</td>
              <td align="center">{this.state.avg7[this.state.mar21pour]}%</td>
              <td align="center">{this.state.avg8[this.state.mar21pour]}%</td>
              <td align="center">{this.state.avg9[this.state.mar21pour]}%</td>
            </tr>
            <tr>
              <td align="center">{/*this.state.moisprix[this.state.jun21prix]*/}<b>June 2021</b></td>
              <td align="center"><b>${[this.state.EVjun21]}/mt</b></td>
              <td align="center"><b>{this.state.jun21nb}</b></td>
              <td align="center">{this.state.avg1[this.state.jun21pour]}%</td>
              <td align="center">{this.state.avg2[this.state.jun21pour]}%</td>
              <td align="center">{this.state.avg3[this.state.jun21pour]}%</td>
              <td align="center">{this.state.avg4[this.state.jun21pour]}%</td>
              <td align="center">{this.state.avg5[this.state.jun21pour]}%</td>
              <td align="center">{this.state.avg6[this.state.jun21pour]}%</td>
              <td align="center">{this.state.avg7[this.state.jun21pour]}%</td>
              <td align="center">{this.state.avg8[this.state.jun21pour]}%</td>
              <td align="center">{this.state.avg9[this.state.jun21pour]}%</td>
            </tr>
            <tr>
              <td align="center">{/*this.state.moisprix[this.state.sept21prix]*/}<b>September 2021</b></td>
              <td align="center"><b>${[this.state.EVsep21]}/mt</b></td>
              <td align="center"><b>{this.state.sept21nb}</b></td>
              <td align="center">{this.state.avg1[this.state.sept21pour]}%</td>
              <td align="center">{this.state.avg2[this.state.sept21pour]}%</td>
              <td align="center">{this.state.avg3[this.state.sept21pour]}%</td>
              <td align="center">{this.state.avg4[this.state.sept21pour]}%</td>
              <td align="center">{this.state.avg5[this.state.sept21pour]}%</td>
              <td align="center">{this.state.avg6[this.state.sept21pour]}%</td>
              <td align="center">{this.state.avg7[this.state.sept21pour]}%</td>
              <td align="center">{this.state.avg8[this.state.sept21pour]}%</td>
              <td align="center">{this.state.avg9[this.state.sept21pour]}%</td>
            </tr>
            <tr>
              <td align="center">{/*this.state.moisprix[this.state.dec21prix]*/}<b>December 2021</b></td>
              <td align="center"><b>${[this.state.EVdec21]}/mt</b></td>
              <td align="center"><b>{this.state.dec21nb}</b></td>
              <td align="center">{this.state.avg1[this.state.dec21pour]}%</td>
              <td align="center">{this.state.avg2[this.state.dec21pour]}%</td>
              <td align="center">{this.state.avg3[this.state.dec21pour]}%</td>
              <td align="center">{this.state.avg4[this.state.dec21pour]}%</td>
              <td align="center">{this.state.avg5[this.state.dec21pour]}%</td>
              <td align="center">{this.state.avg6[this.state.dec21pour]}%</td>
              <td align="center">{this.state.avg7[this.state.dec21pour]}%</td>
              <td align="center">{this.state.avg8[this.state.dec21pour]}%</td>
              <td align="center">{this.state.avg9[this.state.dec21pour]}%</td>
            </tr>
            <tr>
            <td rowSpan="12" colSpan="12" align="center">
                <div style={{ width: "60%", height: 250 }}>
                  <ResponsiveContainer>
                    <BarChart
                      layout="horizontal"
                      width={800}
                      height={200}
                      data={this.state.donnees21}
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
                      <Bar dataKey="Mar21" fill="#00CC00" />
                      <Bar dataKey="Jun21" fill="#0000FF" />
                      <Bar dataKey="Sep21" fill="#FFC000" />
                      <Bar dataKey="Dec21" fill="#FF0000" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default CSumFcast;
