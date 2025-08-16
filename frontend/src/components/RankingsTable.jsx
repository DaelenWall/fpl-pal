function RankingsTable({ players }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th><th>Name</th><th>Team</th><th>Goals</th><th>xG</th><th>Shots</th><th>Score</th>
        </tr>
      </thead>
      <tbody>
        {players.map((p, idx) => (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{p.Player}</td>
            <td>{p.Squad}</td>
            <td>{p.Gls}</td>
            <td>{p.xG}</td>
            <td>{p.Sh}</td>
            <td>{p.Score.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default RankingsTable;
