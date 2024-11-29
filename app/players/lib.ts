const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getPlayersData(
  sort: string = "total_points",
  dir: number = -1
) {
  const res = await fetch(`${BACKEND_URL}/players?sort=${sort}&dir=${dir}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Data fetching failed");
  }
  return res.json();
}
