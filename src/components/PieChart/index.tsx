import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

type Data = {
  x: number
  value: number
}

const populateData = () => {
  const data: Data[] = []
  for (let i = 0; i < 6; i++) {
    data.push({ x: i, value: Number((10 * Math.random()).toFixed(2)) })
  }
  return data
}

const data = populateData()

const PieChartComponent: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" fill="#8884d8" label />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default PieChartComponent
