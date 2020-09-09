import React, { Component } from "react";
class MonthForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commodity: "",
      month: "",
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
      foreprices: [],
      averages: [],
    };
    this.fillPrices = this.fillPrices.bind(this);
    this.findMedian = this.findMedian.bind(this);
  }
  findMedian() {
    var leMedian;
    let Mukubwa = Math.max(
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
    if (Mukubwa === this.state.averages[0]) {leMedian = this.state.price1;} 
      else if (Mukubwa === this.state.averages[1]) {leMedian = this.state.price2;} 
      else if (Mukubwa === this.state.averages[2]) {leMedian = this.state.price3;} 
      else if (Mukubwa === this.state.averages[3]) {leMedian = this.state.price4;} 
      else if (Mukubwa === this.state.averages[4]) {leMedian = this.state.price5;} 
      else if (Mukubwa === this.state.averages[5]) {leMedian = this.state.price6;} 
      else if (Mukubwa === this.state.averages[6]) {leMedian = this.state.price7;} 
      else if (Mukubwa === this.state.averages[7]) {leMedian = this.state.price8;} 
      else if (Mukubwa === this.state.averages[8]) {leMedian = this.state.price9;}
    return leMedian;
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
          /* 
          let Maxi =
            (meanRepeat[0],
            meanRepeat[1],
            meanRepeat[2],
            meanRepeat[3],
            meanRepeat[4],
            meanRepeat[5],
            meanRepeat[6],
            meanRepeat[7],
            meanRepeat[8]); */
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

    //ajout
  }
  /* calculeMoyenne(Aprice) {
    const monobjet = Aprice.map((leprice, sum, occ) => {
      sum = sum + leprice.price1;
      return sum / 2;
    });
  }
 */
  componentDidUpdate(prevProps) {
    if (prevProps.mweji !== this.props.mweji) {
      this.fillPrices(this.props.mweji);
    }
  }
  render() {
    const renderprice = (priceFromApi) => {
      return (
        <tr key={priceFromApi.id}>
          <td>{priceFromApi.user}</td>
          <td>{priceFromApi.mean}</td>
          <td>{priceFromApi.median}</td>
          <td>{priceFromApi.price1 * 100}%</td>
          <td>{priceFromApi.price2 * 100}%</td>
          <td>{priceFromApi.price3 * 100}%</td>
          <td>{priceFromApi.price4 * 100}%</td>
          <td>{priceFromApi.price5 * 100}%</td>
          <td>{priceFromApi.price6 * 100}%</td>
          <td>{priceFromApi.price7 * 100}%</td>
          <td>{priceFromApi.price8 * 100}%</td>
          <td>{priceFromApi.price9 * 100}%</td>
          <td>{priceFromApi.specificcomments}</td>
        </tr>
      );
    };
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td colSpan="24">
                <b>Most Recent Copper Forecasts - {this.props.mweji}</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>{this.props.mweji}</b>
              </td>
              <td>
                <b>EV</b>
              </td>
              <td>
                <b>Median</b>
              </td>
              <td>
                <b>{this.state.price1}</b>
              </td>
              <td>
                <b>{this.state.price2}</b>
              </td>
              <td>
                <b>{this.state.price3}</b>
              </td>
              <td>
                <b>{this.state.price4}</b>
              </td>
              <td>
                <b>{this.state.price5}</b>
              </td>
              <td>
                <b>{this.state.price6}</b>
              </td>
              <td>
                <b>{this.state.price7}</b>
              </td>
              <td>
                <b>{this.state.price8}</b>
              </td>
              <td>
                <b>{this.state.price9}</b>
              </td>
              <td>
                <b>Justifications</b>
              </td>
            </tr>
            {this.state.Aprice.map(renderprice)}
            <tr>
              <td>
                <b>Average</b>
              </td>
              <td>
                <b>
                  {Math.round(
                    this.state.price1 * this.state.averages[0] +
                      this.state.price2 * this.state.averages[1] +
                      this.state.price3 * this.state.averages[2] +
                      this.state.price4 * this.state.averages[3] +
                      this.state.price5 * this.state.averages[4] +
                      this.state.price6 * this.state.averages[5] +
                      this.state.price7 * this.state.averages[6] +
                      this.state.price8 * this.state.averages[7] +
                      this.state.price9 * this.state.averages[8]
                  )}</b></td>
              <td><b>{this.findMedian()}</b></td>
              <td><b>{Math.round(this.state.averages[0] * 100)}%</b></td>
              <td><b>{Math.round(this.state.averages[1] * 100)}%</b></td>
              <td><b>{Math.round(this.state.averages[2] * 100)}%</b></td>
              <td><b>{Math.round(this.state.averages[3] * 100)}%</b></td>
              <td><b>{Math.round(this.state.averages[4] * 100)}%</b></td>
              <td><b>{Math.round(this.state.averages[5] * 100)}%</b></td>
              <td><b>{Math.round(this.state.averages[6] * 100)}%</b></td>
              <td><b>{Math.round(this.state.averages[7] * 100)}%</b></td>
              <td><b>{Math.round(this.state.averages[8] * 100)}%</b></td>
              <td>{}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default MonthForecast;
