import TopFiveTable from "@/app/components/dashboard/top-five";

export default async function Page() {
  const categories = [
    { key: "selected_by_percent", title: "SELECTED BY" },
    { key: "total_points", title: "TOTAL POINTS" },
    { key: "expected_goals", title: "EXPECTED GOALS" },
    { key: "expected_assists", title: "EXPECTED ASSISTS" },
    { key: "threat", title: "THREAT" },
  ];

  const basic_categories = [
    { key: "goals_scored", title: "GOALS SCORED" },
    { key: "assists", title: "ASSISTS" },
    { key: "own_goals", title: "OWN GOALS" },
    { key: "yellow_cards", title: "YELLOW CARDS" },
    { key: "red_cards", title: "RED CARDS" },
  ];

  const data = await getPlayersData();
  const basic_data = await getPlayersBasicData();
  return (
    <div className="flex justify-between">
      <div className="w-2/3">
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
      <div className="w-1/3 flex justify-center">
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
  const res = await fetch("http://127.0.0.1:8000/top-five-combined", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Data fetching failed");
  }
  return res.json();
}

async function getPlayersBasicData() {
  const res = await fetch("http://127.0.0.1:8000/top-five-basics", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Data fetching failed");
  }
  return res.json();
}
