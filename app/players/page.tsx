import PlayerTable from "@/app/components/ui/table";
import { TableColumns } from "@/app/components/ui/table";
import Breadcrumbs from "@/app/components/ui/crumbs";
import { getPlayersData } from "./lib";

export default async function Page() {
  const dropdownOptions = [
    { label: "Traditional", href: "/players" },
    { label: "Advanced", href: "/players/advanced" }, // Adjust the href based on your actual route
  ];

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

  return (
    <>
      <Breadcrumbs current="Players" dropdownOptions={dropdownOptions} />
      <PlayerTable columns={traditionalColumnData} players={data} />
    </>
  );
}

export const dynamic = "force-dynamic";
