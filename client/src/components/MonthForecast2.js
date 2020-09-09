import React, { Component } from "react";
class MonthForecast extends Component {
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
      foreprices: [][8],
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
    fetch("/api/beyi/commois/" + sanza + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        console.log(yx);
        let talo = data.map((mutengo) => {
          //put it in array
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
  }
  renderTableData(sanza) {
    fetch("/api/menji/dernierda/" + sanza + "&Copper")
      .then((response1) => {
        return response1.json();
      })
      .then((data1) => {
        let yx1 = data1;
        let pourcent = data1.map((mutengo1, index) => {
          //put it in array
          const {
            user,
            price1,
            price2,
            price3,
            price4,
            price5,
            price6,
            price7,
            price8,
            price9,
            specificcomments,
          } = mutengo1; //destructuring
          return;
          <tr key={index}>
            <td>{user}</td>
            <td>{price1}</td>
            <td>{price1}</td>
            <td>{price1}</td>
          </tr>;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.mweji !== this.props.mweji) {
      this.fillPrices(this.props.mweji);
    }
  }
  render() {
    //this.fillPrices(this.props.mweji);
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td colSpan="24">
                <b>Most Recent Copper - {this.props.mweji} Forecasts</b>
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
            <tr>
              <td>Cu participant1</td>
              <td>{5045}</td>
              <td>5050</td>
              <td>12%</td>
              <td>14%</td>
              <td>52%</td>
              <td>4%</td>
              <td>8%</td>
              <td>12%</td>
              <td>1%</td>
              <td>7%</td>
              <td>5%</td>
              <td>CuParticpent Comment</td>
            </tr>
            <tr>
              <td>Cu participant</td>
              <td>5045</td>
              <td>5050</td>
              <td>7%</td>
              <td>9%</td>
              <td>14%</td>
              <td>9%</td>
              <td>45%</td>
              <td>10%</td>
              <td>5%</td>
              <td>2%</td>
              <td>4%</td>
              <td>CuParticpent Comment</td>
            </tr>
            <tr>
              <td>Cu participant</td>
              <td>5045</td>
              <td>5050</td>
              <td>4%</td>
              <td>12%</td>
              <td>25%</td>
              <td>3%</td>
              <td>9%</td>
              <td>10%</td>
              <td>6%</td>
              <td>31%</td>
              <td>22%</td>
              <td>CuParticpent Comment</td>
            </tr>
            <tr>
              <td>Cu participant</td>
              <td>5045</td>
              <td>5050</td>
              <td>4%</td>
              <td>5%</td>
              <td>6%</td>
              <td>9%</td>
              <td>10%</td>
              <td>25%</td>
              <td>14%</td>
              <td>5%</td>
              <td>1%</td>
              <td>CuParticpent Comment</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default MonthForecast;
