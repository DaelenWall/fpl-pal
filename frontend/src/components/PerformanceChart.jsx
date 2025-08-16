import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

function PerformanceChart({ players }) {
  return (
    <BarChart width={600} height={300} data={players}>
      <XAxis dataKey="Player" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="Score" fill="#8884d8" />
    </BarChart>
  );
}
export default PerformanceChart;
