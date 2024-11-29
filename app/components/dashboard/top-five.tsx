import Link from "next/link";

type PlayerTopFive = {
  first_name: string;
  second_name: string;
  web_name: string;
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
    <div className="w-64 mx-6 my-3">
      <div className="font-bold text-sm">
        <span>{title}</span>
      </div>
      <hr />
      <table className="min-w-full">
        <tbody>
          {players.map((player, index) => (
            <tr key={player.player_id}>
              <td className="flex justify-between text-sm">
                <span className="text-sm">
                  <Link href={`/players/${player.player_id}`}>
                    {player.web_name}
                  </Link>
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
