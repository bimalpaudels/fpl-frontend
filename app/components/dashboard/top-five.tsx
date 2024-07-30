type PlayerTopFive = {
  first_name: string;
  second_name: string;
  player_id: number;
  selected_by_percent: number;
};

type TopFiveTableProps = {
  players: PlayerTopFive[];
  title: string;
  attribute: string;
};

export default function TopFiveTable({
  players,
  title,
  attribute,
}: TopFiveTableProps) {
  return (
    <div className="w-64 m-3">
      <div className="font-bold text-sm">
        <p>{title}</p>
      </div>
      <hr />
      <table className="min-w-full">
        <tbody>
          {players.map((player, index) => (
            <tr key={player.player_id}>
              <td className="flex justify-between">
                <span className="flex-grow">
                  {player.first_name} {player.second_name}
                </span>
                <span>{player[attribute as keyof PlayerTopFive]}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
