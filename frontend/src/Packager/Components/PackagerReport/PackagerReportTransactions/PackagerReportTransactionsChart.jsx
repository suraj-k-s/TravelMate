import "./PackagerReportTransactionsChart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Charts({title, data, dataKey,grid}) {
    
  return (
    <div className="PackagerReportTransactionsChart">
        <h3 className="PackagerReportTransactionsChartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
            <XAxis dataKey="name" stroke="aqua"/>
            <Line type="monotone" dataKey={dataKey} stroke="aqua"/>
            <Tooltip/>
            {grid && <CartesianGrid stroke="black" strokeDasharray="5 5"/>}
                </LineChart>
        </ResponsiveContainer>
        </div>
  )
}
