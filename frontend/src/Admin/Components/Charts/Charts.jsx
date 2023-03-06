import "./Charts.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Charts({title, data, dataKey,grid}) {
    
  return (
    <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
            <XAxis dataKey="name" stroke="greenyellow"/>
            <Line type="monotone" dataKey={dataKey} stroke="greenyellow"/>
            <Tooltip/>
            {grid && <CartesianGrid stroke="rgb(211 207 207)" strokeDasharray="5 5"/>}
                </LineChart>
        </ResponsiveContainer>
        </div>
  )
}
