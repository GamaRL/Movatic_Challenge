import { StationDetails } from "@/services/responsesTypes";

interface StationInfoCardProps {
  details: StationDetails
}

/**
 * A component that helps to sum up the data related to a 
 * specific station.
 */
const StationInfoCard = (props: StationInfoCardProps) => {

  const {details} = props;

  return (
      <div className="p-6 bg-white shadow-lg rounded-lg xl:w-1/3 w-3/4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Station Info</h2>

        <div className="space-y-4">
          <div className="flex justify-start">
            <div className="text-lg font-bold text-gray-700 w-1/2">Station Name</div>
            <div className="text-lg text-gray-600">{details.information.name}</div>
          </div>

          <div className="flex justify-start">
            <div className="text-lg font-bold text-gray-700 w-1/2">Address</div>
            <div className="text-lg text-gray-600">{details.information.address}</div>
          </div>

          <div className="flex justify-start">
            <div className="text-lg font-bold text-gray-700 w-1/2">Station Type</div>
            <div className="text-lg text-gray-600">{details.information._bcycle_station_type}</div>
          </div>

          <div className="flex justify-start">
            <div className="text-lg font-bold text-gray-700 w-1/2">Region ID</div>
            <div className="text-lg text-gray-600">{details.information.region_id}</div>
          </div>

          <div className="flex justify-start">
            <div className="text-lg font-bold text-gray-700 w-1/2">Coordinates</div>
            <div className="text-lg text-gray-600">
              <ul className="list-disc px-5">
                <li>
                  Longitude: {details.information.lon}
                </li>
                <li>
                  Latitude: {details.information.lat}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="text-lg font-bold text-gray-700 w-1/2">Bike Availability</div>
            <div className="text-lg text-gray-600">
              {details.status.num_bikes_available} bikes available
              <ul className="list-disc px-5">
                <li>
                  {details.status.num_bikes_available_types.classic} classic
                </li>
                <li>
                  {details.status.num_bikes_available_types.electric} electric
                </li>
                <li>
                  {details.status.num_bikes_available_types.smart} smart
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="text-lg font-bold text-gray-700 w-1/2">Docks Available</div>
            <div className="text-lg text-gray-600">{details.status.num_docks_available} docks available</div>
          </div>

          <div className="flex justify-start">
            <div className="text-lg font-bold text-gray-700 w-1/2">Station Status</div>
            <div className="text-lg text-gray-600">
              <ul className="list-disc px-5">
                <li>
                  {details.status.is_installed ? 'Installed' : 'Not Installed'}
                </li>
                <li>
                  {details.status.is_renting ? 'Renting' : 'Not Renting'}
                </li>
                <li>
                  {details.status.is_returning ? 'Returning' : 'Not Returning'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default StationInfoCard;