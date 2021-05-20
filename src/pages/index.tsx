import LineChart from '../components/LineChart'
import PieChart from '../components/PieChart'
import BarChart from '../components/BarChart'

export default function Home() {
  return (
    <div style={{ width: '90%', margin: 'auto', padding: '20px 0' }}>
      <LineChart />
      <PieChart />
      <BarChart />
    </div>
  )
}
