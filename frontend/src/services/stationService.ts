import { StationDetails, StationGeneralInfo } from "./responsesTypes";

export const getAllStations : () => Promise<StationGeneralInfo[]> = async () => {
    const response = await fetch('http://127.0.0.1:5000/api/station')
    .then(res => res.json())

    return response as StationGeneralInfo[];
}

export const getStationDetails : (stationId: string) => Promise<StationDetails> = async (stationId) => {
    const response = await fetch(`http://127.0.0.1:5000/api/station/${stationId}`)
    .then(res => res.json())

    return response as StationDetails;
}