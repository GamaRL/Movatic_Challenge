"use client"

import ErrorMessage from "@/components/errorMessage";
import LoadingSpin from "@/components/loadingSpin";
import StationInfoCard from "@/components/stationInfoCard";
import { StationDetails } from "@/services/responsesTypes";
import { getStationDetails } from "@/services/stationService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const StationDetailsPage = () => {

  const { stationId }: { stationId: string } = useParams();

  const [details, setDetails] = useState<StationDetails>();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    // Retreive station data using 'stationId'
    getStationDetails(stationId)
      .then((data) => {
        setDetails(data);
      })
      .catch(() => {
        setError("Failed to load this stations. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });

  }, [stationId]);


  // Verify if is loading
  if (isLoading) {
    return <LoadingSpin/>
  }

  // Verify if there is an error
  if (error) {
    return <ErrorMessage message={error}/>
  }

  if (!details) {
    return <ErrorMessage message="Unable to find this station"/>
  }

  return (
    <main className="flex items-center justify-center h-screen bg-blue">
      <StationInfoCard details={details}/>
    </main>
  );
}

export default StationDetailsPage;