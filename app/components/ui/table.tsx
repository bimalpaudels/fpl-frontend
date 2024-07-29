type Player = {
  first_name: string;
  second_name: string;
  now_cost: number;
  player_id: number;
};

type PlayerTableProps = {
  players: Player[];
};

export default function PlayerTable({ players }: PlayerTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Player ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={index}>
            <td>{player.player_id}</td>
            <td>{player.first_name}</td>
            <td>{player.second_name}</td>
            <td>{player.now_cost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
