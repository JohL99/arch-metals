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
    "September",
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
      month: "",
      comex: "",
      cum_average: "",
      data1: [8],
      data: {
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
    //this.findMedian = this.findMedian.bind(this);
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
    fetch("/api/beyi/commonth/" + sanza + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        let talo = data.map((price) => {
          //put it in array
          /*  var data = { ...this.state.data };
          var i = 0;
          for (i == 0; i < 9; i++) {
            data.labels[i] = price.floorprice + price.constant1 * i;
          } */
          // this.setState({ data });
          var element = { ...this.state.element };
          var i = 0;
          for (i == 0; i < 9; i++) {
            element[i] = price.floorprice + price.constant1 * i;
          }
          this.setState({ element });
          //console.log(this.state.element);
          for (i == 0; i < 9; i++) {
            kombo[i] = price.floorprice + price.constant1 * i;
          }
          let data1 = { ...this.state.data1 };
          data1 = [
            { price: this.state.element[0], pour: this.state.averages[0] },
          ];
          var y = 1;
          for (y == 1; y < 9; y++) {
            data1.push({
              price: this.state.element[y],
              pour: this.state.averages[y],
            });
          }
          this.setState({ data1 });
          console.log(this.state.data1);
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
          meanRepeat[0] = (sum[0] / number) * 100;
          meanRepeat[1] = (sum[1] / number) * 100;
          meanRepeat[2] = (sum[2] / number) * 100;
          meanRepeat[3] = (sum[3] / number) * 100;
          meanRepeat[4] = (sum[4] / number) * 100;
          meanRepeat[5] = (sum[5] / number) * 100;
          meanRepeat[6] = (sum[6] / number) * 100;
          meanRepeat[7] = (sum[7] / number) * 100;
          meanRepeat[8] = (sum[8] / number) * 100;
          this.setState({ averages: [].concat(meanRepeat) });
          //console.log(meanRepeat);
          let data = { ...this.state.data };
          data.labels = kombo;
          data.datasets.label = "Ndantsi";
          data.datasets.data = meanRepeat;
          /* let data1 = { ...this.state.data1 };
          data1 = [{ price: kombo[0], pour: meanRepeat[0] }];
          var y = 1;
          for (y == 1; y < 9; y++) {
            const a = data1.push([
              { name: this.state.element[y], pour: meanRepeat[y] },
            ]);
          } */
          //data2.datasets.data = meanRepeat;
          //data.labels = { ...this.state.element };
          this.setState({ data });
          //this.setState({ data1 });
          //console.log(this.state.data1);
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
            median: price.detail.median,
            mean: price.detail.mean,
            specificcomments: price.detail.specificcomments,
          };
        });
        this.setState({
          Aprice: [
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
  }
  componentDidUpdate(prevProps) {
    if (prevProps.mweji !== this.props.mweji) {
      this.fillPrices(this.props.mweji, data1);
    }
  }
  render() {
    /* const data1 = this.state.data1;
    console.log(data1); */
    return (
      <div style={{ width: "70%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            layout="vertical"
            width={500}
            height={300}
            data={this.state.data1}
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
