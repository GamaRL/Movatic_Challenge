"use client"

import { StationGeneralInfo } from "@/services/responsesTypes";
import { getAllStations } from "@/services/stationService";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [stations, setStations] = useState<StationGeneralInfo[] | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllStations()
      .then((data) => {
        setStations(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to load stations. Please try again.");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-xl font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Station List</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2 border border-gray-300 text-left">Station ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Name</th>
            </tr>
          </thead>
          <tbody>
            {stations?.map((station) => (
              <tr key={station.station_id} className="hover:bg-gray-600">
                <td className="px-4 py-2 border border-gray-300">
                  <Link
                    href={`/${station.station_id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {station.station_id}
                  </Link>
                </td>
                <td className="px-4 py-2 border border-gray-300">{station.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Home;
