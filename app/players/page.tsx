import PlayerTable from "@/app/components/ui/table";

export default async function Page() {
  const data = await getPlayersData();

  return <PlayerTable players={data} />;
}

async function getPlayersData() {
  const res = await fetch("http://localhost:8000/players/", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Data fetching failed");
  }
  return res.json();
}
