import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class Example extends PureComponent {
  static jsfiddleUrl = '//jsfiddle.net/alidingling/9wnuL90w/';

  data () {
    return this.props.data.map(data => ({
      name: data.dt_txt.split(/ |-/)[2],
      temperatura: data.main.temp,
      humedad: data.main.humidity,
    }))
  }


  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="99%" debounce="1" aspect={1.6}>
          <ComposedChart
            width={500}
            height={400}
            data={this.data()}
            margin={{
              top: 10, right: 10, bottom: 10, left: 10,
            }}
          >
            <CartesianGrid stroke="#fafafa" />
            <XAxis stroke="#202c45" interval="preserveStartEnd" dataKey="name" />
            <YAxis yAxisId="left" stroke="#202c45" domain={[0, 40]}/>
            <YAxis yAxisId="right" orientation="right" stroke="#202c45" domain={[0, 100]}/>
            <Tooltip />
            <Legend />
            <Line dot={false} yAxisId="left" type="monotone" dataKey="temperatura" stroke="#ff7300" />
            <Area dot={false} yAxisId="right" type="monotone" dataKey="humedad" stroke="#007de6" fill="#007de622"/>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
