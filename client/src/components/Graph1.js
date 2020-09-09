import React, { PureComponent } from "react";
/* import { Doughnut, HorizontalBar, Bar } from "react-chartjs-2"; */
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
var data1 = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "sepember",
  ],
  datasets: [
    {
      label: "comex",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [0, 0],
    },
  ],
};
var kombo = [];
const data2 = [
  {
    price: "COMEX",
    pour: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    price: "Cumulative Average",
    pour: 3000,
    pv: 1398,
    amt: 2210,
  },
  ];
class Graph1 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dateforecast: "",
      commodity: "",
      mois: "",
      comex: "",
      cum_average: "",
      donnees1: [8],
      donnees: {
        labels: [],
        datasets: [
          {
            label: "Copper",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            redraw: true,
            data: [],
          },
        ],
      },
    };
    this.fillPrices = this.fillPrices.bind(this);
    //this.trouveLeMedian = this.trouveLeMedian.bind(this);
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
          //put it in array
          /*  var donnees = { ...this.state.donnees };
          var i = 0;
          for (i == 0; i < 9; i++) {
            donnees.labels[i] = price.floorprice + price.constant1 * i;
          } */
          // this.setState({ donnees });
          var njina = { ...this.state.njina };
          var i = 0;
          for (i == 0; i < 9; i++) {
            njina[i] = price.floorprice + price.constant1 * i;
          }
          this.setState({ njina });
          //console.log(this.state.njina);
          for (i == 0; i < 9; i++) {
            kombo[i] = price.floorprice + price.constant1 * i;
          }
          let donnees1 = { ...this.state.donnees1 };
          donnees1 = [
            { price: this.state.njina[0], pour: this.state.lesmoyennes[0] },
          ];
          var y = 1;
          for (y == 1; y < 9; y++) {
            donnees1.push({
              price: this.state.njina[y],
              pour: this.state.lesmoyennes[y],
            });
          }
          this.setState({ donnees1 });
          console.log(this.state.donnees1);
          return {
            id: price._id,
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });

    //ajout
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
          moyenneEncore[0] = (somme[0] / nombre) * 100;
          moyenneEncore[1] = (somme[1] / nombre) * 100;
          moyenneEncore[2] = (somme[2] / nombre) * 100;
          moyenneEncore[3] = (somme[3] / nombre) * 100;
          moyenneEncore[4] = (somme[4] / nombre) * 100;
          moyenneEncore[5] = (somme[5] / nombre) * 100;
          moyenneEncore[6] = (somme[6] / nombre) * 100;
          moyenneEncore[7] = (somme[7] / nombre) * 100;
          moyenneEncore[8] = (somme[8] / nombre) * 100;
          this.setState({ lesmoyennes: [].concat(moyenneEncore) });
          //console.log(moyenneEncore);
          let donnees = { ...this.state.donnees };
          donnees.labels = kombo;
          donnees.datasets.label = "Ndantsi";
          donnees.datasets.data = moyenneEncore;
          /* let donnees1 = { ...this.state.donnees1 };
          donnees1 = [{ price: kombo[0], pour: moyenneEncore[0] }];
          var y = 1;
          for (y == 1; y < 9; y++) {
            const a = donnees1.push([
              { name: this.state.njina[y], pour: moyenneEncore[y] },
            ]);
          } */
          //data2.datasets.data = moyenneEncore;
          //donnees.labels = { ...this.state.njina };
          this.setState({ donnees });
          //this.setState({ donnees1 });
          //console.log(this.state.donnees1);
          /*  let lineChart = this.reference.chartInstance;
          lineChart.update(); */
          return {
            user: price._id.user,
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
              user: "",
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
  }
  componentDidUpdate(prevProps) {
    if (prevProps.mweji !== this.props.mweji) {
      this.fillPrices(this.props.mweji, data1);
    }
  }
  render() {
    /* const donnees1 = this.state.donnees1;
    console.log(donnees1); */
    return (
      <div style={{ width: "70%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            layout="vertical"
            width={500}
            height={300}
            data={this.state.donnees1}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="price" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="pour" fill="#00B050" />
            {/* <Bar dataKey="pour" fill="#FF0000" /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default Graph1;
