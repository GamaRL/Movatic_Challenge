import json
from requests import get


def get_all_stations():
    """
    Returns a list of all stations, each entry is composed of the station_id and the name.
    """
    response = get('https://gbfs.bcycle.com/bcycle_madison/station_information.json')

    data = list(map(
        lambda s : {'station_id': s['station_id'], 'name': s['name']},
        json.loads(response.text)['data']['stations']
    ))

    return data

def get_station_information(station_id: str):
    """
    Returns the information of the station identified by station_id.
    """
    response = get('https://gbfs.bcycle.com/bcycle_madison/station_information.json')

    data = json.loads(response.text)['data']

    stations_status: list = data['stations']

    return next(filter(lambda s : s['station_id'] == station_id, stations_status), None)

def get_station_status(station_id: str):
    """
    Returns the status of the station identified by station_id.
    """
    response = get('https://gbfs.bcycle.com/bcycle_madison/station_status.json')

    data = json.loads(response.text)['data']

    stations_status: list = data['stations']

    return next(filter(lambda s : s['station_id'] == station_id, stations_status), None)
