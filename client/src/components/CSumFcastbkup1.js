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

      augprix: 0,
      septprix: 0,
      octprix: 0,
      novprix: 0,
      augpour: 0,
      septpour: 0,
      octpour: 0,
      novpour: 0,
      decpour: 0,

      donnees1: [],
      lesprix: [],
      lesCast: [],
    };

    this.renderTableData = this.renderTableData.bind(this);
  }

  componentWillMount() {
    this.faisQlq();
    this.graphi();
  }
  componentDidMount() {}

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

          if (moisprix[compteur + 1] == "August 2020") {
            this.setState({ augprix: compteur + 1 });
          } else if (moisprix[compteur + 1] == "September 2020") {
            this.setState({ septprix: compteur + 1 });
          } else if (moisprix[compteur + 1] == "October 2020") {
            this.setState({ octprix: compteur + 1 });
          } else if (moisprix[compteur + 1] == "November 2020") {
            this.setState({ novprix: compteur + 1 });
          } else if (moisprix[compteur + 1] == "December 2020") {
            this.setState({ decprix: compteur + 1 });
          }

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

          if (moispour[compteur + 1] == "August 2020") {
            this.setState({ augpour: compteur + 1 });
          } else if (moispour[compteur + 1] == "September 2020") {
            this.setState({ septpour: compteur + 1 });
          } else if (moispour[compteur + 1] == "October 2020") {
            this.setState({ octpour: compteur + 1 });
          } else if (moispour[compteur + 1] == "November 2020") {
            this.setState({ novpour: compteur + 1 });
          } else if (moispour[compteur + 1] == "December 2020") {
            this.setState({ decpour: compteur + 1 });
          }

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

    this.graphi();

    this.trouveev();
  }

  fixemois() {}

  graphi() {
    //graphique
    var donnees1 = [];
    //donnees = { ...this.state.donnees1 };

    donnees1.push({
      price: this.state.price1[this.state.augpour],
      August20: this.state.avg1[this.state.augpour],
      Sept20: this.state.avg1[this.state.septpour],
      October20: this.state.avg1[this.state.octpour],
      November20: this.state.avg1[this.state.novpour],
      December20: this.state.avg1[this.state.decpour],
    });
    donnees1.push({
      price: this.state.price2[this.state.augpour],
      August20: this.state.avg2[this.state.augpour],
      Sept20: this.state.avg2[this.state.septpour],
      October20: this.state.avg2[this.state.octpour],
      November20: this.state.avg2[this.state.novpour],
      December20: this.state.avg2[this.state.decpour],
    });
    donnees1.push({
      price: this.state.price3[this.state.augpour],
      August20: this.state.avg3[this.state.augpour],
      Sept20: this.state.avg3[this.state.septpour],
      October20: this.state.avg3[this.state.octpour],
      November20: this.state.avg3[this.state.novpour],
      December20: this.state.avg3[this.state.decpour],
    });
    donnees1.push({
      price: this.state.price4[this.state.augpour],
      August20: this.state.avg4[this.state.augpour],
      Sept20: this.state.avg4[this.state.septpour],
      October20: this.state.avg4[this.state.octpour],
      November20: this.state.avg4[this.state.novpour],
      December20: this.state.avg4[this.state.decpour],
    });
    donnees1.push({
      price: this.state.price5[this.state.augpour],
      August20: this.state.avg5[this.state.augpour],
      Sept20: this.state.avg5[this.state.septpour],
      October20: this.state.avg5[this.state.octpour],
      November20: this.state.avg5[this.state.novpour],
      December20: this.state.avg5[this.state.decpour],
    });
    donnees1.push({
      price: this.state.price6[this.state.augpour],
      August20: this.state.avg6[this.state.augpour],
      Sept20: this.state.avg6[this.state.septpour],
      October20: this.state.avg6[this.state.octpour],
      November20: this.state.avg6[this.state.novpour],
      December20: this.state.avg6[this.state.decpour],
    });
    donnees1.push({
      price: this.state.price7[this.state.augpour],
      August20: this.state.avg7[this.state.augpour],
      Sept20: this.state.avg7[this.state.septpour],
      October20: this.state.avg7[this.state.octpour],
      November20: this.state.avg7[this.state.novpour],
      December20: this.state.avg7[this.state.decpour],
    });

    donnees1.push({
      price: this.state.price8[this.state.augpour],
      August20: this.state.avg8[this.state.augpour],
      Sept20: this.state.avg8[this.state.septpour],
      October20: this.state.avg8[this.state.octpour],
      November20: this.state.avg8[this.state.novpour],
      December20: this.state.avg8[this.state.decpour],
    });

    donnees1.push({
      price: this.state.price9[this.state.augpour],
      August20: this.state.avg9[this.state.augpour],
      Sept20: this.state.avg9[this.state.septpour],
      October20: this.state.avg9[this.state.octpour],
      November20: this.state.avg9[this.state.novpour],
      December20: this.state.avg9[this.state.decpour],
    });
    this.setState({ donnees1 });
    //console.log(donnees1);
    this.trouveev();
  }

  trouveev() {
    let ev = [...this.state.ev];
    var lemax = Math.max(
      this.state.avg1[this.state.augpour],
      this.state.avg2[this.state.augpour],
      this.state.avg3[this.state.augpour],
      this.state.avg4[this.state.augpour],
      this.state.avg5[this.state.augpour],
      this.state.avg6[this.state.augpour],
      this.state.avg7[this.state.augpour],
      this.state.avg8[this.state.augpour],
      this.state.avg9[this.state.augpour]
    );

    if (this.state.avg1[this.state.augpour] == lemax) {
      ev[this.state.augpour] = this.state.price1[this.state.augprix];
      this.setState({ ev });
    } else if (this.state.avg2[this.state.augpour] == lemax) {
      ev[this.state.augpour] = this.state.price2[this.state.augprix];
      this.setState({ ev });
    } else if (this.state.avg3[this.state.augpour] == lemax) {
      ev[this.state.augpour] = this.state.price3[this.state.augprix];
      this.setState({ ev });
    } else if (this.state.avg4[this.state.augpour] == lemax) {
      ev[this.state.augpour] = this.state.price4[this.state.augprix];
      this.setState({ ev });
    } else if (this.state.avg5[this.state.augpour] == lemax) {
      ev[this.state.augpour] = this.state.price5[this.state.augprix];
      this.setState({ ev });
    } else if (this.state.avg6[this.state.augpour] == lemax) {
      ev[this.state.augpour] = this.state.price6[this.state.augprix];
      this.setState({ ev });
    } else if (this.state.avg7[this.state.augpour] == lemax) {
      ev[this.state.augpour] = this.state.price7[this.state.augprix];
      this.setState({ ev });
    } else if (this.state.avg8[this.state.augpour] == lemax) {
      ev[this.state.augpour] = this.state.price8[this.state.augprix];
      this.setState({ ev });
    } else if (this.state.avg9[this.state.augpour] == lemax) {
      ev[this.state.augpour] = this.state.price9[this.state.augprix];
      this.setState({ ev });
    }

    var lemax1 = Math.max(
      this.state.avg1[this.state.septpour],
      this.state.avg2[this.state.septpour],
      this.state.avg3[this.state.septpour],
      this.state.avg4[this.state.septpour],
      this.state.avg5[this.state.septpour],
      this.state.avg6[this.state.septpour],
      this.state.avg7[this.state.septpour],
      this.state.avg8[this.state.septpour],
      this.state.avg9[this.state.septpour]
    );

    if (this.state.avg1[this.state.septpour] == lemax1) {
      ev[this.state.septpour] = this.state.price1[this.state.septprix];
      this.setState({ ev });
    } else if (this.state.avg2[this.state.septpour] == lemax1) {
      ev[this.state.septpour] = this.state.price2[this.state.septprix];
      this.setState({ ev });
    } else if (this.state.avg3[this.state.septpour] == lemax1) {
      ev[this.state.septpour] = this.state.price3[this.state.septprix];
      this.setState({ ev });
    } else if (this.state.avg4[this.state.septpour] == lemax1) {
      ev[this.state.septpour] = this.state.price4[this.state.septprix];
      this.setState({ ev });
    } else if (this.state.avg5[this.state.septpour] == lemax1) {
      ev[this.state.septpour] = this.state.price5[this.state.septprix];
      this.setState({ ev });
    } else if (this.state.avg6[this.state.septpour] == lemax1) {
      ev[this.state.septpour] = this.state.price6[this.state.septprix];
      this.setState({ ev });
    } else if (this.state.avg7[this.state.septpour] == lemax1) {
      ev[this.state.septpour] = this.state.price7[this.state.septprix];
      this.setState({ ev });
    } else if (this.state.avg8[this.state.septpour] == lemax1) {
      ev[this.state.septpour] = this.state.price8[this.state.septprix];
      this.setState({ ev });
    } else if (this.state.avg9[this.state.septpour] == lemax1) {
      ev[this.state.septpour] = this.state.price9[this.state.septprix];
      this.setState({ ev });
    }

    var lemax2 = Math.max(
      this.state.avg1[this.state.octpour],
      this.state.avg2[this.state.octpour],
      this.state.avg3[this.state.octpour],
      this.state.avg4[this.state.octpour],
      this.state.avg5[this.state.octpour],
      this.state.avg6[this.state.octpour],
      this.state.avg7[this.state.octpour],
      this.state.avg8[this.state.octpour],
      this.state.avg9[this.state.octpour]
    );

    if (this.state.avg1[this.state.octpour] == lemax2) {
      ev[this.state.octpour] = this.state.price1[this.state.octprix];
      this.setState({ ev });
    } else if (this.state.avg2[this.state.octpour] == lemax2) {
      ev[this.state.octpour] = this.state.price2[this.state.octprix];
      this.setState({ ev });
    } else if (this.state.avg3[this.state.octpour] == lemax2) {
      ev[this.state.octpour] = this.state.price3[this.state.octprix];
      this.setState({ ev });
    } else if (this.state.avg4[this.state.octpour] == lemax2) {
      ev[this.state.octpour] = this.state.price4[this.state.octprix];
      this.setState({ ev });
    } else if (this.state.avg5[this.state.octpour] == lemax2) {
      ev[this.state.octpour] = this.state.price5[this.state.octprix];
      this.setState({ ev });
    } else if (this.state.avg6[this.state.octpour] == lemax2) {
      ev[this.state.octpour] = this.state.price6[this.state.octprix];
      this.setState({ ev });
    } else if (this.state.avg7[this.state.octpour] == lemax2) {
      ev[this.state.octpour] = this.state.price7[this.state.octprix];
      this.setState({ ev });
    } else if (this.state.avg8[this.state.octpour] == lemax2) {
      ev[this.state.octpour] = this.state.price8[this.state.octprix];
      this.setState({ ev });
    } else if (this.state.avg9[this.state.octpour] == lemax2) {
      ev[this.state.octpour] = this.state.price9[this.state.octprix];
      this.setState({ ev });
    }

    var lemax3 = Math.max(
      this.state.avg1[this.state.novpour],
      this.state.avg2[this.state.novpour],
      this.state.avg3[this.state.novpour],
      this.state.avg4[this.state.novpour],
      this.state.avg5[this.state.novpour],
      this.state.avg6[this.state.novpour],
      this.state.avg7[this.state.novpour],
      this.state.avg8[this.state.novpour],
      this.state.avg9[this.state.novpour]
    );

    if (this.state.avg1[this.state.novpour] == lemax3) {
      ev[this.state.novpour] = this.state.price1[this.state.novprix];
      this.setState({ ev });
    } else if (this.state.avg2[this.state.novpour] == lemax3) {
      ev[this.state.novpour] = this.state.price2[this.state.novprix];
      this.setState({ ev });
    } else if (this.state.avg3[this.state.novpour] == lemax3) {
      ev[this.state.novpour] = this.state.price3[this.state.novprix];
      this.setState({ ev });
    } else if (this.state.avg4[this.state.novpour] == lemax3) {
      ev[this.state.novpour] = this.state.price4[this.state.novprix];
      this.setState({ ev });
    } else if (this.state.avg5[this.state.novpour] == lemax3) {
      ev[this.state.novpour] = this.state.price5[this.state.novprix];
      this.setState({ ev });
    } else if (this.state.avg6[this.state.novpour] == lemax3) {
      ev[this.state.novpour] = this.state.price6[this.state.novprix];
      this.setState({ ev });
    } else if (this.state.avg7[this.state.novpour] == lemax3) {
      ev[this.state.novpour] = this.state.price7[this.state.novprix];
      this.setState({ ev });
    } else if (this.state.avg8[this.state.novpour] == lemax3) {
      ev[this.state.novpour] = this.state.price8[this.state.novprix];
      this.setState({ ev });
    } else if (this.state.avg9[this.state.novpour] == lemax3) {
      ev[this.state.novpour] = this.state.price9[this.state.novprix];
      this.setState({ ev });
    }

    var lemax4 = Math.max(
      this.state.avg1[this.state.decpour],
      this.state.avg2[this.state.decpour],
      this.state.avg3[this.state.decpour],
      this.state.avg4[this.state.decpour],
      this.state.avg5[this.state.decpour],
      this.state.avg6[this.state.decpour],
      this.state.avg7[this.state.decpour],
      this.state.avg8[this.state.decpour],
      this.state.avg9[this.state.decpour]
    );

    if (this.state.avg1[this.state.decpour] == lemax4) {
      ev[this.state.decpour] = this.state.price1[this.state.decprix];
      this.setState({ ev });
    } else if (this.state.avg2[this.state.decpour] == lemax4) {
      ev[this.state.decpour] = this.state.price2[this.state.decprix];
      this.setState({ ev });
    } else if (this.state.avg3[this.state.decpour] == lemax4) {
      ev[this.state.decpour] = this.state.price3[this.state.decprix];
      this.setState({ ev });
    } else if (this.state.avg4[this.state.decpour] == lemax4) {
      ev[this.state.decpour] = this.state.price4[this.state.decprix];
      this.setState({ ev });
    } else if (this.state.avg5[this.state.decpour] == lemax4) {
      ev[this.state.decpour] = this.state.price5[this.state.decprix];
      this.setState({ ev });
    } else if (this.state.avg6[this.state.decpour] == lemax4) {
      ev[this.state.decpour] = this.state.price6[this.state.decprix];
      this.setState({ ev });
    } else if (this.state.avg7[this.state.decpour] == lemax4) {
      ev[this.state.decpour] = this.state.price7[this.state.decprix];
      this.setState({ ev });
    } else if (this.state.avg8[this.state.decpour] == lemax4) {
      ev[this.state.decpour] = this.state.price8[this.state.decprix];
      this.setState({ ev });
    } else if (this.state.avg9[this.state.decpour] == lemax4) {
      ev[this.state.decpour] = this.state.price9[this.state.decprix];
      this.setState({ ev });
    }
  }

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
          <td rowSpan={"2"} width={"10%"}>
            {mois}
          </td>
          <td>{"EV"}</td>
          <td>{"Median"}</td>
          <td>{"No."}</td>
          <td>{price1}</td>
          <td>{price2}</td>
          <td>{price3} </td>
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
          <td rowSpan="2" width="10%">
            {talo.mois}
          </td>
          <td>EV</td>
          <td>Median</td>
          <td>No.</td>
          <td>{talo.price1}</td>
          <td>{talo.price2}</td>
          <td>{talo.price3} </td>
          <td>{talo.price4}</td>
          <td>{talo.price5}</td>
          <td>{talo.price6}</td>
          <td>{talo.price7}</td>
          <td>{talo.price8}</td>
          <td>{talo.price9}</td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td colSpan="13" align="center" width="70%">
                Summary of Copper Forecasts
              </td>

              <td rowSpan="9">
                <div style={{ width: "100%", height: 400 }}>
                  <ResponsiveContainer>
                    <BarChart
                      layout="horizontal"
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
                      <XAxis dataKey="price" type="category" />
                      <YAxis type="number" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="August20" fill="#8884d8" />
                      <Bar dataKey="Sept20" fill="#82ca9d" />
                      <Bar dataKey="October20" fill="#89914c" />
                      <Bar dataKey="November20" fill="#916a4c" />
                      <Bar dataKey="December20" fill="#917a4c" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </td>
            </tr>

            <tr>
              <td rowSpan="2" width="10%">
                {/*this.state.moisprix[this.state.augprix]*/}
                August 2020
              </td>
              <td>EV</td>
              <td>Median</td>
              <td>No.</td>
              <td>{this.state.price1[this.state.augprix]}</td>
              <td>{this.state.price2[this.state.augprix]}</td>
              <td>{this.state.price3[this.state.augprix]}</td>
              <td>{this.state.price4[this.state.augprix]}</td>
              <td>{this.state.price5[this.state.augprix]}</td>
              <td>{this.state.price6[this.state.augprix]}</td>
              <td>{this.state.price7[this.state.augprix]}</td>
              <td>{this.state.price8[this.state.augprix]}</td>
              <td>{this.state.price9[this.state.augprix]}</td>
            </tr>
            {/*this.renderTableData()*/}
            {/*this.state.lesprix.map(renderPrix)*/}
            <tr>
              <td>{this.state.ev[this.state.augpour]}</td>
              <td>{this.state.avmedian[this.state.augpour]}</td>
              <td>4</td>
              <td>{this.state.avg1[this.state.augpour]}</td>
              <td>{this.state.avg2[this.state.augpour]}</td>
              <td>{this.state.avg3[this.state.augpour]}</td>
              <td>{this.state.avg4[this.state.augpour]}</td>
              <td>{this.state.avg5[this.state.augpour]}</td>
              <td>{this.state.avg6[this.state.augpour]}</td>
              <td>{this.state.avg7[this.state.augpour]}</td>
              <td>{this.state.avg8[this.state.augpour]}</td>
              <td>{this.state.avg9[this.state.augpour]}</td>
            </tr>

            <tr>
              <td rowSpan="2">
                {/*this.state.moisprix[this.state.septprix]*/}
                September 2020
              </td>
              <td>EV</td>
              <td>Median</td>
              <td>No.</td>
              <td>{this.state.price1[this.state.septprix]}</td>
              <td>{this.state.price2[this.state.septprix]}</td>
              <td>{this.state.price3[this.state.septprix]}</td>
              <td>{this.state.price4[this.state.septprix]}</td>
              <td>{this.state.price5[this.state.septprix]}</td>
              <td>{this.state.price6[this.state.septprix]}</td>
              <td>{this.state.price7[this.state.septprix]}</td>
              <td>{this.state.price8[this.state.septprix]}</td>
              <td>{this.state.price9[this.state.septprix]}</td>
            </tr>

            <tr>
              <td>{this.state.ev[this.state.septpour]}</td>
              <td>{this.state.avmedian[this.state.septpour]}</td>
              <td>4</td>
              <td>{this.state.avg1[this.state.septpour]}</td>
              <td>{this.state.avg2[this.state.septpour]}</td>
              <td>{this.state.avg3[this.state.septpour]}</td>
              <td>{this.state.avg4[this.state.septpour]}</td>
              <td>{this.state.avg5[this.state.septpour]}</td>
              <td>{this.state.avg6[this.state.septpour]}</td>
              <td>{this.state.avg7[this.state.septpour]}</td>
              <td>{this.state.avg8[this.state.septpour]}</td>
              <td>{this.state.avg9[this.state.septpour]}</td>
            </tr>

            <tr>
              <td rowSpan="2">
                {/*this.state.moisprix[this.state.octprix]*/}
                October 2020
              </td>
              <td>EV</td>
              <td>Median</td>
              <td>No.</td>
              <td>{this.state.price1[this.state.octprix]}</td>
              <td>{this.state.price2[this.state.octprix]}</td>
              <td>{this.state.price3[this.state.octprix]}</td>
              <td>{this.state.price4[this.state.octprix]}</td>
              <td>{this.state.price5[this.state.octprix]}</td>
              <td>{this.state.price6[this.state.octprix]}</td>
              <td>{this.state.price7[this.state.octprix]}</td>
              <td>{this.state.price8[this.state.octprix]}</td>
              <td>{this.state.price9[this.state.octprix]}</td>
            </tr>

            <tr>
              <td>{this.state.ev[this.state.octpour]}</td>
              <td>{this.state.avmedian[this.state.octpour]}</td>
              <td>4</td>
              <td>{this.state.avg1[this.state.octpour]}</td>
              <td>{this.state.avg2[this.state.octpour]}</td>
              <td>{this.state.avg3[this.state.octpour]}</td>
              <td>{this.state.avg4[this.state.octpour]}</td>
              <td>{this.state.avg5[this.state.octpour]}</td>
              <td>{this.state.avg6[this.state.octpour]}</td>
              <td>{this.state.avg7[this.state.octpour]}</td>
              <td>{this.state.avg8[this.state.octpour]}</td>
              <td>{this.state.avg9[this.state.octpour]}</td>
            </tr>

            <tr>
              <td rowSpan="2">
                {/*this.state.moisprix[this.state.novprix]*/}
                November 2020
              </td>
              <td>EV</td>
              <td>Median</td>
              <td>No.</td>
              <td>{this.state.price1[this.state.novprix]}</td>
              <td>{this.state.price2[this.state.novprix]}</td>
              <td>{this.state.price3[this.state.novprix]}</td>
              <td>{this.state.price4[this.state.novprix]}</td>
              <td>{this.state.price5[this.state.novprix]}</td>
              <td>{this.state.price6[this.state.novprix]}</td>
              <td>{this.state.price7[this.state.novprix]}</td>
              <td>{this.state.price8[this.state.novprix]}</td>
              <td>{this.state.price9[this.state.novprix]}</td>
            </tr>

            <tr>
              <td>{this.state.ev[this.state.novpour]}</td>
              <td>{this.state.avmedian[this.state.novpour]}</td>
              <td>4</td>
              <td>{this.state.avg1[this.state.novpour]}</td>
              <td>{this.state.avg2[this.state.novpour]}</td>
              <td>{this.state.avg3[this.state.novpour]}</td>
              <td>{this.state.avg4[this.state.novpour]}</td>
              <td>{this.state.avg5[this.state.novpour]}</td>
              <td>{this.state.avg6[this.state.novpour]}</td>
              <td>{this.state.avg7[this.state.novpour]}</td>
              <td>{this.state.avg8[this.state.novpour]}</td>
              <td>{this.state.avg9[this.state.novpour]}</td>
            </tr>

            <tr>
              <td rowSpan="2">
                {/*this.state.moisprix[this.state.decprix]*/}
                December 2020
              </td>
              <td>EV</td>
              <td>Median</td>
              <td>No.</td>
              <td>{this.state.price1[this.state.decprix]}</td>
              <td>{this.state.price2[this.state.decprix]}</td>
              <td>{this.state.price3[this.state.decprix]}</td>
              <td>{this.state.price4[this.state.decprix]}</td>
              <td>{this.state.price5[this.state.decprix]}</td>
              <td>{this.state.price6[this.state.decprix]}</td>
              <td>{this.state.price7[this.state.decprix]}</td>
              <td>{this.state.price8[this.state.decprix]}</td>
              <td>{this.state.price9[this.state.decprix]}</td>
            </tr>

            <tr>
              <td>{this.state.ev[this.state.decpour]}</td>
              <td>{this.state.avmedian[this.state.decpour]}</td>
              <td>4</td>
              <td>{this.state.avg1[this.state.decpour]}</td>
              <td>{this.state.avg2[this.state.decpour]}</td>
              <td>{this.state.avg3[this.state.decpour]}</td>
              <td>{this.state.avg4[this.state.decpour]}</td>
              <td>{this.state.avg5[this.state.decpour]}</td>
              <td>{this.state.avg6[this.state.decpour]}</td>
              <td>{this.state.avg7[this.state.decpour]}</td>
              <td>{this.state.avg8[this.state.decpour]}</td>
              <td>{this.state.avg9[this.state.decpour]}</td>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td colSpan="2">
                Copper Participants Most Recent General Remarks
              </td>
            </tr>
            <tr>
              <td width="20%">Copper Mois</td>
              <td>Commentaires</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default CSumFcast;
