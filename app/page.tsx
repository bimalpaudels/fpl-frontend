import TopFiveTable from "@/app/components/dashboard/top-five";

export default async function Page() {
  const data = await getPlayersData();
  return (
    <>
      <TopFiveTable
        players={data}
        title="SELECTED BY"
        attribute="total_points"
      />
    </>
  );
}

async function getPlayersData() {
  const res = await fetch(
    "http://127.0.0.1:8000/top-five?category=total_points",
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Data fetching failed");
  }
  return res.json();
}
