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
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.mweji20 !== this.props.mweji20) {
      // console.log(this.props.mweji20);

      mma = this.props.mweji20;
      let sept20 = [];
      let octo20 = [];
      let nove20 = [];
      let dece20 = [];
      var leprix20 = [];

      var y = 0;
      for (y == 0; y < 8 /* this.props.mweji20.length */; y++) {
        if (this.props.mweji20[y].lemois == "September 2020") {
          sept20[1] = this.props.mweji20[y].price1;
          sept20[2] = this.props.mweji20[y].price2;
          sept20[3] = this.props.mweji20[y].price3;
          sept20[4] = this.props.mweji20[y].price4;
          sept20[5] = this.props.mweji20[y].price5;
          sept20[6] = this.props.mweji20[y].price6;
          sept20[7] = this.props.mweji20[y].price7;
          sept20[8] = this.props.mweji20[y].price8;
          sept20[9] = this.props.mweji20[y].price9;
        }

        if (this.props.mweji20[y].lemois == "October 2020") {
          octo20[1] = this.props.mweji20[y].price1;
          octo20[2] = this.props.mweji20[y].price2;
          octo20[3] = this.props.mweji20[y].price3;
          octo20[4] = this.props.mweji20[y].price4;
          octo20[5] = this.props.mweji20[y].price5;
          octo20[6] = this.props.mweji20[y].price6;
          octo20[7] = this.props.mweji20[y].price7;
          octo20[8] = this.props.mweji20[y].price8;
          octo20[9] = this.props.mweji20[y].price9;
        }

        if (this.props.mweji20[y].lemois == "November 2020") {
          nove20[1] = this.props.mweji20[y].price1;
          nove20[2] = this.props.mweji20[y].price2;
          nove20[3] = this.props.mweji20[y].price3;
          nove20[4] = this.props.mweji20[y].price4;
          nove20[5] = this.props.mweji20[y].price5;
          nove20[6] = this.props.mweji20[y].price6;
          nove20[7] = this.props.mweji20[y].price7;
          nove20[8] = this.props.mweji20[y].price8;
          nove20[9] = this.props.mweji20[y].price9;
        }

        if (this.props.mweji20[y].lemois == "December 2020") {
          dece20[1] = this.props.mweji20[y].price1;
          dece20[2] = this.props.mweji20[y].price2;
          dece20[3] = this.props.mweji20[y].price3;
          dece20[4] = this.props.mweji20[y].price4;
          dece20[5] = this.props.mweji20[y].price5;
          dece20[6] = this.props.mweji20[y].price6;
          dece20[7] = this.props.mweji20[y].price7;
          dece20[8] = this.props.mweji20[y].price8;
          dece20[9] = this.props.mweji20[y].price9;
        }
      }

      leprix20[1] = this.props.mweji20prix[0].pour1;
      leprix20[2] = this.props.mweji20prix[0].pour2;
      leprix20[3] = this.props.mweji20prix[0].pour3;
      leprix20[4] = this.props.mweji20prix[0].pour4;
      leprix20[5] = this.props.mweji20prix[0].pour5;
      leprix20[6] = this.props.mweji20prix[0].pour6;
      leprix20[7] = this.props.mweji20prix[0].pour7;
      leprix20[8] = this.props.mweji20prix[0].pour8;
      leprix20[9] = this.props.mweji20prix[0].pour9;

      var data = [];
      var yy = 1;
      for (yy == 1; yy < 10; yy++) {
        data.push({
          price: leprix20[yy],
          Sep20: sept20[yy],
          Oct20: octo20[yy],
          Nov20: nove20[yy],
          Dec20: dece20[yy],
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
        data={this.state.data /*this.state.data   this.props.mweji20*/}
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
