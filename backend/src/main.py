from flask import Flask, jsonify
from flask_cors import cross_origin

from services.station_service import get_station_information, get_station_status, get_all_stations

app = Flask(__name__)

@app.route('/api/station', methods=['GET'])
@cross_origin()
def api_get_all_stations():
    """
    Endpoint to fetch all stations. Returns a list of stations with the next data:
    'station_id', 'name'
    """
    stations_info = get_all_stations()
    return jsonify(stations_info)

@app.route('/api/station/<station_id>', methods=['GET'])
@cross_origin()
def api_get_station(station_id=''):
    """
    Endpoint to fetch a spcific station details. Returns a combination of status data
    and information data provided by the given API for the project. If the station is
    not found, returns a 404 response.
    """
    station_information = get_station_information(station_id)
    station_status = get_station_status(station_id)

    if station_information is None or station_status is None:
        return None, 404

    station = {'information': station_information, 'status': station_status}

    return jsonify(station)

if __name__ == '__main__':
    app.run(debug=True)

