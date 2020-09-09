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
      median: "",
      lesprice: [],
      foreprices: [],
      lesmoyennes: [],
    };
    this.fillPrices = this.fillPrices.bind(this);
    this.trouveLeMedian = this.trouveLeMedian.bind(this);
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
          /* 
          let Maxi =
            (moyenneEncore[0],
            moyenneEncore[1],
            moyenneEncore[2],
            moyenneEncore[3],
            moyenneEncore[4],
            moyenneEncore[5],
            moyenneEncore[6],
            moyenneEncore[7],
            moyenneEncore[8]); */
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

    //ajout
  }
  /* calculeMoyenne(lesprice) {
    const monobjet = lesprice.map((leprice, somme, occ) => {
      somme = somme + leprice.price1;
      return somme / 2;
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
          <td>{priceFromApi.lamoyenne}</td>
          <td>{priceFromApi.lemedian}</td>
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
            {this.state.lesprice.map(renderprice)}
            <tr>
              <td>
                <b>Average</b>
              </td>
              <td>
                <b>
                  {Math.round(
                    this.state.price1 * this.state.lesmoyennes[0] +
                      this.state.price2 * this.state.lesmoyennes[1] +
                      this.state.price3 * this.state.lesmoyennes[2] +
                      this.state.price4 * this.state.lesmoyennes[3] +
                      this.state.price5 * this.state.lesmoyennes[4] +
                      this.state.price6 * this.state.lesmoyennes[5] +
                      this.state.price7 * this.state.lesmoyennes[6] +
                      this.state.price8 * this.state.lesmoyennes[7] +
                      this.state.price9 * this.state.lesmoyennes[8]
                  )}</b></td>
              <td><b>{this.trouveLeMedian()}</b></td>
              <td><b>{Math.round(this.state.lesmoyennes[0] * 100)}%</b></td>
              <td><b>{Math.round(this.state.lesmoyennes[1] * 100)}%</b></td>
              <td><b>{Math.round(this.state.lesmoyennes[2] * 100)}%</b></td>
              <td><b>{Math.round(this.state.lesmoyennes[3] * 100)}%</b></td>
              <td><b>{Math.round(this.state.lesmoyennes[4] * 100)}%</b></td>
              <td><b>{Math.round(this.state.lesmoyennes[5] * 100)}%</b></td>
              <td><b>{Math.round(this.state.lesmoyennes[6] * 100)}%</b></td>
              <td><b>{Math.round(this.state.lesmoyennes[7] * 100)}%</b></td>
              <td><b>{Math.round(this.state.lesmoyennes[8] * 100)}%</b></td>
              <td>{}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default MonthForecast;
