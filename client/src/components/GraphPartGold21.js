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
var mma;
class GraphPartGold21 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      donnees: [],
      data: [],
      prixmar21: [],
      prixjun21: [],
      prixsep21: [],
      prixdec21: [],
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.mweji21 !== this.props.mweji21) {
      // console.log(this.props.mweji21);

      mma = this.props.mweji21;
      let marc21 = [];
      let june21 = [];
      let sept21 = [];
      let dece21 = [];
      var leprix21 = [];

      var y = 0;
      for (y == 0; y < 8 /* this.props.mweji21.length */; y++) {
        if (this.props.mweji21[y].lemois == "March 2021") {
          marc21[1] = this.props.mweji21[y].price1;
          marc21[2] = this.props.mweji21[y].price2;
          marc21[3] = this.props.mweji21[y].price3;
          marc21[4] = this.props.mweji21[y].price4;
          marc21[5] = this.props.mweji21[y].price5;
          marc21[6] = this.props.mweji21[y].price6;
          marc21[7] = this.props.mweji21[y].price7;
          marc21[8] = this.props.mweji21[y].price8;
          marc21[9] = this.props.mweji21[y].price9;
        }

        if (this.props.mweji21[y].lemois == "June 2021") {
          june21[1] = this.props.mweji21[y].price1;
          june21[2] = this.props.mweji21[y].price2;
          june21[3] = this.props.mweji21[y].price3;
          june21[4] = this.props.mweji21[y].price4;
          june21[5] = this.props.mweji21[y].price5;
          june21[6] = this.props.mweji21[y].price6;
          june21[7] = this.props.mweji21[y].price7;
          june21[8] = this.props.mweji21[y].price8;
          june21[9] = this.props.mweji21[y].price9;
        }

        if (this.props.mweji21[y].lemois == "September 2021") {
          sept21[1] = this.props.mweji21[y].price1;
          sept21[2] = this.props.mweji21[y].price2;
          sept21[3] = this.props.mweji21[y].price3;
          sept21[4] = this.props.mweji21[y].price4;
          sept21[5] = this.props.mweji21[y].price5;
          sept21[6] = this.props.mweji21[y].price6;
          sept21[7] = this.props.mweji21[y].price7;
          sept21[8] = this.props.mweji21[y].price8;
          sept21[9] = this.props.mweji21[y].price9;
        }

        if (this.props.mweji21[y].lemois == "December 2021") {
          dece21[1] = this.props.mweji21[y].price1;
          dece21[2] = this.props.mweji21[y].price2;
          dece21[3] = this.props.mweji21[y].price3;
          dece21[4] = this.props.mweji21[y].price4;
          dece21[5] = this.props.mweji21[y].price5;
          dece21[6] = this.props.mweji21[y].price6;
          dece21[7] = this.props.mweji21[y].price7;
          dece21[8] = this.props.mweji21[y].price8;
          dece21[9] = this.props.mweji21[y].price9;
        }
      }

      leprix21[1] = this.props.mweji21prix[0].pour1;
      leprix21[2] = this.props.mweji21prix[0].pour2;
      leprix21[3] = this.props.mweji21prix[0].pour3;
      leprix21[4] = this.props.mweji21prix[0].pour4;
      leprix21[5] = this.props.mweji21prix[0].pour5;
      leprix21[6] = this.props.mweji21prix[0].pour6;
      leprix21[7] = this.props.mweji21prix[0].pour7;
      leprix21[8] = this.props.mweji21prix[0].pour8;
      leprix21[9] = this.props.mweji21prix[0].pour9;

      var data = [];
      var yy = 1;
      for (yy == 1; yy < 10; yy++) {
        data.push({
          price: leprix21[yy],
          Mar21: marc21[yy],
          Jun21: june21[yy],
          Sep21: sept21[yy],
          Dec21: dece21[yy],
        });
      }

      this.setState({
        data,
      });
    }
  }

  render() {
    return (
      <BarChart
        layout="horizontal"
        width={800}
        height={200}
        data={this.state.data /*this.state.data   this.props.mweji21*/}
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
    );
  }
}
export default GraphPartGold21;
