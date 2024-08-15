import PlayerTable from "@/app/components/ui/table";
import { TableColumns } from "@/app/components/ui/table";
import { getPlayersData } from "@/app/players/page";

export default async function Page() {
  const advancedColumnData: TableColumns[] = [
    { title: "PLAYER", key: "web_name" },
    { title: "BPS", key: "bps" },
    { title: "INF", key: "influence" },
    { title: "CRE", key: "creativity" },
    { title: "THR", key: "threat" },
    { title: "ICT", key: "ict_index" },
    { title: "xG", key: "expected_goals" },
    { title: "xA", key: "expected_assists" },
    { title: "xGC", key: "expected_goals_conceded" },
    { title: "xGI", key: "expected_goals_involvement" },
    { title: "xG90", key: "expected_goals_per_90" },
    { title: "s90", key: "saves_per_90" },
    { title: "xA90", key: "expected_assists_per_90" },
    { title: "xGA90", key: "expected_goals_involvements_per_90" },
    { title: "xGC90", key: "expected_goals_conceded_per_90" },
    { title: "GC90", key: "goals_conceded_per_90" },
  ];

  const data = await getPlayersData();

  return <PlayerTable columns={advancedColumnData} players={data} />;
}