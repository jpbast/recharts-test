import {
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

type Data = {
  x: number
  value: number
  value2?: number
  value3?: number
}

const populateData = () => {
  const data: Data[] = []
  for (let i = 0; i < 10; i++) {
    data.push({
      x: i,
      value: Number((6 * Math.random()).toFixed(2)),
      value2: Number((6 * Math.random()).toFixed(2)),
      value3: Number((6 * Math.random()).toFixed(2))
    })
  }
  return data
}

const data = populateData()

const BarChartComponent: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart barSize={100} barGap={50} data={data} layout="horizontal">
        <Bar stackId="x" dataKey="value" fill="#d63c3c">
          <LabelList dataKey="value" style={{ fill: '#ffffff' }} />
        </Bar>
        <Bar stackId="x" dataKey="value2" fill="#71df5e">
          <LabelList dataKey="value2" style={{ fill: '#ffffff' }} />
        </Bar>
        <Bar stackId="x" dataKey="value3" fill="#67a0eb">
          <LabelList dataKey="value3" style={{ fill: '#ffffff' }} />
        </Bar>
        <XAxis dataKey="x" />
        <YAxis dataKey="value" height={900} domain={[0, 18]} />
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent
