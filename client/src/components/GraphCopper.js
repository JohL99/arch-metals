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
var kombo = [];
class GraphCopper extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      commodity: "",
      mois: "",
      user: "",
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
      median: "",
      Aprice: [],
      element: [],
      averages: [],
      data1: [8],
    };
    this.fillPrices = this.fillPrices.bind(this);
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
    fetch("/api/beyi/commois/" + sanza + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        let bucket = data.map((price) => {var element = { ...this.state.element };
          var i = 0;
          for (i === 0; i < 9; i++) {element[i] = price.floorprice + price.constant1 * i;}
          this.setState({ element });
          for (i === 0; i < 9; i++) {kombo[i] = price.floorprice + price.constant1 * i;}
          let data1 = { ...this.state.data1 };
          data1 = [{price: this.state.element[0], RecentData: this.state.averages[0],},];
          var y = 1;
          for (y === 1; y < 9; y++) {data1.push({price: this.state.element[y], RecentData: this.state.averages[y],});}
          this.setState({ data1 });
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
    if (prevProps.mweji !== this.props.mweji) {this.fillPrices(this.props.mweji);}
  }
  render() {
    return (
      <div style={{ width: "50%", height: 250 }} align="center">
        <ResponsiveContainer>
          <BarChart
            layout="horizontal"
            width={800}
            height={200}
            data={this.state.data1}
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
            {/* <Bar dataKey="item" fill="#BF9000" /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default GraphCopper;
