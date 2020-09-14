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
class GraphPartGold extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ width: "70%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            layout="horizontal"
            width={700}
            height={500}
            data={this.props.mweji}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis type="number" />
            <XAxis dataKey="price" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sep20" fill="#00CC00" />
            <Bar dataKey="Oct20" fill="#7F6000" />
            <Bar dataKey="Nov20" fill="#00B050" />
            <Bar dataKey="Dec20" fill="#FF0000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default GraphPartGold;
