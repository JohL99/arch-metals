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
      data1: [],
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.mambo !== this.props.mambo) {
      this.setState({ data1: this.props.mambo });
    }
  }
  render() {
    return (
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <BarChart
            layout="vertical"
            width={500}
            height={400}
            data={this.state.data1}
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
            <Bar dataKey="Sep20" fill="#00CC00" />
            <Bar dataKey="Oct20" fill="#0000FF" />
            <Bar dataKey="Nov20" fill="#FFC000" />
            <Bar dataKey="Dec20" fill="#FF0000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default GraphCG;
