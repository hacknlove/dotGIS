import React, { PureComponent } from 'react'
import {
  ResponsiveContainer, ComposedChart, Line, Area, XAxis, YAxis, Tooltip, Legend
} from 'recharts'
import moment from 'moment'
import './chart.scss'

export default class Example extends PureComponent<any> {

  formatTime (timestamp: number) {
    return moment(1000 * timestamp).format('YYYY-MM-DD HH[h]')
  }
  tooltip = (props: any) => {
    if (!props.active) return null
      const label = this.formatTime(props.label)

      console.log(props)
      return (
        <div className="recharts-default-tooltip">
          <p className="recharts-tooltip-label">{label}</p>
          <ul className="recharts-tooltip-item-list">
            {
              props.payload.map((item: any) => (
                <li className="recharts-tooltip-item" style={{color: item.color}}>
                  <span className="recharts-tooltip-item-name">{item.name}</span>
                  <span className="recharts-tooltip-item-separator">: </span>
                  <span className="recharts-tooltip-item-value">{item.value}</span>
                  <span className="recharts-tooltip-item-unit">{item.unit}</span>
                </li>
              ))
            }
          </ul>
        </div>
      )
    }

  render() {
    return (
        <ResponsiveContainer aspect={1.6}>
          <ComposedChart data={this.props.data}>
            <XAxis dataKey="timestamp" stroke="#202c45" interval="preserveStartEnd" tickFormatter={this.formatTime}/>
            <YAxis yAxisId="left" stroke="#202c45" domain={[0, 40]} tickFormatter={e => `${e}º`}/>
            <YAxis yAxisId="right" orientation="right" stroke="#202c45" domain={[0, 100]} tickFormatter={e => `${e}%`}/>
            <Tooltip content={this.tooltip}/>
            <Legend />
            <Line dot={false} yAxisId="left" type="monotone" dataKey="temperatura" stroke="#ff7300" unit="º"/>
            <Area dot={false} yAxisId="right" type="monotone" dataKey="humedad" stroke="#007de6" fill="#007de622" unit="%"/>
          </ComposedChart>
        </ResponsiveContainer>

      // <ResponsiveContainer aspect={1.6}>
      //   <ComposedChart data={this.props.data}>
      //     <XAxis stroke="#202c45" interval="preserveStartEnd" dataKey="timestamp" />
      //     <YAxis yAxisId="left" stroke="#202c45" domain={[0, 40]} />
      //     <YAxis yAxisId="right" orientation="right" stroke="#202c45" domain={[0, 100]} />
      //     <Tooltip />
      //     <Legend />
      //     <Line dot={false} yAxisId="left" type="monotone" dataKey="temperatura" stroke="#ff7300" />
      //     <Area dot={false} yAxisId="right" type="monotone" dataKey="humedad" stroke="#007de6" fill="#007de622" />
      //   </ComposedChart>
      // </ResponsiveContainer>
      )
  }
}