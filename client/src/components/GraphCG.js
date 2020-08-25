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

class GraphCG extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      donnees: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.mambo !== this.props.mambo) {
      this.setState({ donnees: this.props.mambo });
    }
  }

  render() {
    return (
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <BarChart
            layout="horizontal"
            width={500}
            height={300}
            data={this.props.mambo}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="price" type="category" />
            <YAxis type="number" />
            <Tooltip />
            <Legend />
            <Bar dataKey="August20" fill="#0000FF" />
            <Bar dataKey="Sept20" fill="#00CC00" />
            <Bar dataKey="October20" fill="#7F6000" />
            <Bar dataKey="November20" fill="#00B050" />
            <Bar dataKey="December20" fill="#FF0000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default GraphCG;
