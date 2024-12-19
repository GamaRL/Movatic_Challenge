from flask import Flask, jsonify
from flask_cors import cross_origin

from services.station_service import get_station_information, get_station_status, get_all_stations

app = Flask(__name__)

@app.route('/api/station', methods=['GET'])
@cross_origin()
def api_get_all_stations():
    stations_info = get_all_stations()
    return jsonify(stations_info)

@app.route('/api/station/<station_id>', methods=['GET'])
@cross_origin()
def api_get_station(station_id=''):

    station_information = get_station_information(station_id)
    station_status = get_station_status(station_id)

    if station_information is None or station_status is None:
        return None, 404

    station = {'information': station_information, 'status': station_status}

    return jsonify(station)

if __name__ == '__main__':
    app.run(debug=True)

