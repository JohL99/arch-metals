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
      prixsept20: [],
      prixoct20: [],
      prixnov20: [],
      prixdec20: [],
      prixsept21: [],
      prixoct21: [],
      prixnov21: [],
      prixdec21: [],
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.mweji !== this.props.mweji) {
      // console.log(this.props.mweji);

      mma = this.props.mweji;
      let sept20 = [];
      let octo20 = [];
      let novem20 = [];
      let decem20 = [];
      let psep20FromApi = {};
      var leprix = [];

      var y = 0;
      for (y == 0; y < 8 /* this.props.mweji.length */; y++) {
        if (this.props.mweji[y].lemois == "September 2020") {
          sept20[1] = this.props.mweji[y].price1;
          sept20[2] = this.props.mweji[y].price2;
          sept20[3] = this.props.mweji[y].price3;
          sept20[4] = this.props.mweji[y].price4;
          sept20[5] = this.props.mweji[y].price5;
          sept20[6] = this.props.mweji[y].price6;
          sept20[7] = this.props.mweji[y].price7;
          sept20[8] = this.props.mweji[y].price8;
          sept20[9] = this.props.mweji[y].price9;
        }

        if (this.props.mweji[y].lemois == "October 2020") {
          octo20[1] = this.props.mweji[y].price1;
          octo20[2] = this.props.mweji[y].price2;
          octo20[3] = this.props.mweji[y].price3;
          octo20[4] = this.props.mweji[y].price4;
          octo20[5] = this.props.mweji[y].price5;
          octo20[6] = this.props.mweji[y].price6;
          octo20[7] = this.props.mweji[y].price7;
          octo20[8] = this.props.mweji[y].price8;
          octo20[9] = this.props.mweji[y].price9;
        }

        if (this.props.mweji[y].lemois == "November 2020") {
          novem20[1] = this.props.mweji[y].price1;
          novem20[2] = this.props.mweji[y].price2;
          novem20[3] = this.props.mweji[y].price3;
          novem20[4] = this.props.mweji[y].price4;
          novem20[5] = this.props.mweji[y].price5;
          novem20[6] = this.props.mweji[y].price6;
          novem20[7] = this.props.mweji[y].price7;
          novem20[8] = this.props.mweji[y].price8;
          novem20[9] = this.props.mweji[y].price9;
        }

        if (this.props.mweji[y].lemois == "December 2020") {
          decem20[1] = this.props.mweji[y].price1;
          decem20[2] = this.props.mweji[y].price2;
          decem20[3] = this.props.mweji[y].price3;
          decem20[4] = this.props.mweji[y].price4;
          decem20[5] = this.props.mweji[y].price5;
          decem20[6] = this.props.mweji[y].price6;
          decem20[7] = this.props.mweji[y].price7;
          decem20[8] = this.props.mweji[y].price8;
          decem20[9] = this.props.mweji[y].price9;
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
          Sep20: sept20[yy],
          Oct20: octo20[yy],
          Nov20: novem20[yy],
          Dec20: decem20[yy],
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
        data={this.state.data /*this.state.data   this.props.mweji*/}
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
        <Bar dataKey="Sep20" fill="#00CC00" />
        <Bar dataKey="Oct20" fill="#0000FF" />
        <Bar dataKey="Nov20" fill="#FFC000" />
        <Bar dataKey="Dec20" fill="#FF0000" />
      </BarChart>
    );
  }
}
export default GraphPartCopper;
