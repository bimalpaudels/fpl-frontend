import Link from "next/link";
import TopFiveTable from "@/app/components/dashboard/top-five";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function Page() {
  const categories = [
    { key: "selected_by_percent", title: "SELECTED BY" },
    { key: "total_points", title: "TOTAL POINTS" },
    { key: "expected_goals", title: "EXPECTED GOALS" },
    { key: "expected_assists", title: "EXPECTED ASSISTS" },
    { key: "points_per_game", title: "POINTS PER GAME" },
    { key: "expected_goals_involvement", title: "xG INVOLVMENTS" },
    { key: "expected_goals_conceded", title: "xG CONCEDED" },
    { key: "expected_goals_per_90", title: "xG PER 90" },
    { key: "expected_assists_per_90", title: "xA PER 90" },
    { key: "threat", title: "THREAT" },
  ];

  const basic_categories = [
    { key: "goals_scored", title: "GOALS SCORED" },
    { key: "assists", title: "ASSISTS" },
    { key: "clean_sheets", title: "CLEAN SHEETS" },
    { key: "own_goals", title: "OWN GOALS" },
    { key: "minutes", title: "MINUTES" },
    { key: "yellow_cards", title: "YELLOW CARDS" },
    { key: "red_cards", title: "RED CARDS" },
  ];

  const data = await getPlayersData();
  const basic_data = await getPlayersBasicData();
  return (
    <div className="flex items-start ">
      <div className="w-3/4 bg-white shadow-lg mr-6">
        <div className="flex justify-between mt-4">
          <span className="text-2xl font-bold uppercase mx-6">Players</span>
          <span>
            <Link href="/players" className="mx-4 text-sm text-blue-500	">
              All Stats
            </Link>
          </span>
        </div>

        <div className="flex flex-wrap">
          {categories.map(({ key, title }) => (
            <TopFiveTable
              key={key}
              players={data[key]}
              title={title}
              attribute={key}
            />
          ))}
        </div>
      </div>
      <div className="w-1/4 flex flex-col justify-center bg-white">
        <span className="font-bold uppercase text-xl my-2 mx-6">
          More stats
        </span>
        <hr className="mx-6" />
        <div>
          {basic_categories.map(({ key, title }) => (
            <TopFiveTable
              key={key}
              players={basic_data[key]}
              title={title}
              attribute={key}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

async function getPlayersData() {
  const res = await fetch(`${BACKEND_URL}/top-five-combined`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Data fetching failed");
  }
  return res.json();
}

async function getPlayersBasicData() {
  const res = await fetch(`${BACKEND_URL}/top-five-basics`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Data fetching failed");
  }
  return res.json();
}

export const dynamic = "force-dynamic";
