import { StationDetails, StationGeneralInfo } from "./responsesTypes";

let API_URL = '';

const getApiRoute : () => Promise<string> = async () => {

    if (API_URL === '') {

        const response = await fetch("/api/config");
        const config = await response.json();
        API_URL = config.apiUrl;
    }

    return API_URL;
}


export const getAllStations : () => Promise<StationGeneralInfo[]> = async () => {
    const apiUrl = await getApiRoute();
    const response = await fetch(`${apiUrl}/station`)
        .then(res => res.json());

    return response as StationGeneralInfo[];
}

export const getStationDetails : (stationId: string) => Promise<StationDetails> = async (stationId) => {
    const apiUrl = await getApiRoute();
    const response = await fetch(`${apiUrl}/station/${stationId}`)
        .then(res => res.json());

    return response as StationDetails;
}