"use client";

import { useState, useEffect } from "react";
import Pagination from "@/app/components/ui/pagination";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

type Player = {
  // first_name: string;
  web_name: string;
  team: string;
  now_cost: number;
  player_id: number;
  minutes: number;
  total_points: number;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
  goals_conceded: number;
  own_goals: number;
  penalties_saved: number;
  penalties_missed: number;
  yellow_cards: number;
  red_cards: number;
  saves: number;
  bonus: number;
  bps: number;
  influence: number;
  creativity: number;
  threat: number;
  ict_index: number;
  starts: number;
  expected_goals: number;
  expected_assists: number;
  expected_goals_conceded: number;
  expected_goals_involvement: number;
  expected_goals_per_90: number;
  saves_per_90: number;
  expected_assists_per_90: number;
  expected_goals_involvements_per_90: number;
  expected_goals_conceded_per_90: number;
  goals_conceded_per_90: number;
  points_per_game: number;
  position: string;
};

export type TableColumns = {
  title: string;
  key: keyof Player;
};

type PlayerTableProps = {
  columns: TableColumns[];
  players: Player[];
};

export default function PlayerTable({ columns, players }: PlayerTableProps) {
  const [sortConfig, setSortConfig] = useState({
    key: "total_points",
    dir: -1,
  });
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [sortedPlayers, setSortedPlayers] = useState(players);

  function sortData(key: string) {
    let newDir = -1;
    if (sortConfig.key === key && sortConfig.dir === -1) {
      newDir = 1;
    }
    setSortConfig({ key, dir: newDir });
    setCurrentPage(0);
  }

  useEffect(() => {
    async function getPlayersData(
      sortBy: string,
      dir: number,
      limit: number = 50
    ) {
      const res = await fetch(
        `${BACKEND_URL}/players?skip=${
          currentPage * limit
        }&limit=${limit}&sort=${sortBy}&dir=${dir}`,
        {
          cache: "no-cache",
        }
      );
      if (!res.ok) {
        throw new Error("Data fetching failed");
      }
      const data = await res.json();
      console.log(data);
      setSortedPlayers(data);

      const total = data.total || 600;
      setTotalPages(Math.ceil(total / limit));
    }
    getPlayersData(sortConfig.key, sortConfig.dir);
  }, [sortConfig, currentPage]);

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-20">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`px-4 py-2 text-justify text-xs font-bold uppercase ${
                    column.key === "web_name"
                      ? ""
                      : "cursor-pointer relative hover:bg-blue-100"
                  }`}
                  onClick={
                    column.key === "web_name"
                      ? undefined
                      : () => sortData(column.key)
                  }
                >
                  {column.title}
                  {sortConfig.key === column.key &&
                    (sortConfig.dir === 1 ? "▲" : "▼")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-20">
            {sortedPlayers.map((player, index) => (
              <tr key={index} className="hover:bg-blue-100">
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-2 text-sm whitespace-nowrap max-w-40"
                  >
                    {col.key === "web_name" ? (
                      <>
                        <span className="text-base">{player.web_name}</span>
                        <span className="text-xxs mx-1 font-bold">
                          {player.position}
                        </span>
                      </>
                    ) : (
                      player[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
