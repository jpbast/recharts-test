import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'

type Data = {
  x: number
  value: number
}

const populateData = () => {
  const data: Data[] = []
  for (let i = 0; i < 30; i++) {
    data.push({ x: i, value: 10 * Math.random() })
  }
  return data
}

const data = populateData()

const LineChartComponent: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          strokeWidth={4}
        />
        <XAxis dataKey="x" />
        <YAxis dataKey="value" tickLine={false} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChartComponent
