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
class GraphGold extends PureComponent {
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
      lesprix: [],
      njina: [],
      lesmoyennes: [],
      donnees1: [8],
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
    let somme = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    fetch("/api/beyi/commois/" + sanza + "&Gold")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        let talo = data.map((mutengo) => {var njina = { ...this.state.njina };
          var i = 0;
          for (i === 0; i < 9; i++) {njina[i] = mutengo.floorprice + mutengo.constant1 * i;}
          this.setState({ njina });
          for (i === 0; i < 9; i++) {kombo[i] = mutengo.floorprice + mutengo.constant1 * i;}
          let donnees1 = { ...this.state.donnees1 };
          donnees1 = [{price: this.state.njina[0], Percentage: this.state.lesmoyennes[0],},];
          var y = 1;
          for (y === 1; y < 9; y++) {donnees1.push({price: this.state.njina[y], Percentage: this.state.lesmoyennes[y],});}
          this.setState({ donnees1 });
          return {
            id: mutengo._id,
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });
    //ajout
    fetch("/api/menji/dernierda/" + sanza + "&Gold")
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
          return {
            user: prix._id.user,
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
          ].concat(prixFromApi),
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
            <Bar dataKey="Percentage" fill="#CC9900" />
            {/* <Bar dataKey="pour" fill="#BF9000" /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default GraphGold;
