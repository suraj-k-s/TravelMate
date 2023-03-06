import "./Chart.css"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({title, data, dataKey}) {
    
  return (
    <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <BarChart width={150} height={40} data={data}>
        <XAxis dataKey="name" stroke="greenyellow"/>
        <YAxis stroke="greenyellow"/>
          <Bar dataKey={dataKey} fill="greenyellow" />
          <Tooltip className="chartTooltip"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

