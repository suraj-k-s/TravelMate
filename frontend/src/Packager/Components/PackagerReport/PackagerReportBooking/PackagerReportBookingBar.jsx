import "./PackagerReportBookingBar.css"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function PackagerReportBookingBar({title, data, dataKey}) {
    
  return (
    <div className="packagerReportBookingBarChart">
      <div className="packagerReportBookingBarChartTitle">
        <h3>{title}</h3>
        </div>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <BarChart width={150} height={40} data={data}>
        <XAxis dataKey="name" stroke="greenyellow"/>
        <YAxis stroke="greenyellow"/>
          <Bar dataKey={dataKey} fill="greenyellow" />
          <Tooltip className="packagerReportBookingBarChartTooltip"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

