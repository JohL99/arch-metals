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
class GraphPartCopper extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      donnees: [],
      data: [],
      prixaug: [],
      prixsept: [],
      prixoct: [],
      prixnov: [],
      prixdec: [],
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.mweji !== this.props.mweji) {
      // console.log(this.props.mweji);

      mma = this.props.mweji;
      let sept1 = [];
      let octo1 = [];
      let novem1 = [];
      let decem1 = [];
      let psepFromApi = {};
      var leprix = [];

      var y = 0;
      for (y == 0; y < 4 /* this.props.mweji.length */; y++) {
        if (this.props.mweji[y].lemois == "September 2020") {
          sept1[1] = this.props.mweji[y].price1;
          sept1[2] = this.props.mweji[y].price2;
          sept1[3] = this.props.mweji[y].price3;
          sept1[4] = this.props.mweji[y].price4;
          sept1[5] = this.props.mweji[y].price5;
          sept1[6] = this.props.mweji[y].price6;
          sept1[7] = this.props.mweji[y].price7;
          sept1[8] = this.props.mweji[y].price8;
          sept1[9] = this.props.mweji[y].price9;
        }

        if (this.props.mweji[y].lemois == "October 2020") {
          octo1[1] = this.props.mweji[y].price1;
          octo1[2] = this.props.mweji[y].price2;
          octo1[3] = this.props.mweji[y].price3;
          octo1[4] = this.props.mweji[y].price4;
          octo1[5] = this.props.mweji[y].price5;
          octo1[6] = this.props.mweji[y].price6;
          octo1[7] = this.props.mweji[y].price7;
          octo1[8] = this.props.mweji[y].price8;
          octo1[9] = this.props.mweji[y].price9;
        }

        if (this.props.mweji[y].lemois == "November 2020") {
          novem1[1] = this.props.mweji[y].price1;
          novem1[2] = this.props.mweji[y].price2;
          novem1[3] = this.props.mweji[y].price3;
          novem1[4] = this.props.mweji[y].price4;
          novem1[5] = this.props.mweji[y].price5;
          novem1[6] = this.props.mweji[y].price6;
          novem1[7] = this.props.mweji[y].price7;
          novem1[8] = this.props.mweji[y].price8;
          novem1[9] = this.props.mweji[y].price9;
        }

        if (this.props.mweji[y].lemois == "December 2020") {
          decem1[1] = this.props.mweji[y].price1;
          decem1[2] = this.props.mweji[y].price2;
          decem1[3] = this.props.mweji[y].price3;
          decem1[4] = this.props.mweji[y].price4;
          decem1[5] = this.props.mweji[y].price5;
          decem1[6] = this.props.mweji[y].price6;
          decem1[7] = this.props.mweji[y].price7;
          decem1[8] = this.props.mweji[y].price8;
          decem1[9] = this.props.mweji[y].price9;
        }
      }

      leprix[1] = this.props.mweji1[0].pour1;
      leprix[2] = this.props.mweji1[0].pour2;
      leprix[3] = this.props.mweji1[0].pour3;
      leprix[4] = this.props.mweji1[0].pour4;
      leprix[5] = this.props.mweji1[0].pour5;
      leprix[6] = this.props.mweji1[0].pour6;
      leprix[7] = this.props.mweji1[0].pour7;
      leprix[8] = this.props.mweji1[0].pour8;
      leprix[9] = this.props.mweji1[0].pour9;

      var data = [];
      var yy = 1;
      for (yy == 1; yy < 10; yy++) {
        data.push({
          price: leprix[yy],
          Sep20: sept1[yy],
          Oct20: octo1[yy],
          Nov20: novem1[yy],
          Dec20: decem1[yy],
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
        layout="vertical"
        width={500}
        height={300}
        data={this.state.data /*this.state.data   this.props.mweji*/}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <XAxis dataKey="price" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Sep20" fill="#00CC00" />
        <Bar dataKey="Oct20" fill="#0000FF" />
        <Bar dataKey="Nov20" fill="#FFC000" />
        <Bar dataKey="Dec20" fill="#FF0000" />
      </BarChart>
    );
  }
}
export default GraphPartCopper;
