import { StationGeneralInfo } from "@/services/responsesTypes";
import Link from "next/link";

interface StationsTableProps {
  stations: StationGeneralInfo[]
}

const StationsTable = (props: StationsTableProps) => {

  const {stations} = props;

  return (
    <table className="min-w-full table-auto border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-700">
          <th className="px-4 py-2 border border-gray-300 text-left">Station ID</th>
          <th className="px-4 py-2 border border-gray-300 text-left">Name</th>
        </tr>
      </thead>
      <tbody>
        {stations.map((station) => (
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
  )
}

export default StationsTable;