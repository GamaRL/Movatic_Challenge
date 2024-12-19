"use client"

import ErrorMessage from "@/components/errorMessage";
import LoadingSpin from "@/components/loadingSpin";
import StationsTable from "@/components/stationsTable";
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
      })
      .catch(() => {
        setError("Failed to load stations. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // Verify if is loading
  if (isLoading) {
    return <LoadingSpin/>
  }

  // Verify if there is an error
  if (error) {
    return <ErrorMessage message={error}/>
  }

  if (!stations) {
    return <ErrorMessage message={'Unable to find stations'}/>
  }

  return (
    <main className="py-6 px-32">
      <h1 className="text-3xl font-bold text-center mb-6">Station List</h1>

      <div className="overflow-x-auto">
        <StationsTable stations={stations}/>
      </div>
    </main>
  );
}

export default Home;
