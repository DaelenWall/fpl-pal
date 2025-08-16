import { useEffect, useState } from 'react';
import axios from 'axios';
import RankingsTable from './components/RankingsTable';
import PerformanceChart from './components/PerformanceChart';

function App() {
  const [position, setPosition] = useState('striker');
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/rankings/${position}`)
      .then(res => setPlayers(res.data.data));
  }, [position]);

  const topPlayer = players[0];

  return (
    <div>
      <h1>⚽ Soccer Player Rankings Dashboard</h1>
      <select value={position} onChange={e => setPosition(e.target.value)}>
        <option value="striker">Striker</option>
        <option value="cb">Center Back</option>
        <option value="cm">Midfielder</option>
        <option value="gk">Goalkeeper</option>
      </select>

      {topPlayer && <h2>🏆 Top Player: {topPlayer.Player} (Score: {topPlayer.Score})</h2>}
      <RankingsTable players={players} />
      <PerformanceChart players={players.slice(0, 5)} />
    </div>
  );
}

export default App;
