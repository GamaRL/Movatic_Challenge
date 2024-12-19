"use client"

import { StationDetails } from "@/services/responsesTypes";
import { getStationDetails } from "@/services/stationService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const StationDetailsPage = () => {

  const { stationId }: { stationId: string } = useParams();

  const [details, setDetails] = useState<StationDetails | null>();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    getStationDetails(stationId)
      .then((data) => {
        setDetails(data);
      })
      .catch((err) => {
        setError("Failed to load stations. Please try again.");
      })
      .finally(() => {
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
    <main className="flex items-center h-screen bg-blue">
      <div className="mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Station Info</h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="text-lg font-medium text-gray-700">Station Name</div>
            <div className="text-lg text-gray-600">{details?.information.name}</div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-lg font-medium text-gray-700">Address</div>
            <div className="text-lg text-gray-600">{details?.information.address}</div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-lg font-medium text-gray-700">Station Type</div>
            <div className="text-lg text-gray-600">{details?.information._bcycle_station_type}</div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-lg font-medium text-gray-700">Region ID</div>
            <div className="text-lg text-gray-600">{details?.information.region_id}</div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-lg font-medium text-gray-700">Coordinates</div>
            <div className="text-lg text-gray-600">
              Latitude: {details?.information.lat}, Longitude: {details?.information.lon}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-lg font-medium text-gray-700">Bike Availability</div>
            <div className="text-lg text-gray-600">
              {details?.status.num_bikes_available} bikes available ({details?.status.num_bikes_available_types.classic} classic, {details?.status.num_bikes_available_types.electric} electric, {details?.status.num_bikes_available_types.smart} smart)
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-lg font-medium text-gray-700">Docks Available</div>
            <div className="text-lg text-gray-600">{details?.status.num_docks_available} docks available</div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-lg font-medium text-gray-700">Station Status</div>
            <div className="text-lg text-gray-600">
              {details?.status.is_installed ? 'Installed' : 'Not Installed'}, {details?.status.is_renting ? 'Renting' : 'Not Renting'}, {details?.status.is_returning ? 'Returning' : 'Not Returning'}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default StationDetailsPage;