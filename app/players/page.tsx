import PlayerTable from "@/app/components/ui/table";
import { TableColumns } from "@/app/components/ui/table";

export default async function Page() {
  const traditionalColumnData: TableColumns[] = [
    { title: "PLAYER", key: "web_name" },
    { title: "TEAM", key: "team" },
    { title: "P", key: "now_cost" },
    { title: "ST", key: "starts" },
    { title: "MIN", key: "minutes" },
    { title: "TP", key: "total_points" },
    { title: "PPG", key: "points_per_game" },
    { title: "GS", key: "goals_scored" },
    { title: "AST", key: "assists" },
    { title: "CS", key: "clean_sheets" },
    { title: "GC", key: "goals_conceded" },
    { title: "OG", key: "own_goals" },
    { title: "PS", key: "penalties_saved" },
    { title: "PM", key: "penalties_missed" },
    { title: "YC", key: "yellow_cards" },
    { title: "RC", key: "red_cards" },
    { title: "S", key: "saves" },
    { title: "B", key: "bonus" },
  ];

  const data = await getPlayersData();

  return <PlayerTable columns={traditionalColumnData} players={data} />;
}

export async function getPlayersData(
  sort: string = "total_points",
  dir: number = -1
) {
  const res = await fetch(
    `http://localhost:8000/players?sort=${sort}&dir=${dir}`,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Data fetching failed");
  }
  return res.json();
}
